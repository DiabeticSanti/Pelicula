import { pool } from "../db.js";

export const renderTipo = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tipo");
  res.render("tipo", { tipo: rows });
};

export const createTipo = async (req, res) => {
  const newTipo = req.body;
  newTipo.fechaCreacion = new Date();
  await pool.query("INSERT INTO tipo set ?", [newTipo]);
  res.redirect("/");
};

export const editTipo = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM tipo WHERE id = ?", [id]);
  res.render("tipo_edit", { tipo: result[0] });
};

export const updateTipo = async (req, res) => {
  const { id } = req.params;
  const newTipo = req.body;
  newTipo.fechaActualizacion = new Date();
  await pool.query("UPDATE tipo set ? WHERE id = ?", [newTipo, id]);
  res.redirect("/");
};

export const deleteTipo = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM tipo WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "tipo eliminado" });
  }
  res.redirect("/");
};
