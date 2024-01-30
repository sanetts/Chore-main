document.addEventListener('DOMContentLoaded', function () {
    const choreAssignmentForm = document.getElementById('chore_assignment_form');

    choreAssignmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        assignChore();
    });

    function assignChore() {
        // Get the values from the form
        const assignPerson = document.getElementById('assign_person').value;
        const assignChore = document.getElementById('assign_chore').value;
        const dueDate = document.getElementById('due_date').value;

        // Create a new row for the ongoing tasks
        const ongoingTasksTable = document.querySelector('#ongoing-tasks-table tbody');

        if (!ongoingTasksTable) {
            console.error("Ongoing tasks table not found");
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${assignChore}</td>
            <td>${assignPerson}</td>
            <td>${getCurrentDate()}</td>
            <td>${dueDate}</td>
            <td>Pending</td>
            <td><button class="mark-completed-button" data-chore-id="${generateChoreId()}">Mark as Completed</button></td>
        `;

        // Append the new row to the ongoing tasks table
        ongoingTasksTable.appendChild(newRow);

        // Clear the form after submission
        choreAssignmentForm.reset();
    }

    // Helper function to get the current date in the format YYYY-MM-DD
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Helper function to generate a unique chore ID
    function generateChoreId() {
        return 'choreId' + Math.random().toString(36).substr(2, 9);
    }
});
