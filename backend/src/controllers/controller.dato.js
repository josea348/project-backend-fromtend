import { pool } from "../db/conexion.js";

export const listar = async (req, res) => {
  try {
    let sql = `SELECT * FROM dato`;
    const [rows] = await pool.query(sql);
    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: `No hay datos en la base de datos.` });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export const registrar = async (req, res) => {
  try {
    const { nombre, valor } = req.body;
    let sql = `INSERT INTO dato(nombre,valor) values ('${nombre}','${valor}')`;
    const [rows] = await pool.query(sql);
    if (rows.affectedRows > 0) {
      res.status(200).json({message: `Se registro el dato.`});
    } else {
      res.status(404).json({ message: `No se registro el dato.` });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}