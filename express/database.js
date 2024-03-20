import { cwd } from "node:process";
//process.cwd is a method in Node.js that returns the current working directory of the Node.js process as a string.

import { join } from "node:path";
import { existsSync, writeFileSync, readFileSync } from "node:fs";

export default class DatabaseSimulation {
  database = [];
  filePath = join(cwd(), "..", "database.json");

  constructor() {
    if (existsSync(this.filePath)) {
      /*existsSync(path) — функция, которая определяет наличие файла или директории по указанному пути.
        Функция возвращает true, если файл или директория по указанному пути существует*/
      try {
        this.database = JSON.parse(readFileSync(this.filePath));
      } catch (error) {
        console.error("DATABASE ERROR", error);
      }
    } else {
      writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  getContactsList() {
    return this.database;
  }

  createContact(data) {
    try {
      this.database.push(data);
      this.storeToDisk();
      return true;
    } catch (error) {
      console.error("DataBase Error", error);
      return false;
    }
  }

  getContactBySurname(surname) {
    const person = this.database.filter((item) => {
      return item.surname === surname;
    });
    return person;
  }

  getContactById(id) {
    const person = this.database.find((item) => {
      return item.id === id;
    });
    return person;
  }

  updateContactList(id, data) {
    const found = this.database.find((item) => {
      return item.id === id;
    });
    const foundElIdx = this.database.indexOf(found);
    try {
      this.database[foundElIdx] = data;
      this.storeToDisk();
      return true;
    } catch (error) {
      console.error("DATABASE ERROR", error);
      return false;
    }
  }

  deletePersonInfo(id) {
    try {
      this.database = this.database.filter((item) => {
        return item.id !== id;
      });
      this.storeToDisk();
      return true;
    } catch (error) {
      console.error("DATABASE ERROR", error);
      return false;
    }
  }

  updateContactInfo(id, data) {
    const findContact= this.database.find((item) => {
      return item.id === id;
    });
    const foundElIdx = this.database.indexOf(findContact);
    try {
      this.database[foundElIdx] = data;
      this.storeToDisk();
      return true;
    } catch (error) {
      console.error("DATABASE ERROR", error);
      return false;
    }
  }

  storeToDisk() {
    try {
      writeFileSync(this.filePath, JSON.stringify(this.database));
    } catch (e) {
      console.error("DATABASE ERROR", e);
    }
  }
}
