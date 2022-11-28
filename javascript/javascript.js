function textToSpeech(){
    var speech = new SpeechSynthesisUtterance();
    speech.text = "Have you ever had trouble looking for a barber? how about looking for a haircut that you like? Well our website can assist you in your most hideous times. This website provides customers; barbers/barbershop, filters for your preffered style, and tracks your history. As seen above, you will see 4 different tabs under the navigation bar. If you are reading this then you are probably under the home tab. The navigation bar also has Barbershops, Free Agents, and Support. Barbershops has a list of available barbershops nearby that you can contact for an appoinment. Then there's the Free Agent tab dedicated to the independent barbers. And then we have the Support tab which is for our contact information. Hopefully our website provides you with the upmost assistance.";
    window.speechSynthesis.speak(speech);
}

// from w3schools
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }