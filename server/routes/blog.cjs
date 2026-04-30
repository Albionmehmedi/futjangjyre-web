const express = require("express");
const path = require("path");
const fs = require("fs");
const { error } = require("console");
const { title } = require("process");
const { create } = require("domain");
const router = express.Router();

// Path to the post.json file
const filePath = path.join(__dirname, "../data/post.json");

// Get all Blogs
router.get("/", (req, res) => {
  try {
    const posts = JSON.parse(fs.readFileSync(filePath));
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Create new Blogs
router.post("/", (req, res) => {
  try {
    const { title, image, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Missing fields" });
    }

    let posts = JSON.parse(fs.readFileSync(filePath));

    const newPost = {
      id: Date.now().toString,
      title,
      content,
      image,
      createdAt: new Date(),
    };

    posts.push(newPost);

    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }

  //Get a singel Blog
  router.get("/:id", (req, res)=>{
    const posts = JSON.parse(fs.readFileSync(filePath));
    const post = posts.find(p => p.id === p.params.id);

    if(!post) return res.status(400).json({err: "Post doesnt exist"});
    
    res.json(post);
  })
});

module.exports = router;