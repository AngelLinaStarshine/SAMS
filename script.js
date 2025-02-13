// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Function to hide the reception area
    function hideReception() {
      document.getElementById('reception').style.display = 'none';
    }
    
    // Function to show the reception area
    function showReception() {
      document.getElementById('reception').style.display = 'block';
    }
    
    // Add event listeners to all scenario buttons
    document.querySelectorAll('.scenario-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Get the scenario value from the data attribute
        var scenario = btn.getAttribute('data-scenario');
        // Hide the reception area
        hideReception();
        
        // Remove active class from all scenario panels
        document.querySelectorAll('.scenario-content').forEach(function(panel) {
          panel.classList.remove('active');
        });
        
        // Determine which scenario panel to display using animated fade-in
        switch(scenario) {
          case 'overview':
            document.getElementById('scenarioOverview').classList.add('active');
            break;
          case 'tour':
            document.getElementById('scenarioTour').classList.add('active');
            break;
          case 'support':
            document.getElementById('scenarioSupport').classList.add('active');
            break;
          case 'demo':
            document.getElementById('scenarioDemo').classList.add('active');
            break;
          case 'faq':
            document.getElementById('scenarioFAQ').classList.add('active');
            break;
          default:
            // Fallback: Show reception if scenario is not recognized
            showReception();
            break;
        }
      });
    });
  
    // Add event listeners to all close buttons in the scenario panels
    document.querySelectorAll('.close-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Remove the active class to trigger fade-out
        btn.parentElement.classList.remove('active');
        // After the fade-out transition (500ms), show the reception area again
        setTimeout(function(){
          showReception();
        }, 500);
      });
    });
    
  });
  