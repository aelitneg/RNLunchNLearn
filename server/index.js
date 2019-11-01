const express = require('express');
const app = express();
const PORT = 3000;

app.get('/lunch', (req, res) => {
  res.send({
    message: 'learn'
  })
});

app.listen(PORT, () => console.log(`RNLunchNLearnServer listening on port ${PORT}!`));