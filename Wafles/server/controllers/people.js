const People = require("../models/people")

exports.getAllPeople = async (req, res, next) => {
    try{
        const data = await People.find();
        if (data && data.length  !== 0) {
            return res.status(200).send({
                message: "People found!",
                payload: data,
            });
        }
        res.status(404).send({
            message: "People not found!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

};
exports.getPersonById = async (req, res, next) => {
    try{
        const data = await People.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Person found!",
                payload: data,
            });
        }
        res.status(404).send({
            message: "Person not found!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.createPerson = async (req, res, next) => {
    try{
        const data = new People({
            name: req.body.name,
            address: req.body.address,
            age:  req.body.age
        });
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "Person created",
                payload: result
            });
        }
        res.status(500).send({
            message: "Person was not created"
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updatePerson = async (req, res, next) => {   
    try {
    const data = {
        name: req.body.name,
        address: req.body.address,
        age:  req.body.age
    };
    const result = await People.findByIdAndUpdate(req.params.id, data);
    if(result) {
        return res.status(200).send({
            message: "Person updated",
            payload: result
        });
    }
    res.status(500).send({
        message: "Person was not updated"
    });
} catch (err) {
    console.log(err);
    res.status(500).send(err);
}};
exports.deletePerson = async (req, res, next) => {    
    try {
    const result = await People.findByIdAndDelete(req.params.id, );
    if(result) {
        return res.status(200).send({
            message: "Person deleted",
            payload: result
        });
    }
    res.status(500).send({
        message: "Person was not deleted"
    });
} catch (err) {
    console.log(err);
    res.status(500).send(err);
}};