const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer'); // Import multer
const path = require('path'); // Import path module
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use an absolute path for reliability
    cb(null, path.join(__dirname, '..' , 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
// File filter for image uploads
const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 1 // Only one file per request
  }
});

// Ensure uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads directory:', uploadsDir);
}

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // No token provided
  }

  jwt.verify(token, process.env.JWT_SECRET || 'M5RucW0ohgOm9nIGjkEIrCSDYNlanraSzxBe2cvFImZGIZ8g8O7mChvIkfhfTWNHRPufSnPjdl9sLExhTynKtSiLYq0naZSpVRvqlJOdloVTU1GmpOwxn6ur9fxpT4EbIjf5RWd1nD6Y5NWubuTfPtuvMZ8FUSqCNVQ51lnsXGHqaZraeajVIx5ZrGksoMMAJ4cp1LPVzXSKdTNDu3DoBI321qwJE1NuQCgFvaJDvcDGbMmf8s5YbqnxnUu4yPXL', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Invalid token
    }
    req.user = user;
    next();
  });
};

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Hardcoded user for demonstration purposes
const users = [
  {
    username: 'admin',
    password: bcrypt.hashSync('@admin123.', 10) // Hash the password
  }
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare provided password with hashed password
  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create and sign a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'supersecretjwtkey', { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

// In-memory array for gallery items (for demonstration)
let galleryItems = []; // Use let because it will be reassigned by filter
let nextGalleryId = 1;

// Get all gallery items
app.get('/api/gallery', (req, res) => {
  try {
    res.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ message: 'Internal server error while fetching gallery items' });
  }
});

// Add a new gallery item (image upload)
app.post('/api/gallery', authenticateToken, (req, res) => {
  // Handle multer upload with error handling
  const uploadHandler = upload.single('image');

  uploadHandler(req, res, (err) => {
    if (err) {
      console.error('File upload error:', err);
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
      }
      if (err.message === 'Only image files are allowed') {
        return res.status(400).json({ message: 'Only image files are allowed' });
      }
      return res.status(400).json({ message: 'File upload failed', error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    try {
      const { title, description } = req.body;

      // Validate required fields
      if (!title || !title.trim()) {
        return res.status(400).json({ message: 'Title is required' });
      }

      const newGalleryItem = {
        id: nextGalleryId++,
        title: title.trim(),
        description: description ? description.trim() : '',
        imageUrl: `/uploads/${req.file.filename}`,
      };

      galleryItems.push(newGalleryItem);
      console.log('Gallery item created:', newGalleryItem);
      res.status(201).json({ message: 'Image uploaded successfully', item: newGalleryItem });
    } catch (error) {
      console.error('Error creating gallery item:', error);
      res.status(500).json({ message: 'Internal server error while creating gallery item' });
    }
  });
});

// Update a gallery item
app.put('/api/gallery/:id', authenticateToken, upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const itemIndex = galleryItems.findIndex(item => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Gallery item not found' });
  }

  // If a new image is uploaded, update the imageUrl
  if (req.file) {
    // In a real application, you would also delete the old image file from the server
    galleryItems[itemIndex].imageUrl = `/uploads/${req.file.filename}`;
  }

  galleryItems[itemIndex].title = title || galleryItems[itemIndex].title;
  galleryItems[itemIndex].description = description || galleryItems[itemIndex].description;

  res.json({ message: 'Gallery item updated successfully', item: galleryItems[itemIndex] });
});

// Delete a gallery item
app.delete('/api/gallery/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const initialLength = galleryItems.length;
  galleryItems = galleryItems.filter(item => item.id !== parseInt(id));

  if (galleryItems.length === initialLength) {
    return res.status(404).json({ message: 'Gallery item not found' });
  }

  // In a real application, you would also delete the image file from the server
  res.json({ message: 'Gallery item deleted successfully' });
});

app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
