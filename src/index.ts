import express from 'express';
import { getTime } from './lib/utils';
import Persona from './Persona';

const p:Persona = new Persona('John', 'Doe');

const app = express();

app.get("/", (req, res) => {
    res.send(`Hello ${p.getFullName()} ${getTime()}!`);
})