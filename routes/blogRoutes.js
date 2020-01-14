// Dependencies
const BlogPost = require("../models/blog");

module.exports = function (app) {

    // Blog Routes
    app.get("/api/blog", (req, res) => {
        console.log("Getting all the Blogs");
        BlogPost.find({}, (err, posts) => {
            if (err) {
                console.log(err);
            }

            res.send(posts)
        }).sort({ createdAt: -1 })
    });

    app.get("/api/blog/:id", (req, res) => {
        console.log(`Just getting the one blog (${req.params.id})`);
        BlogPost.findById(req.params.id, (err, post) => {
            if (err) {
                console.log(err);
            }
            console.log(post);
            res.send(post);
        })
    })

    app.post("/api/blog/new", (req, res) => {
        const title = req.body.title;
        const text = req.body.text;

        const newBlogPost = new BlogPost({
            title: title,
            text: text,
            createdAt: new Date()
        })

        newBlogPost.save(err => {
            if (err) {
                console.log(err)
            }

            res.send({
                success: true,
                messsage: "Blog Post Saved."
            })
        })
    })

    app.put("/api/blog/edit/:id", (req, res) => {
        console.log(`this should update some stuff for post ${req.params.id}.`)
        console.log("This is my body, give to you");
        console.log(req.body)

        BlogPost.findById(req.params.id, (err, blogPost) => {
            if (err) {
                console.log(err);
            }

            blogPost.title = req.body.title
            blogPost.text = req.body.text

            blogPost.save(err => {
                if (err) {
                    console.log(err);
                }

                res.send({success: true})
            })
        })

        // res.send({ success: true });
    })

    app.delete("/api/blog/delete/:id", (req, res) => {
        console.log(req.params);
        console.log("deleting stuff from " + req.params.id);
        BlogPost.remove({
            _id: req.params.id
        }, (err, blogPost) => {
            if (err) {
                return res.send(err)
            } 
            
            res.send({ success: true })
        })
    })
}
