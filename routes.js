const express = require("express");
const router = express.Router();
const employee = require("./models/Employees");
//Get for ALl Employee
router.get("/", async (req, res) => {
  const veiw = await employee.find();
  res.send(veiw);
});

//Get for Specific Employee
router.get("/:id", async (req, res) => {
  try {
    const employee_document = await employee.findOne({ _id: req.params.id });
    res.send(employee_document);
  } catch (error) {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//Post a Document into the Collections
router.post("/", async (req, res) => {
  const employee_document = new employee({
    Name: req.body.Name,
    Age: req.body.Age,
    University: req.body.University,
    Status: req.body.Status,
  });
  await employee_document.save();
  res.send(employee_document);
});

//Update Document
router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await employee.findByIdAndUpdate(
      req.params.id,
      {
        Name: req.body.Name,
        Age: req.body.Age,
        University: req.body.University,
        Status: req.body.status,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//Delele collection
router.delete("/:id", async (req, res) => {
  try {
    await employee.deleteOne({ _id: req.params.id });
    res.json("Succesfully Deleled !");
    res.status(204).send();

    console.log("Employee Document Deleted Successfully!");
  } catch (error) {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
