const Item = require("../models/item")

const createItem = async (req, res) => {
  try {
    const item = await new Item(req.body)
    await item.save()
    return res.status(201).json({ item })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
    return res.status(200).json({ items })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getItemById = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    if (item) {
      return res.status(200).json({ item })
    }
    return res.status(404).send(`Item with the id ${id} dose not exist`)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
//不能是异步！！！
const updateItem = (req, res) => {
  try {
    const { id } = req.params
    Item.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
      if (err) {
        res.status(500).json({ error: err.message })
        if (!item) {
          res.status(500).send("item not found")
        }
        return res.status(200).json(item)
      }
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Item.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Item deleted")
    }
    throw new Error("Items not found")
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createItem,
  getItemById,
  getAllItems,
  updateItem,
  deleteItem,
}
