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

    static async criartTask(req, res) {
        try {
            const taskCriada = await task.create(req.body);
            res.status(200).json({message: "Taks criada com sucesso", task: taskCriada});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao criar task`});
        };
    };
};

export default TaskController;