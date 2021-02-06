import Profil  from './../schemas/profil';
import express from "express";

export const createProfil = (req: express.Request, res: express.Response) => {
    const profil = new Profil({
        ...req.body
    });
    console.log(req.body);
    
    profil.save()
    .then( profil => res.status(201).json(profil))
    .catch( error => res.status(400).json({message: error}));
};

export const modifyProfil = (req: express.Request, res: express.Response) => {

};

export const getOneProfil = (req: express.Request, res: express.Response) => {

};

export const getAllProfils = (req: express.Request, res: express.Response) => {

};

export const deleteOneProfil = (req: express.Request, res: express.Response) => {

};