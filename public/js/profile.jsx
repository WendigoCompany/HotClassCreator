
const handleButtonDelete =(id)=>{
    // window.location.href = `/profiles/del/${id}`;
}


const handleButtonModi =(id)=>{
    window.location.href = `/profiles/${id}`;
}


const create_profile = (profile) => {
    const card = [];


    return `
    <tr>
        <td><img src="${profile["gallery"][profile["main_img"]]}" alt="" /></td>
        <td><h3>${profile.fname}</h3></td>
        <td><button onclick="handleButtonModi(${profile.id})" class="btn">MOD</button></td>
        <td><button onclick="handleButtonDelete(${profile.id})" class="btn">DEL</button></td>
    </tr>


    `
}


(async () => {

    try {
        const resp = await axios.get("/profiles/data");
        const profiles = resp.data.data;
        let profiles_cards = "    <table>    <tbody>";
        profiles.map(pro => {
            profiles_cards += create_profile(pro)

        })
        profiles_cards += "</tbody></table>"
        document.getElementById("profiles").innerHTML = profiles_cards;
    } catch (error) {

    }

})()