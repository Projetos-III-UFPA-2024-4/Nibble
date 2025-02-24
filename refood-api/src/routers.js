import { Router } from "express";

const router = Router();

router.get("/teste", function(req, res){
    res.status(401).json({mensagem: "Email ou senha inválido"});
});

export default router;