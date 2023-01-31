

const StudentTableCreateQuery = () => {
  string =
    "CREATE TABLE `Students` (`col1` varchar(255) NOT NULL ,`col2` varchar(255) NOT NULL,`col3` varchar(255) NOT NULL,`col4` varchar(255) NOT NULL,`col5` varchar(255) NOT NULL,`col6` varchar(255) NOT NULL,`col7` varchar(255) NOT NULL,`col8` varchar(255) NOT NULL,`col9` varchar(255) NOT NULL,`col10` varchar(255) NOT NULL, PRIMARY KEY (`col1`));";
  return string;
};


const Student2TableCreateQuery = () => {
  string =
    "CREATE TABLE `Students2` (`col1` varchar(255) NOT NULL ,`col2` varchar(255) NOT NULL,`col3` varchar(255) NOT NULL,`col4` varchar(255) NOT NULL, PRIMARY KEY (`col1`));";
  return string;
};

module.exports = {
  
  
  
  StudentTableCreateQuery,
  Student2TableCreateQuery,
 
};
