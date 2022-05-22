const ip = document.getElementById("ip");
const output = document.getElementById("output");
const d = document.getElementById("DARK");
var d_num = 0;

//An Event Listener For IP Input Tag If Enter Key Is Pressed
ip.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    document.getElementById("myBtn").click();
  }
})

//Function To Enable Dark Mode
function dark(){
  document.body.classList.toggle("dark-theme");
  d_num+=1;
  if(d_num%2==0){
    d.innerText = "DARK";
  }else{
    d.innerText = "LIGHT";
  }
}

// Function To Get Ip Info
async function fun1() {
  var format = "";

  // Storing response
  const api_url =
    "http://ip-api.com/json/" +
    ip.value;

  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();

  if (data.status == "success") {
    for (var i in data) {
      format += `${i.toUpperCase()} : ${data[i]}\n`;
    }
  } else {
    format = "IP NOT FOUND PLEASE RECHECK THE IP";
  }
  output.style.border = '1px solid black'
  output.innerText = format;
  console.log(data)
}

/* AUTHOR HEM ARYA */
