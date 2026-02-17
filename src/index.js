import express from "express";
import dotenv from "dotenv"

dotenv.config() // must be run first so that the variables can be loaded

const app = express();

app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  }),
);

// create a contact
app.post("/contacts", function (req, res) {
  const payload = req.body;
  console.log("payload:", payload);

  return res.status(201).json({
    message: "Contact created",
    data: null,
  });
});

// partially update a contact
app.patch("/contacts/:id", function (req, res) {
  const payload = req.body;
  const contactId = req.params.id;

  console.log("contactId:", contactId);
  console.log("payload:", payload);

  return res.json({
    message: "Contact updated",
    data: {
      id: contactId,
    },
  });
});

// get a contact using their id
app.get("/contacts/:id", function (req, res) {
  const contactId = req.params.id;

  console.log("contactId:", contactId);

  return res.json({
    message: "Contact retrieved",
    data: {
      id: contactId,
    },
  });
});

// get a list of contacts
app.get("/contacts", function (req, res) {
  const contactId = req.params.id;

  console.log("contactId:", contactId);

  return res.json({
    message: "Contacts retrieved",
    data: {
      docs: [],
    },
  });
});

app.delete("/contacts/:id", function (req, res) {
  const contactId = req.params.id;

  console.log("contactId:", contactId);

  return res.status(204).send();
});

// Listen on port process.env.KEY
app.listen(process.env.PORT, function (error) {
  if(error){
    console.error(error)
    process.exit(1)
  }

  console.log(`Listening on port ${process.env.PORT}`)
})
