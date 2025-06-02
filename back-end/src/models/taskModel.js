import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    priority: {type: String, required: true},
    objective: {type: String}
}, {versionKey: false});

const task = mongoose.model("task", taskSchema);

export default task;