import { hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        // validations
        if (!name) {
            return res.send({ error: 'Name is Required' });
        }
        if (!email) {
            return res.send({ error: 'email is Required' });
        }
        if (!password) {
            return res.send({ error: 'Password is Required' });
        }
        if (!phone) {
            return res.send({ error: 'Phone is Required' });
        }
        if (!address) {
            return res.send({ error: 'address is Required' });
        }

        // exisitinguser
        const exisitingUser = await userModel.findOne({ email })
        // existing user
        if (exisitingUser){
            return res.status(200).send({
                sucess:true,
                message: 'Already register Please login',
            })
        }
        // register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            sucess:true,
            message:'User Register Sucessfully',
            user,
        });


    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            message: 'Error in Registeration',
            error

        })
    }
};
