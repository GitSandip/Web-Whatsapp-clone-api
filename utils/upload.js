import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv'
dotenv.config()

const USER=process.env.USER;
const PASS=process.env.PASSWORD;


const storage = new GridFsStorage({
    url:`mongodb+srv://${USER}:${PASS}@whatsapp-clone.ia90hil.mongodb.net/?retryWrites=true&w=majority`,
    options: { useUnifiedTopology:true, useNewUrlParser:true},
    file: (req, file) => {

        const match = ["image/png","image/jpg"];
        if(match.indexOf(file.mimeType) === -1){
            return `${file.originalname}-file-${Date.now()}`;

        }
        return {
            bucketName: 'photos',
            filename: `${file.originalname}-file-${Date.now()}`
        }
    }
})

export default multer({storage});