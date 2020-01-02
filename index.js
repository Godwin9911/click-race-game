document.getElementById("button").addEventListener("click", start);
document.getElementById("button").addEventListener("click", timerStart);


var x = document.getElementById('p1');
x=0;

function start() {
    x++;
    document.getElementById('p1').innerHTML = x;
    console.log(x);
    return x;
}

function timerStart() {
  //remove the eventlistener from the function.
    document.getElementById("button").removeEventListener("click", timerStart);

		//create variable we need
		let totalSeconds = 10;
		let minutes = parseInt(totalSeconds / 60);
		let seconds = parseInt(totalSeconds % 60);
		let timerDiv = document.getElementById("timer");

		//The countdown function
		function countdown(){

			//if total minutes is 9 this will return 09
			minutes = (minutes < 10) ? '0' + minutes : minutes;
			seconds = (seconds < 10) ? '0' + seconds : seconds;

			//we check it till countdown is complete
			if(totalSeconds <= 0){
				timerDiv.innerHTML = "Game Over your score is " + x + "<br><button id='button1'>Try again</button>";
        document.getElementById('button').style.display = "none";
        document.getElementById('p1').style.display = "none";


			}else{
				timerDiv.innerHTML = minutes + ":" + seconds;

				//decrease to get countdown
				totalSeconds = totalSeconds - 1;
				minutes = parseInt(totalSeconds / 60);
				seconds = parseInt(totalSeconds % 60);
				setTimeout(countdown, 1000);
			}

			/*if(totalSeconds <= 39){
				timerDiv.style.color ="orange";
					if(totalSeconds <= 19){
						timerDiv.style.color ="red";
					}
			}*/



		}
		setTimeout(countdown, 1000);
}
