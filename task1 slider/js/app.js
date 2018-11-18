var slayt = document.getElementsByClassName("slayt");
var slaytsayisi = slayt.length;
var slideno= 0;
slideshow(slideno);
function evvelki(){
    slaytno--;
    slideshow(slaytno);
}
function sonraki(){
    slaytno++;
    slideshow(slaytno);
}
function slideshow(slaytnumarasi)
{
        slaytno = slaytnumarasi;
        if(slaytnumarasi >= slaytsayisi)
        {
            slaytno=0;
        }
        if(slaytnumarasi< 0)
        {
            slaytno=slaytsayisi -1;
        }
        for (let index = 0; index < slaytsayisi; index++) {
            slayt[index].style.display = "none";
            
        }
        slayt[slaytno].style.display= "block";
        
}