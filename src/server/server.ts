import * as express from 'express';
//Fix Cannot GET /compose in localhost request
import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
//body parsing middleware
app.use(express.json());
//points to /api 
app.use('/api', apiRouter);
//Fix Cannot GET /compose in localhost request
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
