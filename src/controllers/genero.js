import { pool } from "../db.js";

export const renderGenero = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM genero");
  res.render("genero", { generos: rows });
};

export const createGenero = async (req, res) => {
    const newGenero = req.body;
    newGenero.fechaCreacion = new Date()
    await pool.query("INSERT INTO genero set ?", [newGenero]);
    res.redirect("/");
  };

  export const editGenero = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM genero WHERE id = ?", [
      id,
    ]);
    console.log(result[0])
    res.render("genero_edit", { genero: result[0] });
  };
  
  export const updateGenero = async (req, res) => {
    const { id } = req.params;
    const newGenero = req.body;
    newGenero.fechaActualizacion = new Date()
    await pool.query("UPDATE genero set ? WHERE id = ?", [newGenero, id]);
    res.redirect("/");
  };
  
  export const deleteGenero = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM genero WHERE id = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "genero eliminado" });
    }
    res.redirect("/");
  };
  