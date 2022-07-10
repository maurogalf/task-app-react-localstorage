export const TaskRow = ({ taskItem, toggleTask }) => {
    return (
        <tr key={taskItem.name}>
            <td className="d-flex justify-content-between p-3">
                {taskItem.name}
                <input
                    type="checkbox"
                    checked={taskItem.done}
                    onChange={()=> toggleTask(taskItem.name)}
                />
            </td>
        </tr>
    );
};
