import task from "../models/taskModel.js";
 
class TaskController {

    static async listarTasks(req, res) {
        try {
            const listaTasks = await task.find({});
            console.log("Tarefas encontradas:", listaTasks);
            res.status(200).json(listaTasks);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };
};

export default TaskController;