//INSERTS A SINGLE DATUM TO THE DATABASE
function insert(value, row, table) {

    const fs = require("fs");
    const dir = __dirname ;

    const attributes = require("../attributes.json");

    const topic = attributes.topic;
    const artist = attributes.artist;
    const language = attributes.language;

    try{ 
      if(table=="topic"){
        topic[row].push(value);
      }
      else if(table=="artist"){
        artist[row].push(value);
      }
      else if(table=="language"){
        language[row].push(value);
      }
      else{
        throw("Not a valid table");
      }
      
    }catch{ 
      
      if(table=="topic"){
        topic[row]=[value];
      }
      else if(table=="artist"){
        artist[row]=[value];
      }
      else if(table=="language"){
        language[row]=[value];
      }
      else{
        throw("Not a valid table");
      }
    }

    const final={topic, language, artist};

    fs.writeFileSync(
        dir + "/../attributes.json",
    JSON.stringify(final, null, 2)
    );
}

//export {insert};