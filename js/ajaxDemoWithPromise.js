let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function makePromiseCall(methodType,url,async=true,data=null){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        console.log("State Change Called. Ready State: "+xhr.readyState+" Status: "+xhr.status);
        if(xhr.status.toString().match('^[2][0-9]{2}$')){
            resolve(xhr.responseText);
        }else if(xhr.status.toString().match('^[4,5][0-9]{2}$')){
            reject({
                status:xhr.status,
                statusText:xhr.statusText
            });
            console.log("XHR Failed");
        }
    }
    xhr.open(methodType,url,async);
    if(data){
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }else{
        xhr.send();
    }
    console.log(methodType+" request send to the server");
    });
}
//get using get method and promise
const getURL = "http://localhost:3000/employees/1";
makePromiseCall("GET",getURL,true).then(responseText=>{
    console.log("Get User Data: "+responseText)
}).catch(error=>console.log("GET error status: "+JSON.stringify(error)));
//delete using delete method and promise
const delURL = "http://localhost:3000/employees/7";
makePromiseCall("DELETE",delURL,false).then(responseText=>{
    console.log("User deleted : "+responseText)
}).catch(error=>console.log("GET error status: "+JSON.stringify(error)))
//post using post method and promise
const postURL = "http://localhost:3000/employees";
const empData = {"first_name":"Dhanush","last_name":"RajPrasad","salary":50000};
makePromiseCall("POST",postURL,true,empData).then(responseText=>{
    console.log("User Added : "+responseText)
}).catch(error=>console.log("GET error status: "+JSON.stringify(error)))
