const express =require("express");
const router = express.Router();
const employee =require("./models/Employees");



router.get("/", async (req, res) => {
	const veiw = await employee .find();
	res.send(veiw);
});


router.post("/", async (req, res) => {
	const employee_document = new employee({
		Name : req.body.Name,
		Age : req.body.Age,
        University : req.body.University,
        Status : req.body.Status

	})
	await employee_document.save()
	res.send(employee_document);
}),

router.delete("/:id", async (req, res) => {
	try {
		
		await employee.deleteOne({ _id: req.params.id });
		res.status(204).send();
		 console.log("Employee Document Deleted Successfully!");
		 
	
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})




module.exports = router;