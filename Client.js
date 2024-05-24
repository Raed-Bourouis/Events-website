const router = require("express").Router()
const { getOneClient,addClient,getAllClients,updateClient,deleteClient } = require("../controlers/client")
router.post("/",addClient)
router.get("/:id",getAllClients)
router.get("/",getOneClient)
router.put("/:id",updateClient)
router.delete("/:id",deleteClient)
module.exports = router

