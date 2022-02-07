
  let errMsgs=[];


  function fetchData(){
  // Function To fetch Data from Forms
  let name=document.getElementById("name").value;
  let age=document.getElementById("age").value;
  let weight=document.getElementById("weight").value;
  personData={
  "name":name,
  "age":age,
  "weight":weight};
  return personData;
  }

  function validateData(data)
  {
  // Function to validate data
  // In this validation function we are only checking Empty fields 
  flag=1;
  console.log(" i am in validation");
  if(data.name==="")
  {
    errMsgs.push("Name Cant be Empty");
    flag=0;
  }
  if(data.age==="")
  {
    errMsgs.push("Age Cant be Empty");
    flag=0;
  }
  if(data.weight===""){
    errMsgs.push("Weight Cant be Empty");
    flag=0;
  }
  if(flag==1)
  {
    return true;
  }
  else{
    return false;
   }
  }
function ageBetween5to7(data){
msg="";
if(data.weight>=15 &&data.weight<=20)
{
  msg=` Helloo ${data.name} !! Your  Weight is Perfect`
}
else if(data.weight<15)
{
  msg=` Helloo ${data.name} !! Your  Weight is less than Recommended Value of 15kg at an age of ${data.age}`
}
else{
  msg=` Helloo ${data.name} !! Your  Weight is Higher than Recommended Value of 20kg at an age of ${data.age}`
}
return msg;
}
function ageBetween8to10(data){
  msg="";
if(data.weight>=21 &&data.weight<=25)
{
  msg=` Helloo ${data.name} !! Your  Weight is Perfect`
}
else if(data.weight<21)
{
  msg=` Helloo ${data.name} !! Your  Weight is less than Recommended Value of 21kg at an age of ${data.age}`
}
else{
  msg=` Helloo ${data.name} !! Your  Weight is Higher than Recommended Value of 25kg at an age of ${data.age}`
}
return msg;

}
function ageBetween11to15(data){
  msg="";
  if(data.weight>=26 &&data.weight<=30)
  {
    msg=` Helloo ${data.name} !! Your  Weight is Perfect`
  }
  else if(data.weight<26)
  {
    msg=` Helloo ${data.name} !! Your  Weight is less than Recommended Value of 26kg at an age of ${data.age}`
  }
  else{
    msg=` Helloo ${data.name} !! Your  Weight is Higher than Recommended Value of 30kg at an age of ${data.age}`
  }
  return msg;
}
function ageBetween16to20(data){
  msg="";
  if(data.weight>=31 &&data.weight<=40)
  {
    msg=` Helloo ${data.name} !! Your  Weight is Perfect`
  }
  else if(data.weight<31)
  {
    msg=` Helloo ${data.name} !! Your  Weight is less than Recommended Value of 31kg at an age of ${data.age}`
  }
  else{
    msg=` Helloo ${data.name} !! Your  Weight is Higher than Recommended Value of 40kg at an age of ${data.age}`
  }
  return msg;
}

function displayData(data)
{
  // Function To Dispaly Data 
  console.log(data.age);
 msg=""
  if((data.age>5)&&(data.age<=7))
  {
    msg= ageBetween5to7(data);
  }
  else if((data.age>=8)&&(data.age<=10))
  {
    msg=ageBetween8to10(data);
  }
  else if((data.age>=11)&&(data.age<=15))
  {
    ageBetween11to15(data);
  }
  else if((data.age>=16)&&(data.age<=20))
  {
    ageBetween16to20(data)
  }
  
  else if(data.age>20)
  {
    errMsgs.push("Age cannot be > than 20 ");
    displayErrors();
  }
  else if(data.age<5)
  {
    errMsgs.push("Age cannot be < than 5 ");
    displayErrors();
  }
  else{
    errMsgs.push("Wrong Input ");
    displayErrors();
  }
  document.getElementById("res").innerHTML=`${msg}`;
}
  function displayErrors()
  {
     // this function only Dispaly errors 
    console.log(" i am here in display errrors functions");
    errBox=document.getElementById("errors");
    console.log(errBox);
    errMsgs.forEach(element => {
    errBox.innerHTML += `<div>${element} </div>`;
    console.log(errBox)
      
    });
    errMsgs=[];
  }

  // Driver function
  function diverFunction(){
  data=fetchData();
  isValidated=validateData(data);
  if(isValidated)
  {
  console.log("Data Correct");
  displayData(data);

  }
  else{
  console.log("Data incorrect");
  displayErrors();

  }
  }