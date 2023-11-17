import  express  from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken' 
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser';

//calling the function
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser()); 


//creating the database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'signup'
})


