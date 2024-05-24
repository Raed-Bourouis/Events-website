const router = require("express").Router()
const { getOneeEvent,createEvent,getAllEvents,updateEvent,deleteEvent } = require("../controlers/events")
const { createBlog} = require("../controllers/events")
router.post("/",createEvent)
router.get("/:id",getAllEvents)
router.get("/",getOneeEvent)
router.put("/:id",updateEvent)
router.delete("/:id",deleteEvent)
module.exports = router