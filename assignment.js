// var marks=60;
// var grade=null;
// if(marks=>50){
//     grade="pass";
// }else{
//     grade="fail";
// }
// console.log(grade);
function getGrade(Marks){ 
if(Marks>=79){
    return "B";
}else if(Marks>=69){
    return "C";
}else if (Marks>=59){
return "D";
}else if (Marks>=49){
    return "E";
}
else
return "F";
}
    console.log(getGrade(40));