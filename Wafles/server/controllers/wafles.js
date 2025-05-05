const wafles = require("../models/wafles")

exports.getAllwafles = async (req, res, next) => {
    try{
        const data = await wafles.find();
        if (data && data.length  !== 0) {
            return res.status(200).send({
                message: "wafles found!",
                payload: data,
            });
        }
        res.status(404).send({
            message: "wafles not found!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

};
exports.getwafleById = async (req, res, next) => {
    try{
        const data = await wafles.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "wafle found!",
                payload: data,
            });
        }
        res.status(404).send({
            message: "wafle not found!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.createwafle = async (req, res, next) => {
    try{
        const data = new wafles({
            name: req.body.name,
            surname: req.body.surname,
            language:  req.body.language,
            pay:  req.body.pay
        });
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "Programtor created",
                payload: result
            });
        }
        res.status(500).send({
            message: "wafle was not created"
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updatewafle = async (req, res, next) => {   
    try {
    const data = {
        name: req.body.name,
        surname: req.body.surname,
        language:  req.body.language,
        pay:  req.body.pay
    };
    const result = await wafles.findByIdAndUpdate(req.params.id, data);
    if(result) {
        return res.status(200).send({
            message: "wafle updated",
            payload: result
        });
    }
    res.status(500).send({
        message: "wafle was not updated"
    });
} catch (err) {
    console.log(err);
    res.status(500).send(err);
}};
exports.deletewafle = async (req, res, next) => {    
    try {
    const result = await wafles.findByIdAndDelete(req.params.id, );
    if(result) {
        return res.status(200).send({
            message: "wafle deleted",
            payload: result
        });
    }
    res.status(500).send({
        message: "wafle was not deleted"
    });
} catch (err) {
    console.log(err);
    res.status(500).send(err);
}};