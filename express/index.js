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

  const personInfo= contactBase.getContactBySurname(surname);

  if(!personInfo){
      resp.status(404);
      resp.send({error: `Item with surname=${surname} not found`});
      return;
  }
  resp.send(personInfo);
});

app.delete('/api/contacts/:id', (req, resp) => {
  const id = Number(req.params.id);
  if(!id){
      resp.status(500);
      resp.send({error: 'Error 500'});
      return;
  }

  const personInfo = contactBase.getContactById(id);

  if(!personInfo){
      resp.status(404);
      resp.send({error: `Item with id=${id} not found`});
      return;
  }

  if(contactBase.deletePersonInfo(id)) {
      resp.status(204);
      resp.end();
  } else {
      resp.status(500);
      resp.send({error: `Error 500 when deleting item with id ${id}`});
  }
});

app.patch('/api/contacts/:id', (req, resp) => {

  const id = Number(req.params.id);

  if(!id){
      resp.status(500);
      resp.send({error: 'Error 500'});
      return;
  }

  const personInfo = contactBase.getContactById(id);

  if(!personInfo){
      resp.status(404);
      resp.send({error: `Item with id=${id} not found`});
      return;
  }

  let data = {
    id: personInfo.id,
    name: req.body.name? req.body.name : personInfo.name,
    surname: req.body.surname ? req.body.surname : personInfo.surname,
    phone: req.body.phone ? req.body.phone : personInfo.phone,
  }

  if(!contactBase.updateContactInfo(id, data)) {
      resp.status(500);
      resp.send({error: `Error 500 when updating item with id ${id}`});
      return;
  }

 resp.status(200);
  resp.send(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
