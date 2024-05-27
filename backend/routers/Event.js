const router = require("express").Router()
const { getOneeEvent,createEvent,getAllEvents,updateEvent,deleteEvent } = require("../controllers/events")
// const { createBlog} = require("../controllers/events")
router.post("/",createEvent)
router.get("/",getAllEvents)
router.get("/:id",getOneeEvent)
router.put("/:id",updateEvent)
router.delete("/:id",deleteEvent)
module.exports = router