const cookies = document.cookie.split(";");
let folder = cookies.filter(c => c.includes("proyect"))[0];

document.cookie = 'proyect=; Max-Age=0;';


if (folder) {
  folder = decodeURIComponent(folder.replace("proyect=", ""));
}

sessionStorage.setItem("proyect", folder)

const html = basic + `
  <div>
    <h3>${sessionStorage.getItem("proyect")}</h3>
    <br />
<input type="text" name="" id="" />
<br />
<button id="change-btn" class="btn">CHANGE</button>
<br />
<button id="home-btn" class="btn">HOME</button>


</div>

    
`;

"Content-Type", "application/json"

document.getElementById("root").innerHTML = html;

document.getElementById("change-btn").onclick = async () => {
  const val = document.querySelector("input").value

  let res = "";
  try {
     res =await axios.post("/", ({ val }))
    window.location.reload()
  } catch (error) {
    // alert("ERROR")
    const err = error_manager(error);
    console.log(err);
    
 
  }
}

if(!sessionStorage.getItem("proyect") || sessionStorage.getItem("proyect") == "undefined"){
  document.getElementById("home-btn").disabled = true
  
}

document.getElementById("home-btn").onclick = () => {
  window.location.href = "/home";
}