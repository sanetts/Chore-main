console.log("Script loaded successfully");

document.addEventListener('DOMContentLoaded', function () {

  function updateChoreStatus(newStatus, choreId) {
   
    console.log(`Chore with ID ${choreId} marked as ${newStatus}`);


    updateUI(choreId, newStatus);
  }

  
  function updateUI(choreId, newStatus) {

    const ongoingChoreRow = document.getElementById(`ongoing-chore-${choreId}`);

    if (ongoingChoreRow) {
 
      const completedChoresTable = document.querySelector('#completed-chores-table tbody');
      const clonedRow = ongoingChoreRow.cloneNode(true);
      completedChoresTable.appendChild(clonedRow);


      ongoingChoreRow.remove();
    }
  }

  function attachEventListeners() {
    const markCompletedButtons = document.querySelectorAll('.mark-completed-button');

    markCompletedButtons.forEach(button => {
      button.addEventListener('click', function () {
        const choreId = button.getAttribute('data-chore-id');
        updateChoreStatus('completed', choreId);
      });
    });
  }


  attachEventListeners();
});
