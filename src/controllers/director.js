import { pool } from "../db.js";

export const renderDirector = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM director");
  res.render("director", { directores: rows });
};

export const createDirector = async (req, res) => {
    const newDirector = req.body;
    newDirector.fechaCreacion = new Date()
    await pool.query("INSERT INTO director set ?", [newDirector]);
    res.redirect("/directores");
  };

  export const editDirector = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM director WHERE id = ?", [
      id,
    ]);
    res.render("director_edit", { director: result[0] });
  };
  
  export const updateDirector = async (req, res) => {
    const { id } = req.params;
    const newDirector = req.body;
    newDirector.fechaActualizacion = new Date()
    await pool.query("UPDATE director set ? WHERE id = ?", [newDirector, id]);
    res.redirect("/directores");
  };
  
  export const deleteDirector = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM director WHERE id = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "director eliminado" });
    }
    res.redirect("/directores");
  };
  