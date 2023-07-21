
function Farby()
{
    document.getElementById("maincontent").innerHTML = "" +
        "<button class='btn2' onclick='Scienne()'>Ścienne</button>" +
        "<button class='btn2' onclick='Akrylowe()'>Akrylowe</button>" +
        "<button class='btn2' onclick='Olejne()'>Olejne, Nitro itp.</button>" +
        "<button class='btn2' onclick='Podklady()'>Podkłady</button>" +
        "<button class='btn2' onclick='Grunty()'>Grunty</button>" +
        "<button class='btn2' onclick='drewno()'>Impregnaty, lakiery do drewna itp.</button>" +
        "<button class='btn2' onclick='Spraj()'>Spraye</button>";
}
function Scienne()
{
    document.getElementById("maincontent").innerHTML = "" +
    "<button class='btn2' onclick='Scienne_Sniezka()'><img src='img/Sniezka_logo.svg' height='35px' width='60px' > &nbsp; &nbsp; Śnieżka</button>" +
    "<button class='btn2' onclick='Scienne_Bondex()'><img src='img/bondex_logo.png' height='35px' width='70px' > &nbsp; &nbsp; Bondex</button>" +
    "<button class='btn2' onclick='Scienne_Dulux()'><img src='img/Dulux_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Dulux</button>" +
    "<button class='btn2' onclick='Scienne_Dekoral()'><img src='img/Dekoral_logo.png' height='35px' width='60px' > &nbsp; &nbsp; Dekoral</button>" +
    "<button class='btn2' onclick='Scienne_Beckers()'><img src='img/beckers_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Beckers</button>" +
    "<button class='btn2' onclick='Scienne_Tikkurila()'><img src='img/Tikkurila_logo.png' height='35px' width='40px' > &nbsp; &nbsp; Tikkurila</button>";
}

function Scienne_Sniezka()
{
    document.getElementById("maincontent").innerHTML = "" +
    // Plamoodporna
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_plamoodporna.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Plamoodporna</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
//    Barwy natury
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_barwynatury.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Barwy Natury</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Eko
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_eko.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Eko</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 13 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Eko plus
    "<div class='przedmiot_box'>" +
    "<img src='img/Sniezka_eko_plus.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Śnieżka Eko Plus</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>";
    
}
function Scienne_Dulux()
{
    document.getElementById("maincontent").innerHTML = "" +
    // Easycare
    "<div class='przedmiot_box'>" +
    "<img src='img/Dulux_easycare.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dulux EasyCare</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L - dla farb kolorowych oraz: 9L - dla farby białej<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Absolute White
    "<div class='przedmiot_box'>" +
    "<img src='img/Dulux_absolute_white.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dulux Absolute White</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L - dla farb kolorowych oraz: 9L - dla farby białej<br> Wydajność: do 13 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>";
}
function Scienne_Bondex()
{
    document.getElementById("maincontent").innerHTML = "" +
    // smarthome
    "<div class='przedmiot_box'>" +
    "<img src='img/bondex_smarthome.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Bondex Smarthome</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>";
}
function Scienne_Dekoral()
{
    document.getElementById("maincontent").innerHTML = "" +
    // Clean&Color
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_cc.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Clean&Color</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Kuchnia łazienka
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_kl.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Łazienka & Kuchnia</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Kuchnia łazienka Biała
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_klb.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Łazienka & Kuchnia Śnieżnobiała</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 12 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // AkrylitW
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_akrylitw.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Akrylit W</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    // Polinak Plus
    "<div class='przedmiot_box'>" +
    "<img src='img/dekoral_pp.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Dekoral Polinak Plus</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 1L; 3L; 5L; 10L<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>";
}
function Scienne_Beckers()
{
    document.getElementById("maincontent").innerHTML = "" +
    // Designer
    "<div class='przedmiot_box'>" +
    "<img src='img/beckers_designer.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Beckers Designer</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L<br> Wydajność: do 16 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    "<button class='info_btn' onclick='moreinfo_reveal_des()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_des' class='moreinfo'></div><br><hr>";
    // Designer White
    "<div class='przedmiot_box'>" +
    "<img src='img/beckers_designerwhite.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Beckers Designer White</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 2,5L; 5L; 10L<br> Wydajność: do 14 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    "<button class='info_btn' onclick='moreinfo_reveal_deswhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_deswhite' class='moreinfo'></div><br><hr>";
}
function Scienne_Tikkurila()
{
    
    document.getElementById("maincontent").innerHTML = "" +
    // Antyreflex
    "<div class='przedmiot_box'>" +
    "<img src='img/tikkurila_antireflex.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Tikkurila Anti-reflex</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 3L; 10L<br> Wydajność: do 15 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    "<button id='rbtnantyreflex' class='info_btn' onclick='moreinfo_reveal_antyreflex()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_antireflex' class='moreinfo'></div><br><hr>" +
    // SuperWhite
    "<div class='przedmiot_box'>" +
    "<img src='img/tikkurila_superwhite.png' class='przedmiot_box_image' height='250px' width='250px'>" +
    "<div class='przedmiot_box_text'>" +
    "<strong>Tikkurila Superwhite</strong> <br>" +
    "<span class='small_text'> Dostępne opakowania: 10L<br> Wydajność: do 12 m<sup>2</sup>/l przy jednokrotnym malowaniu</span>" +
    "</div><br>" +
    "</div><br>" +
    "<button id='rbtnsuperwhite' class='info_btn' onclick='moreinfo_reveal_superwhite()'>Więcej Informacji</button><br>" +
    "<div id='moreinfo_antyreflex' class='moreinfo'></div><br><hr>";
}