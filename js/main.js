let cartItemsArray = [
  {
    id: 1,
    name: "Ulugbek",
    email:"ulugbek@gmail.com",
    mobile:99890987865,
    depertment:"HR"
  },
];


const cartList = document.querySelector("#list");
const searchList = document.querySelector("#searchList");
const addedModal = document.querySelector("#addedModal");
const exampleInputName1 = document.querySelector("#exampleInputName1");
const exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
const exampleInputTel1 = document.querySelector("#exampleInputTel1");

const floatingTextarea = document.querySelector("#floatingTextarea");
const formAdded = document.querySelector("#formAdded");
const formEdit = document.querySelector("#formEdit");
const staticName = document.querySelector("#staticName");
const staticDesc = document.querySelector("#staticDesc");
const editTextarea = document.querySelector("#editTextarea");
const inputNameEdit = document.querySelector("#inputNameEdit");
const inputEmailEdit = document.querySelector("#inputEmailEdit");
const inputMobileEdit = document.querySelector("#inputMobileEdit");

const searchForm = document.querySelector("#searchForm");
const searchEl = document.querySelector("#searchEl");

searchEl.addEventListener("keyup",(e) => {
  e.preventDefault()
  // console.log(searchEl.value);
  let textlarim  = e.target.value.toLowerCase()
  console.log(textlarim); 

  
  // cartItemsArray.forEach(el => {
  //   Array.from(el.name).forEach((nameitem) => {
  //     let arrname = nameitem.toLowerCase()
  //     console.log(arrname);
  //     cartList.style.display = "none"
  //     if (arrname == textlarim) {

  //       newItems = [];
  //         function showItems(cartItemsArray) {
  //           newItems = [];
  //           cartItemsArray.forEach((item) => {
  //             let li =` <li class="item-list">
  //             <p class="item__texts" id="windowfulname">${item.name}</p>
  //             <p class="item__texts" id="windowemailad">${item.email}</p>
  //             <p class="item__texts" id="windowNumber">${item.mobile}</p>
  //             <p class="item__texts" id="windowdepartm">${item.depertment}</p>
  //             <div>
  //               <button id="editel" class="button1"  data-bs-toggle="modal"
  //               data-bs-target="#editModal"  onclick='editCard(${item.id})'><i class='bx bx-edit-alt'></i></button>
  //               <button id="deleteel" class="button2 deleteel" onclick='DeleteEl(${item.id})'>x</button>
  //             </div>
  //         </li>`
  //         newItems2.push(li);
  //         });
  //         searchList.innerHTML = newItems2.join(""); 

  //         }
  //         showItems(cartItemsArray);

  //     }
  //     // else if (arrname != textlarim) {
  //     //   searchList.innerHTML = ""
  //     // }
  //   })
  // })




  // cartList.lastChild.style.backgroundColor = "red"
  // cartItemsArray.forEach(el => {
  //   Array.from(el.name).forEach((nameitem) => {
  //     console.log(nameitem);
  //   })
  // })

})

// cartItemsArray.forEach(e => {
//   console.log(e.name);
// })

  
// console.log(cartList);
// cartList.forEach(i => {
//   console.log(i);
// })


// cartList.style.display = "none"




// let searchinput = document.querySelector("#search-input")
// let items = document.querySelectorAll(".items")
// searchinput.addEventListener("keyup", (e) => {
//   e.preventDefault()
//   let textlarim  = e.target.value.toLowerCase()

//   Array.from(items).forEach((item) => {
//    let aniqla =  item.firstElementChild.textContent
//    if (aniqla.toLowerCase().indexOf(textlarim) == -1) {
//     item.style.display = "none"
//    }
//    else {
//     item.style.display = "block"
//    }
//   })
// })





let newItems = [];

