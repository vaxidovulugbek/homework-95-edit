Array.from(el.name).forEach((nameitem) => {
  let arrname = nameitem.toLowerCase()
  console.log(arrname);
  cartList.style.display = "none"
  if (arrname == textlarim) {

    newItems = [];
      function showItems(cartItemsArray) {
        newItems = [];
        cartItemsArray.forEach((item) => {
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
      newItems2.push(li);
      });
      searchList.innerHTML = newItems2.join(""); 

      }
      showItems(cartItemsArray);

  }
  // else if (arrname != textlarim) {
  //   searchList.innerHTML = ""
  // }