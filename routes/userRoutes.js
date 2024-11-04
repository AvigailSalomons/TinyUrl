import express from "express";
import UsersController from '../controllers/userController.js'
const userRouter = express.Router();

userRouter.get('/', UsersController.getList);
userRouter.post('/', UsersController.add);
userRouter.get('/:id', UsersController.getById);
userRouter.put('/:id', UsersController.update);
userRouter.delete('/:id',UsersController.delete);

export default userRouter;
