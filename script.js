let taskNameInput = document.querySelector("#task-name-input");
      let addTaskButton = document.querySelector("#add-task-btn");
      let startMessage = document.querySelector("#start-message");
      let taskList = document.querySelector(".task-list");
      let undoneBtn = document.querySelector("#undone-task");
      let allTasks = document.querySelector("#all-tasks");
      let tasks = [];
      let img = document.querySelector("img");

      addTaskButton.addEventListener("click", addTaskHandler);

      taskNameInput.addEventListener("keydown", function (e) {
        if (e.code == "Enter") addTaskHandler();
      });

      function addTaskHandler() {
        if (taskNameInput.value) {
          if (!startMessage.hidden) startMessage.hidden = true;

          let newTask = new Task(taskNameInput.value);
          newTask.createIn(taskList);
          tasks.push(newTask);

          taskNameInput.value = "";
        } else {
          alert("введите имя задачи");
        }
      }

      class Task {
        constructor(text) {
          this.text = text;
          this.isDone = false;
          this.div = null;
        }

        createIn(element) {
          this.div = document.createElement("div");
          this.div.classList.add("task");

          // let input = document.createElement("input");
          // input.addEventListener("click", () => this.changeState(this.div));
          // input.type = "checkbox";
          // input.classList.add("input-by-task");

          let checkBox = document.createElement("button");
          checkBox.addEventListener("click", () => this.changeState(this.div)); 
          checkBox.type = "checkbox";
          checkBox.classList.add("input-by-task");

          let p = document.createElement("p");
          p.innerText = this.text;
          let btn = document.createElement("button");
          btn.classList.add("cancel");
          let btnP = document.createElement("p");
          btnP.innerText = "X";

          // this.div.append(input);
          this.div.append(checkBox);
          this.div.append(p);
          this.div.append(btn);
          btn.append(btnP);
          element.append(this.div);
         
          btn.addEventListener("click", function (){ 
          img.classList.remove("bonus");
          img.classList.add("no-bonus");
            
            
            btn.parentElement.remove();
        })
         

        }

        changeState(element) {
          this.isDone = !this.isDone;
          element.classList.toggle("completed");
          img.classList.add("bonus");
          img.classList.remove("no-bonus");


        }
        
      }
      
    
      function showNotDoneTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
            if (task.isDone == false) {
                taskList.append(task.div);
            }
        }
    )
 
}

undoneBtn.addEventListener("click", showNotDoneTasks);
    


function showAllTasks() {
    tasks.forEach(task => {
            taskList.append(task.div);
        }
    )
};
allTasks.addEventListener("click", showAllTasks);




  

