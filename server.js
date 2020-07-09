const express = require(`express`);
const app = express();
const port = 4001;


app.listen(port, () => { // begin listening/run server
    console.log(`Listening on port ${port}`);
});
