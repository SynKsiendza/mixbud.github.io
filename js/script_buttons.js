if (window.Width <= 1000)
{
    StyleSheet.getElementById("search") = { width: "75%" };
}
function Farby()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2' onclick='Scienne()'>Ścienne</button>" +
        "<button class='btn2' onclick='Akrylowe()'>Akrylowe</button>" +
        "<button class='btn2' onclick='Chlorokauczuk()'>Chlorokauczuki</button>" +
        "<button class='btn2' onclick='Grunt()'>Grunty</button>" +
        "<button class='btn2' onclick='Olejne()'>Olejne</button>" +
        "<button class='btn2' onclick='Barwniki()'>Barwniki</button>" +
        "<button class='btn2' onclick='impregnaty()'>Impregnaty i lakiery do drewna</button>";
}
function Wkrety()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>Do drewna</button>" +
        "<button class='btn2'>Do Metalu</button>" +
        "<button class='btn2'>Do płyt OSB</button>" +
        "<button class='btn2'>Do czegośtam</button>";
}
function Sruby()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>duże</button>" +
        "<button class='btn2'>Małe</button>" +
        "<button class='btn2'>Szerokie</button>" +
        "<button class='btn2'>Wąskie</button>";
}
function Sylikon()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>Silikony</button>" +
        "<button class='btn2'>Kleje</button>" +
        "<button class='btn2'>Silikonowe</button>" +
        "<button class='btn2'>Klejące</button>";
}
function Worki()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>Gipsy</button>" +
        "<button class='btn2'>Kleje</button>" +
        "<button class='btn2'>Cementy</button>" +
        "<button class='btn2'>Zaprawy</button>";
}
function Tarcza()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>Do Metalu</button>" +
        "<button class='btn2'>Do drewna</button>" +
        "<button class='btn2'>Diamentowe</button>" +
        "<button class='btn2'>Do wszystkiego</button>";
}
function Profile()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2'>Do betonu</button>" +
        "<button class='btn2'>Do Drewna</button>" +
        "<button class='btn2'>Do Metalu</button>" +
        "<button class='btn2'>Diamentowe</button>";
}
function Scienne()
{
    document.getElementById("maincontent").innerHTML = "" +
    "<button class='btn2' onclick='Scienne_Sniezka()'><img src='img/Sniezka_logo.svg' height='35px' width='60px' > &nbsp; &nbsp; Śnieżka</button>" +
    "<button class='btn2' onclick='Scienne_Magnat()'><img src='img/magnat_logo.png' height='35px' width='70px' > &nbsp; &nbsp; Magnat</button>" +
    "<button class='btn2' onclick='Scienne_Dulux()'><img src='img/Dulux_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Dulux</button>" +
    "<button class='btn2' onclick='Scienne_Beckers()'><img src='img/beckers_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Beckers</button>";
}

function Scienne_Sniezka()
{
    document.getElementById("maincontent").innerHTML = "" +
    "<div class='przedmiot_box'><img src='img/Sniezka_plamoodporna.png' class='przedmiot_box_image' height='250px' width='250px'></vr><div class='przedmiot_box_text'><strong>Śnieżka Plamoodporna</strong> <br><span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span></div><br></div><br>" +
    "<div class='przedmiot_box'><img src='img/Sniezka_barwynatury.png' class='przedmiot_box_image' height='250px' width='250px'></vr><div class='przedmiot_box_text'><strong>Śnieżka Barwy Natury</strong> <br><span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span></div><br></div>" 
    
}
function Scienne_Dulux()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<div class='przedmiot_box'><img src='img/Dulux_easycare.png' class='przedmiot_box_image' height='250px' width='250px'></vr><div class='przedmiot_box_text'><strong>Dulux EasyCare</strong> <br><span class='small_text'> Dostępne opakowania: 2,5L; 5L; 9L(Tylko Biała)<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span></div><br></div><br>"
}