function showItems(cartItemsArray) {
  newItems = [];
  cartItemsArray.forEach((item) => {
    // let lii = document.createElement("li")
    // lii.classList = "item-list"
    // lii.innerHTML = `<p class="item__texts" id="windowfulname">${item.name}</p>
    // <p class="item__texts" id="windowemailad">${item.email}</p>
    // <p class="item__texts" id="windowNumber">${item.mobile}</p>
    // <p class="item__texts" id="windowdepartm">${item.depertment}</p>
    // <div>
    //   <button id="editel" class="button1"  data-bs-toggle="modal"
    //   data-bs-target="#editModal"  onclick='editCard(${item.id})'><i class='bx bx-edit-alt'></i></button>
    //   <button id="deleteel" class="button2 deleteel" onclick='DeleteEl(${item.id})'>x</button>
    // </div>`
    let li =` <li class="item-list">
    <p class="item__texts" id="windowfulname">${item.name}</p>
    <p class="item__texts" id="windowemailad">${item.email}</p>
    <p class="item__texts" id="windowNumber">${item.mobile}</p>
    <p class="item__texts" id="windowdepartm">${item.depertment}</p>
    <div>
      <button id="editel" class="button1"  data-bs-toggle="modal"
      data-bs-target="#editModal"  onclick='editCard(${item.id})'><i class='bx bx-edit-alt'></i></button>
      <button id="deleteel" class="button2 deleteel" onclick='DeleteEl(${item.id})'>x</button>
    </div>
 </li>`
 newItems.push(li);
//  newItems.push(lii);
// cartList.appendChild(lii)
});

// console.log(newItems); 
// newItems.forEach(ell => {
//   // console.log(ell);
//   cartList.appendChild(ell)
// })
// console.log(cartList);

cartList.innerHTML = newItems.join(""); 

}
showItems(cartItemsArray);

  

let btndetails = document.querySelectorAll(".btndetails")
let details = document.querySelector("#details2")
let a = ""
btndetails.forEach(item => {
  item.addEventListener("click",(w) => {
    // console.log(w.target.textContent);
    a = w.target.textContent
    // a.toUpperCase
    details.removeAttribute("open");
  })
})

let btndetail = document.querySelectorAll(".btndetail")
let details3 = document.querySelector("#details3")
let b = ""
btndetail.forEach(item => {
  item.addEventListener("click",(w) => {
    // console.log(w.target.textContent);
    b = w.target.textContent
    details3.removeAttribute("open");
  })
})





formAdded.addEventListener("submit", (e) => {
  let count = cartItemsArray[cartItemsArray.length - 1].id;
  e.preventDefault();
  // cartItemsArray = []
  cartItemsArray.push({
    id: ++count,
    name: exampleInputName1.value,
    email: exampleInputEmail1.value,
    mobile: exampleInputTel1.value,
    depertment: a,
    // desc: floatingTextarea.value,
  });
  showItems(cartItemsArray);

  exampleInputName1.value = "";
  exampleInputEmail1.value = "";
  exampleInputTel1.value = "";
});

function editCard(elId) {
  cartItemsArray.forEach((item) => {
    if (elId === item.id) {
      inputNameEdit.value = item.name;
      inputEmailEdit.value = item.email
      inputMobileEdit.value = item.mobile
      b = item.depertment
      editItem(elId);
    }
  });
}

function editItem(elId) {
  let count = 1;
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(cartItemsArray[elId - 1].name);
    if (count == 1) {
      cartItemsArray[elId - 1].name = inputNameEdit.value;
      // cartItemsArray[elId - 1].desc = editTextarea.value;
      cartItemsArray[elId - 1].email = inputEmailEdit.value;
      cartItemsArray[elId - 1].mobile = inputMobileEdit.value;
      cartItemsArray[elId - 1].depertment = b;
      showItems(cartItemsArray);
      count++;
    }
  });
}


function DeleteEl(elId) {
  cartItemsArray.forEach((item) => {
      let deleteel = document.querySelectorAll(".deleteel")
      if (elId === item.id) {
        deleteel.forEach(item => {
          // console.log(item.parentElement);
          item.addEventListener("click",(e) => {
            e.target.parentElement.parentElement.style.display = "none"
            // cartItemsArray = []
            console.log(e.target.parentElement.parentElement);
            // cartList.remove(e.target.parentElement.parentElement)
            // console.log(cartItemsArray);
            // cartItemsArray = cartItemsArray.filter(person => person.name != 'Ulugbek')
            // cartItemsArray.remove(e.target.parentElement.parentElement)
          })
        })
      }
  });
}






email.addEventListener("keyup",(e) => {
  e.preventDefault()
  console.log("hi");
  email.classList.add("borderred")

  if (email.value.match(/[@]/) != null) {
    email.classList.remove("borderred")
  }
  // if (telnum.value.length)
  
})
telnum.addEventListener("keyup",(e) => {
  e.preventDefault()
  telnum.classList.add("borderred")
  if (telnum.value.length > 8) {
    telnum.classList.remove("borderred")
  }
})
fullname.addEventListener("keyup",(e) => {
  e.preventDefault()
  if (fullname.value == "") {
    fullname.classList.add("borderred")
  }
  else if (fullname.value != "") {
    fullname.classList.remove("borderred")
  }
})


