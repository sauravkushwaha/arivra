import mongoose from 'mongoose';

const tutorialSchema = new mongoose.Schema(
    { question: { type: String, required: true, }, 
    answer: { type: String, required: true, }, 
    code: { type: String, }
}, { timestamps: true });

const Tutorial = mongoose.model('Tutorial', tutorialSchema); 

export default Tutorial;