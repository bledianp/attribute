const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const CommentModel = require("./models/Comment");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:admin@attributy.xetam39.mongodb.net/comments?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const text = req.body.comment;
  const number = req.body.number;
  const comment = new CommentModel({ number: number, comment: text });

  try {
    await comment.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  const number = req.query.number;
  CommentModel.find({ number: number }, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001...");
});

