import React, { useState } from 'react';

const ImageFile = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [filename, setFilename] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    setIsPending(true);
    fetch('http://localhost:9000/api/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        console.log('File uploaded successfully');
        setIsPending(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFilename(data.filename);
      })
      .catch((err) => console.log(err));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFetch = () => {
    fetch(`http://localhost:9000/api/fetch-image/${filename}`)
      .then((res) => {
        if (res.ok) {
          return res.blob();
        } else {
          throw new Error('Failed to fetch image');
        }
      })
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setImageUrl(objectURL);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {!isPending && <button>Create Image File</button>}
        {isPending && <button disabled>Creating Image file...</button>}
      </form>
      <button onClick={handleFetch}>Fetch Image</button>
      {imageUrl && <img src={imageUrl} alt="Fetched Image" />}
    </div>
  );
};

export default ImageFile;
