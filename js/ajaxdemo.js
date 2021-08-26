let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function makeAJAXCall(methodType,url,callBack,async=true,data=null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        console.log("State Change Called. Ready State: "+xhr.readyState+" Status: "+xhr.status);
        if(xhr.readyState ==4){
            if(xhr.status==200||xhr.status==201){
                callBack(xhr.responseText);
            }else if(xhr.status>=400){
                console.log("Handle 400 client error or 500 server error");
            }
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
}
//get using get method and call back
const getURL = "http://localhost:3000/employees/1";
function getUserDetails(data){
    console.log("Get User Data: "+data);
}
makeAJAXCall("GET",getURL,getUserDetails);
//delete using delete method and call back
const delURL = "http://localhost:3000/employees/7";
function userDeleted(data){
    console.log(" User Deleted: "+data);
}
makeAJAXCall("DELETE",delURL,userDeleted,false);
//post using post method and call back
const postURL = "http://localhost:3000/employees";
const empData = {"first_name":"Dhanush","last_name":"RajPrasad","salary":50000};
function addUser(data){
    console.log(" User Deleted: "+data);
}
makeAJAXCall("POST",postURL,addUser,true,empData);
