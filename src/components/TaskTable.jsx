import { TaskRow } from "./TaskRow";

export const TaskTable = ({ taskItems, toggleTask, doneValueTable, tableTitle }) => {
    const taskTableRow = (doneValue) => {
        return (
            taskItems
            .filter(task => task.done === doneValue)
            .map((taskItem) => (
                <TaskRow
                    taskItem={taskItem}
                    toggleTask={toggleTask}
                    key={taskItem.name}
                />
            ))

        )
    }

    return (
        <table className="table table-striped table-dark table-bordered table-hover">
            <thead>
                <tr className="table-primary">
                    <th>{tableTitle}</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRow(doneValueTable)
                }
            </tbody>
        </table>
    );
};
