const { db } = require("../utils/admin");

exports.interviews = (req, res) => {
  if (!req.user.username)
    return res.status(400).json({ error: "Unauthorized" }); //Auth is enabled. This is just to make sure of it

  let roleName = "interviewee";
  if (req.user.role == 1) roleName = "interviewer";

  db.collection("interviews")
    .where(roleName, "==", req.user.username)
    .get()
    .then((docs) => {
      let finaldocs = [];
      docs.forEach((doc) => {
        finaldocs.push(doc.data());
      });

      return res.json(finaldocs);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.postInterview = (req, res) => {
  const interviewObj = {
    id: Math.round(Math.random() * 10000000),
    interviewer: req.user.username,
    interviewee: req.body.interviewee,
    date: req.body.date,
    completed: false,
  };

  db.collection("interviews")
    .doc(interviewObj.id.toString())
    .set(interviewObj)
    .then((data) => {
      return res.json({ message: `Interview scheduled.` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.updateInterview = (req, res) => {
  const updateObj = {};

  if (req.user.role != 1 || req.user.role == undefined)
    return res.status(400).json({ error: "Unauthorized" });

  if (req.body.completed != "" && req.body.completed != null)
    updateObj.completed = req.body.completed;
  if (req.body.date != "" && req.body.date != null)
    updateObj.date = req.body.date;

  db.collection("interviews")
    .doc(req.body.id.toString())
    .update(updateObj)
    .then(() => {
      return res.json({ message: "Interview updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.deleteInterview = (req, res) => {
  if (req.user.role != 1 || req.user.role == undefined)
    return res.status(400).json({ error: "Unauthorized" });

  //Check if user created this interview
  db.collection("interviews")
    .doc(req.body.id.toString())
    .get()
    .then((doc) => {
      if (doc.data().interviewer != req.user.username) {
        //Unauthorized
        return res
          .status(400)
          .json({ error: "Unauthorized. You did not create this interview." });
      }
    });

  db.collection("interviews")
    .doc(req.body.id.toString())
    .delete()
    .then(() => {
      return res.json({ message: "Interview deleted" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
