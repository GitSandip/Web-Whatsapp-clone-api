import express from 'express'
import { addUser,getUser } from '../controller/user-controller.js';
import {newConversation} from '../controller/conversation-controller.js'

const route=express.Router();


route.post("/add",addUser);
route.get("/user",getUser);

route.post("/conversation/add",newConversation);

export default route; 