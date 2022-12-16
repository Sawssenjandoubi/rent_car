const adminSchema = require('../models/admin')
const bcrypt = require('bcryptjs')
const {RegisterValidation} = require('../config/registerValidation')
module.exports = async(req,res)=>{
    try{
        let{ nom, prenom,cin,email,tel,ville,dateNaissance, motPass } = req.body
        //check if email exist
        const validEmail = await adminSchema.findOne({email});
        if(validEmail){
           return res.status(401).json({status:false,msg:"email existe déjà, veuillez réessayer"})
        }
        //if not exist check validity of email and pass
        const { error } = await RegisterValidation({
            email,
            motPass,
        });

        if(error){
            return res
            .status(401)
            .json({status: false, error: error.details[0].message});

        } 
        //CRYPT THE PASSWORD
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(motPass, salt);
      
        
        
        //register data
        const admin = new adminSchema({
            nom, 
            prenom,
            cin,
            email,
            tel,
            ville,
            dateNaissance,
             motPass : hashedPassword,
        });
        newAdmin = await admin.save();
        res.status(200).json({
            status:'ok',
            msg:'admin créé avec succès',
            data: newAdmin,
        
        })

    }
    catch(err){
        if(err) throw err
        res.status(401).json({status:false,err})
    }
}