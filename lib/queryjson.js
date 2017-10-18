/**
 * Created by admin on 2017/10/18.
 */

var queryjson = function removeEmptyValue(param){
    var arrs = {};
    for(var i in param){
        if(param.hasOwnProperty(i) && param[i] !== undefined && param[i] !== ''){
            arrs[i] = param[i];
        }
    }
    return arrs;
};

module.exports = queryjson;