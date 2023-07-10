import express from 'express'
import { addUser,getUser } from '../controller/user-controller.js';
import {newConversation, getConversations} from '../controller/conversation-controller.js'
import { addNewMessage, getMessages } from '../controller/message-controller.js';
import { uploadFile,getImage } from '../controller/image-constroller.js';
import upload from '../utils/upload.js'
const route=express.Router();


route.post("/add",addUser);
route.get("/user",getUser);

route.post("/conversation/add",newConversation);
route.post("/conversation/get",getConversations);

route.post("/message/add", addNewMessage);
route.get("/message/get/:id",getMessages);

route.post("/file/upload",upload.single("file"),uploadFile);
route.get("/file/:filename",getImage);

export default route; 