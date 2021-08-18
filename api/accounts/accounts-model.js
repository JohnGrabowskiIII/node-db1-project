
const db = require("../../data/db-config")

const getAll = async () => {
  return db("accounts");
}

const getByName = async (name) => {
  return db("accounts").where("name", name).first();
}

const getById = async id => {
  return db("accounts").where("id", id).first();
}

const create = async account => {
  let {name, budget} = account;
  name = name.trim();
  const [id] = await db("accounts").insert({name, budget});
  return getById(id);
}

const updateById = async (id, account) => {
  let {name, budget} = account;
  name = name.trim();
  await db("accounts").where("id", id).update({name, budget});
  return getById(id);
}

const deleteById = async id => {
  const deletedAccount = await getById(id)
  await db("accounts").where("id", id).delete()
  return deletedAccount
}

module.exports = {
  getAll,
  getByName,
  getById,
  create,
  updateById,
  deleteById,
}
