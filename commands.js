const fs = require('fs');
const { title } = require('process');


//for add
const add = (title , body) => {
    
    let titleList =[];

    try{
        titleList =JSON.parse(fs.readFileSync("nodeList.json"));
    }catch (err){
      console.log(err);
    }

    let index = titleList.findIndex((x)  => x.title==title );
      //console.log(index);

    if (index === -1){
        titleList.push({title,body});
        //console.log(titleList);
    } else{ 
        console.log('file alredy exsist');
    }
    fs.writeFileSync("nodeList.json",JSON.stringify(titleList));
}



//for remove
const remove = (title) => {

    let titleList = [];

    
    try{
        titleList =JSON.parse(fs.readFileSync("nodeList.json"));
    }catch (err){
      console.log(err);
    }

    const filteredList = titleList.filter((x) => x.title !== title);
    fs.writeFileSync("nodeList.json",JSON.stringify(filteredList));
    //console.log(filteredList);
}

//for list

const list = (title) => {

    let titleList = [];

    
    try{
        titleList =JSON.parse(fs.readFileSync("nodeList.json"));
    }catch (err){
      console.log(err);
    }

    console.log(titleList);

    
   
}

//for read

const read = (title) => {

    let titleList = [];

   try{
        titleList =JSON.parse(fs.readFileSync("nodeList.json"));
    }catch (err){
     // console.log(err);
    }
    

    let index = titleList.findIndex((x)  => x.title ==  title );
    
    if (index !== -1){
        console.log(`title=${titleList[index].title}`);
        console.log(`body=${titleList[index].body}`);
    } 

}


module.exports = {
    add,
    remove,
    list,
    read
}
