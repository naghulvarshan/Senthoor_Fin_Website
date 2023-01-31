const { createTable } = require("../service/createTable");
const { showTables } = require("../service/showTables");

const { insert } = require("../service/insert");

const {
 
  StudentTableCreateQuery,
  Student2TableCreateQuery,
 
} = require("../database/model/createTable");


exports.createInitialTable = async () => {
  console.log("[+] initialling initial table check ");
  let presentTable = [];
  await showTables(async (result) => {
    presentTable.push(...result);
    presentTable.map((table, index) => {
      presentTable[index] = table[`Tables_in_${process.env.DB_NAME}`];
    });

    // console.log(presentTable.includes("users"), presentTable);
   
    if (presentTable.includes("students") != true) {
      createTable(StudentTableCreateQuery(), (result) => {
        console.log("[+] Students Table Created");
      });      
    }


    if (presentTable.includes("students2") != true) {
      createTable(Student2TableCreateQuery(), (result) => {
        console.log("[+] Students2 Table Created");
      });    
    }

    
    
  });
  //refreshValues();
};
