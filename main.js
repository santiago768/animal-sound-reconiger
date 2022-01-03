function startlistening(){
    navigator.mediaDevices.getUserMedia({audio:true});
    model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YjCqG9xDl/model.json",modelloded)
}
function modelloded(){
    model.classify(getresults)
}
function getresults(e,results){
    if (e){
        console.error(e)
    }
    else{
        console.log(results)
    }
}