import grid from 'gridfs-stream'
import mongoose from 'mongoose';

const url = "http://localhost:8000";

const conn = mongoose.connection;
let gfs,gridFsBucket;
conn.once('open', () =>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = async(req,res) =>{
     if(!req.file){
        return res.status(404).json("file not uploded");
     }

     const imageUrl = `${url}/file/${req.file.filename}`;
     res.status(200).json(imageUrl);
}

export const getImage = async (req,res) =>{
    try{
        const file = await gfs.files.findOne({filename: req.params.filename });

        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);

    }catch(error){
        return response.status(500).json(error.message)
    }
}