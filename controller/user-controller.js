import User from "../model/user.js";

export const addUser=async (req,res)=>{
    try{
        let exist=await User.findOne({sub:req.body.sub});
        if(exist){
            res.status(200).json({msg:"user exists alredy"})
            return;
        }
        const newUser=new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    }catch(error){
        return res.status(500).json(error.message);
    }

}

export const getUser= async (req,res)=>{
    try{
            User.find({}).then((result)=>{
                console.log("getting data by get req to /user ",result);
                return res.status(200).json(result)
            }).catch(function(){
                return res.status(500).json;
            });
    }catch(error){
        return res.status(500).json(error.message);
    }
}