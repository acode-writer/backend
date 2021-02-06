import mongoose  from 'mongoose';
import express from "express";
import adminRouter from './routes/admin';
import profilRouter from "./routes/profil";
import bodyParser from "body-parser";
import { environment } from './environments/environment';

mongoose.connect(`${environment.mongoose}`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
).then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const base_api = "/api";

app.use((req:express.Request,res: express.Response,next:express.NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`${base_api}/teachers`,profilRouter);

app.use(`${base_api}/admins`,adminRouter);

app.use(`${base_api}/profils`,profilRouter);

app.use(`${base_api}/students`,profilRouter);


module.exports = app;