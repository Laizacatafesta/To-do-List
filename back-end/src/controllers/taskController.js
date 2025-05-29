import task from "../models/taskModel.js";
 
class TaskController {

    static async listarTasks(req, res) {
        try {
            const listarTasks = await task.find({});
            res.status(200).json(listarTasks);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };
};

export default TaskController;