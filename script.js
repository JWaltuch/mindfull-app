if (document.getElementById('index')) {
  window.onload = function() {
    setTimeout(() => {
      window.location = '/forms/bored.html';
    }, 5000);
  };
}

function redirect(event, nextPage) {
  event.preventDefault();
  window.location = `/forms/${nextPage}.html`;
}
