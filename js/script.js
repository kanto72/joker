let modal = document.getElementById('myModal');
let btn = document.getElementById("play");
let span = document.getElementsByClassName("close")[0];
let video = document.getElementById("video")[0];


btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    