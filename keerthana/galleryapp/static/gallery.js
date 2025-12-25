var img = [
    {image:"1.png", about:"Artificial Intelligence (AI)"},
    {image:"2.png", about:"Human VS Technology"},
    {image:"3.png", about:"Social Media Impact"},
    {image:"4.png", about:"Virtual Reality & Future Tech"},
    {image:"5.png", about:"Technology & Humanity"},
   
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML = img[index].about;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML= img[index].about;
}