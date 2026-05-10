const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});

app.get('/about', (req, res) => { 
  res.send('<h1>About Me</h1><p>I am building an Express server.</p>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: hello@mysite.com');
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

app.get('/api/greeting', (req, res) => { 
  const name = req.query.name || 'World'; 
  res.json({ greeting: 'Hello, ' + name + '!' }); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});