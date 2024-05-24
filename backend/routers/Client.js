const router = require("express").Router()
const { getOneClient,addClient,getAllClients,updateClient,deleteClient } = require("../controlers/client")
router.post("/client",addClient)
router.get("/client/:id",getAllClients)
router.get("/client/",getOneClient)
router.put("/client/:id",updateClient)
router.delete("/client/:id",deleteClient)
module.exports = router

