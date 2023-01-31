const { InsertInStudentTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.register = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInStudentTableQuery(),
                "Student",
                [
                    
                    req.body.col1,
                    req.body.col2,
                    req.body.col3,
                    req.body.col4,
                    req.body.col5,
                    req.body.col6,
                    req.body.col7,
                    req.body.col8,
                    req.body.col9,
                    req.body.col10,
                    
                            
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "User Registration succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "User Registration succeed",
                            status: true,
                        });
                        } 
                    }
                );
            } catch (err) {
                console.log(`[-]  `, {
                error: err,
          statusMessage: "something went wrong in function",
          status: false,
        });
        res.send({
          error: err,
          statusMessage: "something went wrong",
          status: false,
        });
      }
    
  };
  