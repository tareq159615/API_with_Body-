const Product = require('./mongoose'); 
// ---------------------------------------------Add Data----------------------------------------------

const add_data_in_db = async () => {
    let data = new Product({
        name:'app 3',
        price:340,
        brand: "max", 
        category:"mobile"
    }); 
    let result = await data.save(); 
    console.log(result);
}
// add_data_in_db();

// ---------------------------------------------------Mongodb data update----------------------------------------
const update_data_in_db = async () => {
    const data = await Product.updateOne({name:'app 3'},{$set:{price:450,name:'oppo'}}); 
    console.log(data); 
}
// update_data_in_db(); 

// -------------------------------------------------Mongodb data delete------------------------------------------
const delete_data_in_db = async () => {
    const data = await Product.deleteOne({name:'oppo'}); 
    console.log(data); 
}
// delete_data_in_db(); 

// -------------------------------------------Read data------------------------------------------------
const read_data_in_db = async () => {
    const data = await Product.find(); 
    console.log(data); 
}
// read_data_in_db(); 