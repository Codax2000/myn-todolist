const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {

  // Generate some passwords
  const passwords = ["a;slkdjf;alskjdf", "2;lkjoivup"];

  // Return them as json
  res.json(passwords);

  console.log(`Sent 2 passwords`);
});

app.get('/api/tasks', (req, res) => {
  const tasks = [
    {
      "start": '2021-12-25T08:00:00.000Z',
      "end": '2021-12-27T08:00:00.000Z',
      "text": "take out the trash"
    },
    {
      "start": '2021-12-23T08:00:00.000Z',
      "end": '2021-12-26T08:00:00.000Z',
      "text": "write thank you letters"
    }
  ];

  res.json(tasks);

  console.log(tasks);
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);