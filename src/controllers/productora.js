import { pool } from "../db.js";

export const renderProductor = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM productor");
  res.render("productora", { productores: rows });
};

export const createProductor = async (req, res) => {
  const newProductor = req.body;
  newProductor.fechaCreacion = new Date();
  await pool.query("INSERT INTO productor set ?", [newProductor]);
  res.redirect("/productores");
};

export const editProductor = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM productor WHERE id = ?", [
    id,
  ]);
  res.render("productora_edit", { productor: result[0] });
};

export const updateProductor = async (req, res) => {
  const { id } = req.params;
  const newProductor = req.body;
  newProductor.fechaActualizacion = new Date();
  await pool.query("UPDATE productor set ? WHERE id = ?", [newProductor, id]);
  res.redirect("/productores");
};

export const deleteProductor = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM productor WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "productor eliminado" });
  }
  res.redirect("/productores");
};
