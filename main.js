function startlistening() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YjCqG9xDl/model.json", modelloded)
}

function modelloded() {
    model.classify(getresults)
}

function getresults(e, results) {
    if (e) {
        console.error(e)
    } else {
        console.log(results)
        sound_name = results[0].label
        sound_confidence = Math.floor(results[0].confidence * 100);

        document.getElementById("sound_name").innerHTML = "i can hear " + sound_name;
        document.getElementById("sound_accuracy").innerHTML = "accuracy is " + sound_confidence + "%";

        

        if (sound_name == "donkey") {
            document.getElementById("image").src = "donkey.jpg";
        } else if (sound_name == "barking") {
            document.getElementById("image").src = "https://image.shutterstock.com/image-vector/happy-dog-running-260nw-349353617.jpg";
        }
        else{
            document.getElementById("image").src="https://www.drzimmerman.com/wp-content/uploads/2016/08/Listening-Icon-Image-1400x800-862x493.png";
        }
    }
}