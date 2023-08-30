img="";
estatus="";
objects=[];

function preload()
{
    img=loadImage('autos1.jpg');
}

function setup()
{
    canvas=createCanvas(800 , 800);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: dectectando objetos";
}

function modelLoaded()
{
    console.log("modelo cargado");
    estatus= true ;
    objectDetector.detect(img, gotResult);
}


function draw()
{
    image(img, 0, 0 ,800, 800);

    if(estatus!="")
    {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status: objeto detectado";

            fill("red");
            porcent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + porcent + "%" , objects[i].x , objects[i].y );

            noFill();
            stroke("red")
            rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height);


            
        }
    }

}

function gotResult(error, results)
{
 if(error)
 {
    console.error(error)
 }
 console.log(results);

 objects=results ;
}