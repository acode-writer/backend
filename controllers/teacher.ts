import * as express from "express";
import Teacher  from './../schemas/teacher';

export const createTeacher = (req: express.Request, res: express.Response) => {
    const teacher = new Teacher({
        ...req.body
    });
    teacher.save()
    .then( teacher => res.status(201).json(teacher))
    .catch( error => res.status(400).send({message: error}));
};

export const modifyTeacher = (req: express.Request, res: express.Response) => {
    Teacher.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
        .then( teacher => res.status(200).json(teacher))
        .catch( error => res.status(400).json({error}));

};

export const deleteOneTeacher = (req: express.Request, res: express.Response) => {
    Teacher.deleteOne({_id: req.params.id})
        .then( teacher => res.status(200).json(teacher))
        .catch( error => res.status(404).json({error}))
};

export const getOneTeacher = (req: express.Request, res: express.Response) => {
    Teacher.findOne({_id: req.params.id})
        .then( teacher => res.status(200).json(teacher))
        .catch( error => res.status(404).json({error}));
};

export const getAllTeachers = (req: express.Request, res: express.Response) => {
    Teacher.find()
        .then( teachers => res.status(200).json(teachers))
        .catch( error => res.status(400).json({error}));
};
