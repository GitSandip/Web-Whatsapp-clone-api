import message from "../model/Message.js"
import conversation from "../model/Conversation.js";

export const addNewMessage = async (req,res) =>{
    try{
        const newMessage = new message(req.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.value});

        res.status(200).json({ message: "message send successfully" });
    }catch(error){
        res.status(500).json("message error ",error.message);
    }
}

export const getMessages = async (req,res) => {
    try{
        const messages = await message.find({conversationId: req.params.id});
        res.status(200).json(messages);

    }catch(error){
        res.status(500).json("error while retriving messages from db->",error.message);
    }
}