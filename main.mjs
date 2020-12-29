import fs from 'fs';
import statement from './statement.mjs';
fs.readFile('plays.json',(err,data)=>{
    if(err) throw err;
    let plays;
    let invoices;
    plays = JSON.parse(data);
    fs.readFile('invoices.json',(err,data)=>{
        if(err) throw err;
        invoices = JSON.parse(data);
        console.log(statement(invoices[0],plays));
    });
});