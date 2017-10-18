# queryjson
An example for an object to remove the item where the value is null or " ".
# example
var queryjson = require('queryjson');
const param = {
    userName:'11',
    password:'11',
    email:'11',
    tel:'1',
    userType:''
};
const cc = queryjson(param);
// cc = {
    userName:'11',
    password:'11',
    email:'11',
    tel:'1',
    userType:''
 }
