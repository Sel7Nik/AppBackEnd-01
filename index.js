import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://user:user@cluster0.do71t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.use(express.static('static'));

app.use(fileUpload({}));

app.use('/api', router);

async function startApp(params) {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT' + PORT);
    });
  } catch (err) {
    console.log(err);
  }
}
startApp();
