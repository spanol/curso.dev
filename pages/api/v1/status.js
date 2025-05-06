import database from "infra/database";

async function status(req, res) {
  const result = await database.query('SELECT 1 + 1 AS result');
  console.log(result.rows);

  res.status(200).json({
    status: 'ok',
    message: 'API is running',
  });
}

export default status;
