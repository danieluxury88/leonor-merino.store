// WORKERS
var w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("./js/demo_workers.js");
    }
    w.onmessage = function (event) {
      document.getElementById("count-result").innerHTML = event.data;
    };
  } else {
    document.getElementById("count-result").innerHTML =
      "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/js/service_workers.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// GEOLOCATION

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const x = document.getElementById("user-current-position");
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  console.log("current position", position);
}

function watchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showWatchedPosition(position) {
  const x = document.getElementById("user-watched-position");
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  console.log("watched position", position);
}

// DRAG AND DROP

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Server Sent Events
if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("demo-sse.php");
    source.onmessage = function(event) {
      document.getElementById("sse-result").innerHTML += event.data + "<br>";
    };
  } else {
    document.getElementById("sse-result").innerHTML = "Sorry, your browser does not support server-sent events...";
  }
