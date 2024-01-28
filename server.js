const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors()); // Add this line to enable CORS

app.get('/fake-api/image', (req, res) => {
  // Replace the URL with your desired image URL
  const imageUrl = 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/217467441_3021899358073543_8893292342316754494_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=rTENc6HvJeQAX-JffkO&_nc_ht=scontent-lax3-1.xx&oh=00_AfD9tpPHzVVIAk02qLGF4PkoA5SMDHC6-bBZUh29yJfPLg&oe=65BAD7DA';
  res.json({ imageUrl });
});

app.listen(port, () => {
  console.log(`Fake API server is running at http://localhost:${port}`);
});

