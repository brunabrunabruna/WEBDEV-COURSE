let userPrompt = prompt("what would you like to do?");
const todoList = [];
while (userPrompt !== "quit") {
  if (userPrompt === "new") {
    let newItem = prompt("add new item:");
    todoList.push(newItem);
    console.log(`${newItem} was added to the list`);
  } else if (userPrompt === "list") {
    console.log(`********************`);
    // for (let item of todoList) {
    //   console.log(`${todoList.indexOf(item)}: ${item}`);
    // }

    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log(`********************`);
  } else if (userPrompt === "delete") {
    let deleteItem = parseInt(prompt("which item do you want to delete?"));
    if (!Number.isNaN(deleteItem)) {
      const deleted = todoList.splice(deleteItem, 1);
      console.log(`${deleted[0]} was deleted from the list`);
      //   console.log(`${todoList[deleteItem]} was deleted`);
    }
  }
  userPrompt = prompt("what would you like to do?");
}
console.log("ok quit the app");
