const input = document.querySelector('input[type="text"]');
const addBtn = document.querySelector(".add-btn");
const itemList = document.querySelector(".item-list");

addBtn.addEventListener("click", function () {
  const itemText = input.value.trim();
  if (itemText) {
    const li = document.createElement("li");
    li.className = "item-box";
    li.textContent = itemText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "btn del-btn";
    delBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(delBtn);
    itemList.appendChild(li);

    input.value = "";
    input.focus();
  }
});
