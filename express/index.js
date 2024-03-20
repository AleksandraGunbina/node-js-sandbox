import express from "express";
import cors from "cors";
import { env } from "node:process";
import bodyParser from "body-parser";
import DatabaseSimulation from "./database.js";


const app = express();

const port = env.PORT;
const contactBase = new DatabaseSimulation();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/api/contacts', (req, resp) => {
  const contactList = contactBase.getContactsList();
  resp.send(contactList);
});

app.post("/api/contacts/", (req, resp) => {
  const contactInfo = req.body;

  if (!contactBase.createContact(contactInfo)) {
    resp.status(500);
  }
  resp.status(201);
  resp.send(contactInfo);
});

app.get('/api/contacts/:surname', (req, resp) => {
  const surname = String(req.params.surname);

  if(!surname){
      resp.status(500);
      resp.send({error: 'Error 500'});
      return;
  }

  const oneItem = contactBase.getContactBySurname(surname);

  if(!oneItem){
      resp.status(404);
      resp.send({error: `Item with surname=${surname} not found`});
      return;
  }
  resp.send(oneItem);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
