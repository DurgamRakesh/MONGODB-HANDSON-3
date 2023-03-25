const { employeeinfo } = require('../models/employeeSchema')

const emplyoeeEnroll = async (req, res) => {
    const emploeedata = req.body;
    try {
        const EmpInfo = new employeeinfo({
            firstName:emploeedata.firstName,
            lastName:emploeedata.lastName,
            salary:emploeedata.salary,
            department:emploeedata.department,
            lastCompany:emploeedata.lastCompany,
            lastSalary:emploeedata.lastSalary,
            overallExp:emploeedata.overallExp,
            contactInfo:emploeedata.contactInfo,
            yearGrad:emploeedata.yearGrad,
            gradStream:emploeedata.gradStream
        })
        const dbresponse = await EmpInfo.save();
        console.log("inserting data:",dbresponse);
        return res.status(200).send({message:"employee info is saved"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}
const insertManyTODB = async (req, res) => {
    const insertdata = req.body;
    try {
        const dbresponse = await employeeinfo.insertMany(insertdata)
        console.log("insertingMany data:",dbresponse);
        return res.status(200).send({message:"employee info is inserted"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}


const findinDB = async (req, res) => {
    try {
        const dbresponse = await employeeinfo.find()
        console.log("finding data:",dbresponse);
        return res.status(200).send({message:"employee info is find"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

const findempmorethan30k = async (req, res) => {
    const queryparams = req.query;
    const query = {"salary":{$gt:queryparams.salary}}
    try {
        const dbresponse = await employeeinfo.find(query)
        console.log("morethan30k finding data:",dbresponse);
        return res.status(200).send({message:"employee info is find"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

const findempmorethan2yrs = async (req, res) => {
    const queryparams = req.query;
    const query = {"overallExp":{$gt:queryparams.overallExp}}
    try {
        const dbresponse = await employeeinfo.find(query)
        console.log("morethan 2yrs finding data:",dbresponse);
        return res.status(200).send({message:"employee info is find"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

const findgraduatedandmorethan1yrs = async (req, res) => {
    const queryparams = req.query;
    const query = {"yearGrad":{"$gt":queryparams.yearGrad},"overallExp":{"$gt":queryparams.overallExp}}
    try {
        const dbresponse = await employeeinfo.find(query)
        console.log("graduatedand1yrs finding data:",dbresponse);
        return res.status(200).send({message:"employee info is find"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

const updateempdata = async (req, res) => {
    const updatedata = req.body;
    const filter = updatedata.filter;
    const value = {$set:updatedata.value};
    console.log(updatedata);
    console.log(filter);
    console.log(value);
    try {
        const dbresponse = await employeeinfo.updateMany(filter,value)
        console.log("updated data:",dbresponse);
        return res.status(200).send({message:"employee info is updated"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

const deleteempdata = async (req, res) => {
    const condition = req.query;
    try {
        const dbresponse = await employeeinfo.deleteMany(condition)
        console.log("deleted data:",dbresponse);
        return res.status(200).send({message:"employee info is deleted"})
    } catch (error) {
        console.log("error",error.message);
        return res.status(500).send({message:"error in db"})
    }
}

module.exports = {
    emplyoeeEnroll,
    insertManyTODB,
    findinDB,
    findempmorethan30k,
    findempmorethan2yrs,
    findgraduatedandmorethan1yrs,
    updateempdata,
    deleteempdata
}