
const InsertInStudentTableQuery = () => {
  let string =
    "INSERT INTO `Students` (`col1`, `col2`, `col3`, `col4`, `col5`,`col6`,`col7`,`col8`,`col9`,`col10`) VALUES (?, ?, ?, ?,?,?,?,?,?,?);";
  return string;
};


const InsertInStudent2TableQuery = () => {
  let string =
    "INSERT INTO `Students2` (`col1`, `col2`, `col3`, `col4`) VALUES (?, ?, ?, ?);";
  return string;
};


module.exports = {
 
  InsertInStudentTableQuery,
  InsertInStudent2TableQuery,
 
};
