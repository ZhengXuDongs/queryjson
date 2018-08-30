/**
 * Created by admin on 2017/10/18.
 */
var querystring = require('querystring');
var queryjson = function removeEmptyValue(param){
    var arrs = {};
    for(var i in param){
        if(param.hasOwnProperty(i) && param[i] !== undefined && param[i] !== '' && param[i] !== null){
            arrs[i] = param[i];
        }
    }
    return arrs;
};
var queryjsontostring = function JsonToString(param){
    const obj = queryjson(param);
    const qstring = querystring.stringify(obj);
    return qstring;
}

module.exports = {
    queryjson:queryjson,
    queryjsontostring:queryjsontostring
};