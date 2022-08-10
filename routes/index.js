const { Router } = require("express")

const controller = require("../controller")

const router = Router()

router.get("/", (req, res) => res.send("This is root!"))
router.post("/items", controller.createItem)
router.get("/items", controller.getAllItems)
router.get("/items/:id", controller.getItemById)

router.put("/items/:id", controller.updateItem)
router.delete("/items/:id", controller.deleteItem)

module.exports = router
