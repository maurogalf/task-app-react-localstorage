import { useState, useEffect } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
    const [taskItems, setTaskItems] = useState(
        JSON.parse(localStorage.getItem("taskItems")) || []
    );
    const [show, setShow] = useState(false);

    useEffect(() => {
        localStorage.setItem("taskItems", JSON.stringify(taskItems));
    }, [taskItems]);

    const createTask = (taskName) => {
        if (taskItems.find((task) => task.name === taskName) === undefined) {
            setTaskItems([...taskItems, { name: taskName, done: false }]);
            localStorage.setItem("taskItems", JSON.stringify(taskItems));
        }
    };

    const toggleTask = (taskName) => {
        setTaskItems(
            taskItems.map((task) =>
                task.name === taskName ? { ...task, done: !task.done } : task
            )
        );
    };

    const limpiarCompletados = () => {
        if (
            window.confirm(
                "¿Estás seguro de que quieres borrar todas las tareas completadas?"
            )
        ) {
            setTaskItems(taskItems.filter((task) => !task.done));
            setShow(false);
        }
    };

    return (
        <main className="bg-dark vh-100 text-white p-3">
            <Container>
                    <TaskCreator createTask={createTask} />
                    <TaskTable
                        taskItems={taskItems}
                        tableTitle={"Tareas incompletas"}
                        doneValueTable={false}
                        toggleTask={toggleTask}
                    />
                    <VisibilityControl
                        limpiarCompletados={limpiarCompletados}
                        show={show}
                        setShow={setShow}
                    />
                    {show && (
                        <TaskTable
                            taskItems={taskItems}
                            tableTitle={"Tareas completadas"}
                            doneValueTable={show}
                            toggleTask={toggleTask}
                        />
                    )}
            </Container>
        </main>
    );
}

export default App;
