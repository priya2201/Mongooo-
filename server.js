const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: 'Please upload a file' });
  }
  const file = req.files.image;
  const fileName = file.name;

  file.mv(path.join(__dirname, 'uploads', fileName), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error occurred while uploading the file' });
    }
    console.log('File uploaded successfully');
    res.json({ filename: fileName });
  });
});

app.get('/api/fetch-image/:filename', (req, res) => {
  const fileName = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', fileName));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
