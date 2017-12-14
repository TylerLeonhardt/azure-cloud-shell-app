// injection technique borrowed from http://stackoverflow.com/questions/840240/injecting-jquery-into-a-page-fails-when-using-google-ajax-libraries-api
window.onload = function () {
  let script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
  script.onload = script.onreadystatechange = function () {
      $(document).ready(() => {
        $('#lst-ib').val('Hello, World!');
      });
    };
  document.body.appendChild(script);
};
