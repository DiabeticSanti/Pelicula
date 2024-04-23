export const insertMediaQuery = (media) => {
  const {
    serial,
    titulo,
    sinopsis,
    urlPelicula,
    imagenPortada,
    añoEstreno,
    generoPrincipal,
    directorPrincipal,
    productora,
    tipo,
  } = media;

  fechaCreacion = new Date();

  return `INSERT INTO media (
    añoEstreno,
    directorPrincipal,
    fechaActualizacion,
    fechaCreacion,
    generoPrincipal,
    imagenPortada,
    productora,
    serial,
    sinopsis,
    tipo,
    titulo,
    urlPelicula
  )
  VALUES (
    ${añoEstreno},
    (SELECT id FROM railway.director WHERE nombre = ${directorPrincipal}),
    ${null},
    ${fechaCreacion},
    (SELECT id FROM railway.genero WHERE nombre = ${generoPrincipal}),
    ${imagenPortada},
    (SELECT id FROM railway.productor WHERE nombre = ${productora}),
    ${serial},
    ${sinopsis},
    (SELECT id FROM railway.tipo WHERE nombre = ${tipo}),
    ${titulo},
    ${urlPelicula},
    `;
};
