const { update } = require("../service/update");

exports.UpdateStudent = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "students",
    setfield: [],
    condition: [`col1='${req.body.col1}'`],
  };

  //    if(req.body.Password ){

  if (req.body.col2 != undefined) {
    updateQuery.setfield.push(`col2='${req.body.col2}'`);
  }

  if (req.body.col3 != undefined) {
    updateQuery.setfield.push(`col3='${req.body.col3}'`);
  }

  if (req.body.col4 != undefined) {
    updateQuery.setfield.push(`col4='${req.body.col4}'`);
  }

  if (req.body.col5 != undefined) {
    updateQuery.setfield.push(`col5='${req.body.col5}'`);
  }

  if (req.body.col6 != undefined) {
    updateQuery.setfield.push(`col6='${req.body.col6}'`);
  }

  if (req.body.col7 != undefined) {
    updateQuery.setfield.push(`col7='${req.body.col7}'`);
  }

  if (req.body.col8 != undefined) {
    updateQuery.setfield.push(`col8='${req.body.col8}'`);
  }

  if (req.body.col9 != undefined) {
    updateQuery.setfield.push(`col9='${req.body.col9}'`);
  }

  if (req.body.col10 != undefined) {
    updateQuery.setfield.push(`col10='${req.body.col10}'`);
  }
  
  await update(updateQuery, async (err, result) => {
    if (err) {
      console.log(`[-]  `, {
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
      res.send({
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
    } else {
      console.log(`[+]  `, {
        statusMessage: "students successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "students successfully updated",
        status: true,
      });
    }
  });
};
