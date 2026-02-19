(function () {
    var CORRECT = 'ganga';
    var STORAGE_KEY = 'arti_access_granted';
  
    var overlay = document.getElementById('password-overlay');
    var site = document.getElementById('site-content');
    var input = document.getElementById('password-input');
    var form = document.getElementById('password-form');
    var error = document.getElementById('password-error');
  
    function unlock() {
      if (overlay) overlay.style.display = 'none';
      if (site) site.style.display = 'block';
      document.body.classList.remove('is-locked');
    }
  
    try {
      if (window.localStorage && localStorage.getItem(STORAGE_KEY) === 'true') {
        unlock();
      }
    } catch (e) {}
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!input) return;
        var value = (input.value || '').trim();
        if (value === CORRECT) {
          try {
            if (window.localStorage) {
              localStorage.setItem(STORAGE_KEY, 'true');
            }
          } catch (e) {}
          unlock();
        } else {
          if (error) {
            error.textContent = 'Incorrect password. Please try again.';
          }
        }
      });
    }
  
    if (input) {
      window.setTimeout(function () {
        input.focus();
      }, 0);
    }
  })();
  