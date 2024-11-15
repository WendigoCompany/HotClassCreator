const get_image_orden =()=>{
    const change_select = document.getElementsByClassName("gal-sel");
    const orden = [];
    for (let i = 0; i < change_select.length; i++) {
        orden.push(change_select[i].value )
        
    }


    return orden
}

const option_creator = (data, sel) => {
    const max = data.gallery.length;
    let options = ``;


    for (let i = 0; i < max; i++) {


        options += `<option ${i == sel ? "selected" : ""} value="${i}">${i}</option>`

    }

    return options
}



const select_creator = (data) => {
    let selectors = ``;
    for (let i = 0; i < data.gallery.length; i++) {

        selectors += `
                <select id="sel-${i}" class="gal-sel">
            ${option_creator(data, i)}
        </select>
        `
    }



    return selectors
}
const show_images = (gallery) => {
    let elements = " <table>            <tbody>           <tr>         <td>";
    gallery.map((img, i) => {
        elements += `


     
             
                        <div class="table-im">
                            <img src="${img}" alt="" />
                            <label htmlFor="">${i}</label>
                        </div>
               
       
  
    

`

    })

    elements += "               </td>   </tr>      </tbody>        </table> "
    return elements
};


(async () => {

    try {
        let id = window.location.href;
        id = id.substring(id.lastIndexOf("/") + 1);

        const resp = await axios.get("/profiles/data/" + id);

        const data = resp.data.msj;

        // <table>
        //     <tbody>
        //         <tr>
        //             <td>${"SNAME"}</td>
        //             <td>${data[0].sname}</td>
        //             <td>${data[1].sname}</td>

        //         </tr>
        //     </tbody>
        // </table>



        const content = `
                <table>
            <tbody>
                <tr>
                    <td>  <label>${"SNAME"}</label></td>
                    <td> <input type="text" value="${data[0].sname}" name="sname"/></td>
                </tr>
                <tr>
    
<td>  <label>${"FNAME"}</label></td>
        <td> <input type="text" value="${data[0].fname}" name="fname"/></td>
 </tr>

        ${show_images(data[0].gallery)}


            </tbody>
        </table>
        
       
        <table>
    <tbody>

    <tr>
    <td>  <label>${"MAIN_IMG"}</label></td>
    <td id="td1">
    <select name=""  value="${data[0].main_img}" id="">
    ${(() => {
                const max = data[0].gallery.length;
                let options = ``;


                for (let i = 0; i < max; i++) {


                    options += `<option ${i == data[0].main_img ? "selected" : ""} value="${i}">${i}</option>`

                }

                return options
            })()}
</select>

    </td>
</tr>

       <tr>
           <td>  <label>${"MAIN_IMG"}</label></td>
           <td id="td2">
                ${select_creator(data[0])}
            </td>
        </tr>
</table>
    </tbody>

<table>
    <tbody>


      <tr>
                    <td>  <label>${"TITLE"}</label></td>
                    <td> <input type="text" value="${data[0].title}" name="en_title"/></td>
                    <td> <input type="text" value="${data[1].title}" name="sp_title"/></td>

                </tr>


      <tr>
                    <td>  <label>${"PREV"}</label></td>
                  <td>  <textarea name="en_prev">${data[0].prev}</textarea ></td>
                   <td> <textarea name="sp_prev">${data[1].prev}</textarea ></td>

                </tr>



             <tr>
                    <td>  <label>${"DESCRIPTION"}</label></td>
                    <td> <textarea name="en_description">${data[0].description}</textarea ></td></td>
                    <td> <textarea name="sp_description">${data[1].description}</textarea ></td>

                </tr>





</tbody>
</table>
        
        `;








        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <input type="text" value="${data[0].sname}" name="en_sname" /></td>
        //     <td> <input type="text" value="${data[1].sname}" name="sp_sname" /></td>
        // </tr>

        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <input type="text" value="${data[0].sname}" name="en_sname" /></td>
        //     <td> <input type="text" value="${data[1].sname}" name="sp_sname" /></td>
        // </tr>

        // <td>  <label>${"SNAME"}</label></td>
        // <td> <input type="text" value="${data[0].sname}" name="en_sname"/></td>
        // <td> <input type="text" value="${data[1].sname}" name="sp_sname"/></td>
        console.log(data);

        // <td>  <label>${"SNAME"}</label></td>
        // <td> <label value="${data[0].sname}" name="en_sname"/></td>
        // <td> <label value="${data[1].sname}" name="sp_sname"/></td>
        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <label>${data[0].fname}</label></td>
        //     <td> <label>${data[1].fname}</label></td>

        // </tr>
        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <label>${data[0].sname}</label></td>
        //     <td> <label>${data[1].sname}</label></td>

        // </tr>
        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <label>${data[0].sname}</label></td>
        //     <td> <label>${data[1].sname}</label></td>

        // </tr>
        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <label>${data[0].sname}</label></td>
        //     <td> <label>${data[1].sname}</label></td>

        // </tr>
        // <tr>
        //     <td>  <label>${"SNAME"}</label></td>
        //     <td> <label>${data[0].sname}</label></td>
        //     <td> <label>${data[1].sname}</label></td>

        // </tr>



        // const profiles = resp.data.data;
        // let profiles_cards = "    <table>    <tbody>";
        // profiles.map(pro => {
        //     profiles_cards += create_profile(pro)

        // })
        // profiles_cards += "</tbody></table>"
        document.getElementById("profiles").innerHTML = content;


        const original_values = [];



        const change_select = document.getElementsByClassName("gal-sel");
        for (let i = 0; i < change_select.length; i++) {
            original_values[i] = change_select[i].value;

            change_select[i].onchange = (e) => {
                const {value} = e.target;
                const oldv = original_values[i];
                const nvalue =value ;
                let toReplace = {};
                for (let i = 0; i < original_values.length; i++) {
                    if(original_values[i] == nvalue){
                        toReplace["index"] =  i;
                        break
                    }
                    
                }
                
                document.getElementById(`sel-${toReplace["index"]}`).selectedIndex = oldv
                change_select[i].selectedIndex = nvalue
                original_values[toReplace["index"]] =oldv ;
                original_values[i] = nvalue;


     
                
            
            }
        }

   





    } catch (error) {

    }

})()