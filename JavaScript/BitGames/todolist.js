let todo=[];
let input = prompt("What would you like to do?");
console.log(input);
while(true){
    if(input === 'quit'){
        console.log("OK, YOU QUIT THE APP");
        break;
    } 
    if(input === 'list'){
        console.log("**********");
        for(task of todo){
            console.log(todo.indexOf(task) + ": " + task);
        }
        console.log("**********");
    } 
    else if(input === 'new'){
        let newTodo = prompt("Enter new todo");
        todo.push(newTodo);
        console.log(newTodo + " added to the list");
    } 
    else if(input === 'delete'){
        let index = prompt("Enter index of todo to delete");
        todo.splice(index, 1);
        console.log("Todo removed");
    }
    else{
        console.log("Invalid input");
    }
    input = prompt("What would you like to do?");
}