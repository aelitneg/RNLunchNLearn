const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.send({
    message: 'Hello from Node Land!'
  })
});

app.listen(PORT, () => console.log(`RNLunchNLearnServer listening on port ${PORT}!`));