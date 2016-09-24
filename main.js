var panel = document.createElement('div');
document.body.appendChild(panel);
content  = '<div id="timerPanel">';
content += '<div id="notification">Type your soldier\'s attack time what you want </div>';
content += '<input type="text" id="hour" placeholder="Arrival Hour"/>';
content += '<input type="text" id="minute" placeholder="Arrival Minute"/>';
content += '<input type="text" id="second" placeholder="Arrival Second"/>';
content += '<input type="text" id="delay" placeholder="Control Delay: Default 10ms"/>';
content += '<div id="startAttack">Plan Attack</div>';
content += '<a href="http://batikangencacat.com.tr" target="_blank">Batıkan Genç ACAT</a>';
content += '</div>';
panel.outerHTML = content;

document.getElementById("startAttack").onclick = function() {
  window.inputHour = document.getElementById("hour").value;
  window.inputMinute = document.getElementById("minute").value;
  window.inputSecond = document.getElementById("second").value;
  window.inputDelay = document.getElementById("delay").value;
  if(window.inputDelay === "") {
    window.inputDelay = "10";
  }
  if(inputHour === "" || inputMinute === "" || inputSecond === "" || inputHour > 23 || inputMinute > 60 || inputSecond > 60){
    document.getElementById("notification").innerHTML = '<font color=red>Check your time settings.</font>';
  }else {
    console.log("Attack timer started.");
    window.interval = setInterval(relativeTimeController, window.inputDelay);
    attackStatusContent  = '<div id="attackStatus">';
    attackStatusContent += '<h2>Attack Started</h2>';
    attackStatusContent += '<p><b>Do not close this tab.</b> Cong.! Attack will start at: <span>' + inputHour + ':' + inputMinute + ':' + inputSecond + '</span> Control Delay: ' + inputDelay + '</p>';
    attackStatusContent += '<a href="http://batikangencacat.com.tr" target="_blank">Batıkan Genç ACAT</a>';
    attackStatusContent += '</div>';
    document.getElementById("timerPanel").innerHTML = attackStatusContent;
  }
};

function relativeTimeController() {
  var time = document.getElementsByClassName("relative_time")[0].innerHTML;
  var substrTime = time.substr(time.length - 8);
  var hour = substrTime.substring(0,2);
  var minute = substrTime.substring(3,5);
  var second = substrTime.substring(6,8);
  console.log(substrTime);
  if (hour == window.inputHour && minute == window.inputMinute && second == window.inputSecond) {
    attack();
  }
}

function attack() {
  clearInterval(window.interval);
  document.getElementById("troop_confirm_go").click();
  console.log("Atak started.");
  console.log("Timer stopped.");
}
