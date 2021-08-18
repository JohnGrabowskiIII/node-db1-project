
const db = require("../../data/db-config")

const getAll = async () => {
  return db("accounts");
}

const getById = async id => {
  return db("accounts").where("id", id).first();
}

const create = async account => {
  let {name, budget} = account;
  name = name.trim()
  const [id] = await db("accounts").insert({name, budget});
  return getById(id);
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
