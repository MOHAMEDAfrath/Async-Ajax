function showTime(){
    const date = new Date();
    return "Hours : "+date.getHours()+" Mins : "+date.getMinutes()+" Seconds :"+date.getSeconds();
}
function showSessionExpire(){
    console.log('Activity-B : Your session Expired at '+showTime());
}
//Actvity a is triggered,but B will execute after all main threads are executed.
console.log('Activity-A: Trigerring Activity-B at '+showTime());
setTimeout(showSessionExpire,5000);
console.log('Activity-A: Trigerring Acitvity-B at '+showTime()+ " will execute after 5 seconds")