import { Router } from "express";
import {createGenero,deleteGenero, editGenero, renderGenero, updateGenero  } from "../controllers/genero.js";
import {createDirector,deleteDirector, editDirector, renderDirector, updateDirector  } from "../controllers/director.js";
import {createProductor,deleteProductor, editProductor, renderProductor, updateProductor  } from "../controllers/productora.js";
import { createTipo, deleteTipo, editTipo, renderTipo, updateTipo, } from "../controllers/tipo.js";
import { createMedia, deleteMedia, editMedia, renderMedia, updateMedia } from "../controllers/media.js";
const router = Router();

//Rutas para el genero
router.get("/", renderGenero);
router.post("/addGeneros", createGenero);
router.get("/updateGenero/:id", editGenero);
router.post("/updateGenero/:id", updateGenero);
router.get("/deleteGenero/:id", deleteGenero);

//Rutas para el director
router.get("/directores", renderDirector);
router.post("/addDirectores", createDirector);
router.get("/updateDirector/:id", editDirector);
router.post("/updateDirector/:id", updateDirector);
router.get("/deleteDirector/:id", deleteDirector);

//Rutas para la productora
router.get("/productores", renderProductor);
router.post("/addProductores", createProductor);
router.get("/updateProductora/:id", editProductor);
router.post("/updateProductora/:id", updateProductor);
router.get("/deleteProductor/:id", deleteProductor);

//Rutas para el tipo
router.get("/tipo", renderTipo);
router.post("/addTipo", createTipo);
router.get("/updateTipo/:id", editTipo);
router.post("/updateTipo/:id", updateTipo);
router.get("/deleteTipo/:id", deleteTipo);


router.get("/media", renderMedia);
router.post("/addMedia", createMedia);
router.get("/updateMedia/:id", editMedia);
router.post("/updateMedia/:id", updateMedia);
router.get("/deleteMedia/:id", deleteMedia);
export default router;