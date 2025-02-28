import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";

const router = Router();

router.post("/usuarios/login", (req, res) => {

});

router.post("/usuarios", (req, res) => {

});

router.get("/restaurantes", (req, res) => {

});

router.get("/categorias", (controllerCategoria.Listar));

router.get("/empresas/destaques", (controllerEmpresa.Destaques));

router.get("/pedidos", (controllerPedido.Listar));

export default router;