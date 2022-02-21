import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// GIT -> versionador de código (repositório)
// Github -> plataforma

app.listen(8080, () => {
    console.log('API está rodando...');
})