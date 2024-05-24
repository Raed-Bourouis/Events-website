const router = require("express").Router()
const { getOneeEvent,createEvent,getAllEvents,updateEvent,deleteEvent } = require("../controlers/events")
const { createBlog} = require("../controllers/events")
router.post("/events",createEvent)
router.get("/events/:id",getAllEvents)
router.get("/events",getOneeEvent)
router.put("/events/:id",updateEvent)
router.delete("/events/:id",deleteEvent)
module.exports = router