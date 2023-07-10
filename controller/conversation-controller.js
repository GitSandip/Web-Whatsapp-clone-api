import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.find({
      members: { $all: [receiverId, senderId] },
    });

    if (exist.length > 0) {
      return res
        .status(200)
        .json({ message: "Conversation already exists", data: exist });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json("Conversation is saved successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const getConversations = async (req,res) =>{
    try{
      const senderId = req.body.senderId;
      const receiverId = req.body.receiverId;

        let conversation = await Conversation.findOne({members: {$all: [receiverId, senderId]} })
        return res.status(200).json(conversation)
    }
    catch(error){
      return res.status(500).json(error.message);
    }
}