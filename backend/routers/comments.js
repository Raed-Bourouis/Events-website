const router = require("express").Router()
const { getOneComment,addComment,getAllComments,updateComment,deleteComment } = require("../controllers/comment")
router.post("/",addComment)
router.get("/",getAllComments)
router.get("/:id",getOneComment)
router.put("/:id",updateComment)
router.delete("/:id",deleteComment)
module.exports = router