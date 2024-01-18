import Task from "./Task";
import "./tasks.css"
export default function Tasks() {
  let data = [
    {
      name: "Task 1",
      date: "10/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 2",
      date: "11/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
    {
      name: "Task 3",
      date: "12/10/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      status: "Pending"
    },
  ];
  return (
    <div className="tasks">

      <div className="tasks__addTask">
        <form action="">
          <input type="text" />
          <input type="text" />
          <button className="tasks__addTaskButton">Add Task</button>
        </form>
      </div>

      {data.map((item, index) => {
        return (
          <Task item={item} key={index} />
        )
      })
      }
    </div>
  )
}
