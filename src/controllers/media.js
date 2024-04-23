import { pool } from "../db.js";

export const renderMedia = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM media");
  const [directores] = await pool.query("SELECT * FROM director");
  res.render("media", { media: rows, directores });
};

export const createMedia = async (req, res) => {
  const newMedia = req.body;
  newMedia.fechaCreacion = new Date();
  await pool.query("INSERT INTO media set ?", [newMedia]);
  res.redirect("/");
};

export const editMedia = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM media WHERE id = ?", [id]);
  console.log(result[0]);
  res.render("media_edit", { media: result[0] });
};

export const updateMedia = async (req, res) => {
  const { id } = req.params;
  const newMedia = req.body;
  newMedia.fechaActualizacion = new Date();
  await pool.query("UPDATE media set ? WHERE id = ?", [newMedia, id]);
  res.redirect("/");
};

export const deleteMedia = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM media WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "media eliminado" });
  }
  res.redirect("/");
};
