import express from 'express';
import Bundler from 'parcel-bundler';
import path from 'path';

const app = express();
const port = 8080 || process.env.PORT;
const bundler = new Bundler(path.join(__dirname, '../src/client/index.html'));

app.use(bundler.middleware());

app.get("/", (req, res) => {
  res.send("Hi")
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
