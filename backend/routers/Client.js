const router = require("express").Router()
const { getOneClient,addClient,getAllClients,updateClient,deleteClient } = require("../controllers/client")
router.post("/",addClient)
router.get("/",getAllClients)
router.get("/:id",getOneClient)
router.put("/:id",updateClient)
router.delete("/:id",deleteClient)
module.exports = router

