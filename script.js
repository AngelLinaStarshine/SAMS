document.addEventListener("DOMContentLoaded", function() {
  
    function hideReception() {
      document.getElementById('reception').style.display = 'none';
    }
    

    function showReception() {
      document.getElementById('reception').style.display = 'block';
    }
    
    document.querySelectorAll('.scenario-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var scenario = btn.getAttribute('data-scenario');
        hideReception();
 
        document.querySelectorAll('.scenario-content').forEach(function(panel) {
          panel.classList.remove('active');
        });
 
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
            showReception();
            break;
        }
      });
    });
  
    document.querySelectorAll('.close-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        btn.parentElement.classList.remove('active');

        setTimeout(function(){
          showReception();
        }, 500);
      });
    });
    
  });
  