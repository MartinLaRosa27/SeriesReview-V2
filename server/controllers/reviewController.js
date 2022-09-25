const Review = require("../models/Review.js");

exports.getReview = async (req, res) => {
  const review = await Review.findAll();
  res.send(review);
};

exports.deleteReview = async (req, res) => {
  const _id = req.params.id;
  const iCount = await Review.count();
  try {
    await Review.destroy({ where: { _id } });
    const uCount = await Review.count();
    if (uCount < iCount) {
      res.send("Review eliminada");
    } else {
      res.send("No se pudo eliminar la review");
    }
  } catch (e) {
    res.send("No se pudo eliminar la review");
  }
};

exports.patchReview = async (req, res) => {
  const _id = req.params.id;
  const { titulo, contenido } = req.body;
  try {
    await Review.update(
      {
        titulo: titulo,
        contenido: contenido,
      },
      {
        where: {
          _id: _id,
        },
      }
    );
    res.send("Review modificada");
  } catch (e) {
    res.send(e.errors[0].message);
  }
};

exports.postReview = async (req, res) => {
  const { titulo, contenido, calificacion } = req.body;
  try {
    await Review.create({
      titulo: titulo,
      contenido: contenido,
      calificacionId: calificacion,
    });
    res.send("Review registrada");
  } catch (e) {
    res.send(e.errors[0].message);
  }
};
