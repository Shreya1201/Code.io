import mongoose from 'mongoose';
const feedSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true
    }
})

const Feedback = new mongoose.model("Feedback", feedSchema)
export default Feedback;
