import mongoose from 'mongoose';

const probSchema = new mongoose.Schema({
    sno:{
        type:Number,
    },
    brief:{
        type:String
    },
    question:{
        type:String
    },
    solution:{
        type:String
    },
    difficulty:{
        type:String
    }
})

const Problem = new mongoose.model("Problem",probSchema)
export default Problem;
