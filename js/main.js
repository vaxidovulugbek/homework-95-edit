let cartItemsArray = [
  {
    id: 1,
    name: "ulugbek",
    email:"ulugbek@gmail.com",
    mobile:99890987865,
    depertment:"HR"
  },
  {
    id: 2,
    name: "avakhidov",
    email:"vaxidov@gmail.com",
    mobile:19890987865,
    depertment:"HR"
  },
];


let count = 0
let count2 = 0
const windowfulname = document.querySelector("#windowfulname")
const windowNumber = document.querySelector("#windowNumber")
windowfulname.addEventListener("click",(e) => {
  e.preventDefault()
  if (count % 2 == 0) {
    cartItemsArray.sort((a, b) => {
      if(a.name > b.name) {
        return 1
      }
      if(a.name < b.name) {
        return -1
      }
      return 0
      
    });
    count++
  }
  else if (count % 2 != 0) {
    cartItemsArray.sort((a, b) => {
      if(a.name < b.name) {
        return 1
      }
      if(a.name > b.name) {
        return -1
      }
      return 0
      
    });
    count++
  }
  
    showItems(cartItemsArray)
    // editCard(elId)
})

windowNumber.addEventListener("click",(e) => {
  e.preventDefault()
  if (count2 % 2 == 0) {
    cartItemsArray.sort((a, b) => a.mobile - b.mobile)
    count2++
  }
  else if (count2 % 2 != 0) {
    cartItemsArray.sort((a, b) => b.mobile - a.mobile)
    count2++
  }
    showItems(cartItemsArray)
    // editCard(elId)
  })


// cartItemsArray.sort(dynamicSort("Name"))
// console.log(cartItemsArray);


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
const detailssummari = document.querySelector("#detailssummari")


// ================================ SEARCH PART ====================================

searchEl.addEventListener("keyup",(e) => {
  e.preventDefault()
  cartList.innerHTML = " "
  let textlarim  = e.target.value.toLowerCase()
  console.log(textlarim); 

  
  cartItemsArray.forEach(el => {
    let objname = el.name.toLowerCase()
    if (objname.includes(textlarim)){
      bironta(el)
    }
    })
  })

function bironta (item) {
  let li = document.createElement("li")
  li.classList = "item-list"
  li.innerHTML =`
    <p class="item__texts" id="windowfulname">${item.name}</p>
    <p class="item__texts" id="windowemailad">${item.email}</p>
    <p class="item__texts" id="windowNumber">${item.mobile}</p>
    <p class="item__texts" id="windowdepartm">${item.depertment}</p>
    <div>
      <button id="editel" class="button1"  data-bs-toggle="modal"
      data-bs-target="#editModal"  onclick='editCard(${item.id})'><i class='bx bx-edit-alt'></i></button>
      <button id="deleteel" class="button2 deleteel" onclick='DeleteEl(${item.id})'>x</button>
    </div>
  `
  cartList.appendChild(li)
}

// ================================ END OF SEARCH PART ====================================

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
//  cartList.appendChild(lii)
});

// console.log(newItems); 
// newItems.forEach(ell => {
//   console.log(ell);
//   // console.log(ell);
//   // cartList.appendChild(ell)
// })
// console.log(cartList);
// ====================================== overflow scroll ===============================
cartList.innerHTML = newItems.join(""); 
cartItemsArray.forEach(item => {
  console.log(cartItemsArray.length);
  if (cartItemsArray.length > 3) {
    cartList.classList.add("height")
  }
})
// ======================================================================================
}
showItems(cartItemsArray);

let btndetails = document.querySelectorAll(".btndetails")
let details = document.querySelector("#details2")
let a = ""
btndetails.forEach(item => {
  item.addEventListener("click",(w) => {
    // console.log(w.target.textContent);
    a = w.target.textContent
    detailssummari.textContent = a
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






exampleInputEmail1.addEventListener("keyup",(e) => {
  e.preventDefault()
  console.log("hi");
  exampleInputEmail1.classList.add("borderred")

  if (exampleInputEmail1.value.match(/[@]/) != null) {
    exampleInputEmail1.classList.remove("borderred")
  }
})

exampleInputTel1.addEventListener("keyup",(e) => {
  e.preventDefault()
  exampleInputTel1.classList.add("borderred")
  if (exampleInputTel1.value.length > 8) {
    exampleInputTel1.classList.remove("borderred")
  }
})
exampleInputName1.addEventListener("keyup",(e) => {
  e.preventDefault()
  if (exampleInputName1.value == "") {
    exampleInputName1.classList.add("borderred")
  }
  else if (exampleInputName1.value != "") {
    exampleInputName1.classList.remove("borderred")
  }
})



