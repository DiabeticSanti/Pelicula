import { pool } from "../db.js";

export const renderMedia = async (req, res) => {
  const [rows] =
    await pool.query(`Select med.*, dir.nombre as NombreDirector, gen.nombre as NombreGenero,
    pro.nombre as NombreProductor, tip.nombre as NombreTipo from media med 
    inner join director dir on dir.id = med.directorPrincipal
    inner join genero gen on gen.id = med.generoPrincipal
    inner join productor pro on pro.id = med.productora
    inner join tipo tip on tip.id = med.tipo`);
  const [directores] = await pool.query("SELECT * FROM director");
  const [generos] = await pool.query("SELECT * FROM genero");
  const [productores] = await pool.query("SELECT * FROM productor");
  const [tipos] = await pool.query("SELECT * FROM tipo");
  res.render("media", { media: rows, directores, generos, productores, tipos });
};

export const createMedia = async (req, res) => {
  const newMedia = req.body;
  newMedia.fechaCreacion = new Date();
  await pool.query("INSERT INTO media set ?", [newMedia]);
  res.redirect("/media");
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
  res.redirect("/media");
};

export const deleteMedia = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM media WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "media eliminado" });
  }
  res.redirect("/media");
};
