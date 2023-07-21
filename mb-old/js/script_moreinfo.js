function contact()
{
    history.pushState(null, null, document.URL);

    // Add an event listener to the window's 'popstate' event
    window.addEventListener('popstate', function(event) {
        // Redirect to index.html
        window.location.href = 'index.html';
    });
    document.getElementById("maincontent").innerHTML = "" +
        "<span style='color: #ff1000'><b>GODZINY OTWARCIA:</b></span><br>" +
        "Od Poniedziałku do Piątku: 7<sup>00</sup> do 18<sup>00</sup><br>" +
        "W Sobotę: 7<sup>00</sup> do 14<sup>00</sup><br>" +
        "W Niedzielę: Nieczynne<br><br><br>" +
        "<span style='color: #ff1000'><b>Jak się z nami skontaktować?</b></span><br>" +
        "<b>E-MAIL:</b> mixbud@o2.pl<br>" +
        "<b>Numer Telefonu:</b> 509 696 046<br>"
}


function moreinfo_reveal_antyreflex(){
    document.getElementById("remove_btn_antyreflex").remove();
    document.getElementById('moreinfo_antireflex').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_antireflex").innerHTML = ""+
        "<p>Tikkurila Anti-Reflex to biała, antyrefleksyjna, wodorozcieńczalna, wysokiej jakości, głęboko matowa farba lateksowa do malowania sufitów wewnątrz pomieszczeń. Dzięki unikatowej kompozycji związków tytanu oraz wypełniaczy funkcyjnych farba niweluje refleksy świetlne wywołujące wrażenie nierówności podłoża - MATT X-TREME TECHNOLOGY. Farba przeznaczona do dekoracyjno-ochronnego malowania sufitów wewnątrz pomieszczeń mieszkalnych, biurowych i użyteczności publicznej, w tym w obiektach szkolno-wychowawczych i służby zdrowia (szkoły, przedszkola, żłobki, szpitale, przychodnie, gabinety, sale operacyjne, pomieszczenia zabiegowe, laboratoria, stacje dializ, itd.) oraz zakładach usługowych i produkcyjnych, także branży spożywczej z wykluczeniem bezpośredniego kontaktu z żywnością*. Wydziela neutralny zapach podczas nanoszenia i schnięcia. Tworzy jednolitą głęboko matową powłokę odporną na delikatne przemywanie.</p>"
    ;
}

function moreinfo_reveal_plamoodporna(){
    document.getElementById("remove_btn_plamoodporna").remove();
    document.getElementById('moreinfo_plamoodporna').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_plamoodporna").innerHTML = ""+
        "<p>Śnieżka Plamoodporna to matowa lateksowa farba do wnętrz przeznaczona do malowania ścian wewnętrznych i sufitów. Jest odporna na plamy, zmywanie i szorowanie zachowując przy tym idealny wygląd i głęboko matowy kolor ścian. Farba nie chlapie podczas malowania, jest łatwa w aplikacji i doskonale kryje.</p>"
    ;
}
function moreinfo_reveal_bn(){
    document.getElementById("remove_btn_bn").remove();
    document.getElementById('moreinfo_bn').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_bn").innerHTML = ""+
        "<p>Wysokiej jakości emulsyjna farba lateksowa charakteryzująca się dużą siłą krycia, bardzo wysoką wydajnością i trwałością kolorów powłoki malarskiej. Daje matowe i w pełni pozwalające „oddychać ścianom” powłoki malarskie odporne na szorowanie. Przeznaczona jest do ochronno-dekoracyjnego malowania tynków wapiennych i cementowo-wapiennych, podłoży cementowych, betonowych, gipsowych, drewnianych i drewnopochodnych, cegły, kamienia i płyt gipsowo-kartonowych użytkowanych wewnątrz pomieszczeń.</p>"
    ;
}
function moreinfo_reveal_eko(){
    document.getElementById("remove_btn_eko").remove();
    document.getElementById('moreinfo_eko').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_eko").innerHTML = ""+
        "<p>Farba przeznaczona jest do dekoracyjnego malowania ścian i sufitów z zapraw cementowych, cementowo-wapiennych, wapiennych, gipsowych, płyt gipsowo-kartonowych, drewnianych i z materiałów drewnopochodnych wewnątrz pomieszczeń. Daje matowe, śnieżnobiałe i w pełni pozwalające „oddychać ścianom” powłoki.</p>"
    ;
}
function moreinfo_reveal_ekoPlus(){
    document.getElementById("remove_btn_ekoPlus").remove();
    document.getElementById('moreinfo_ekoPlus').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_ekoPlus").innerHTML = ""+
        "<p>Farba przeznaczona jest do dekoracyjnego malowania ścian i sufitów wewnątrz pomieszczeń: z zapraw cementowych, cementowo-wapiennych, wapiennych, gipsowych, płyt gipsowo-kartonowych, drewnianych, drewnopochodnych oraz tapet, również tych z włókna szklanego.</p>"
    ;
}
function moreinfo_reveal_easycare(){
    document.getElementById("remove_btn_easycare").remove();
    document.getElementById('moreinfo_easycare').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_easycare").innerHTML = ""+
        "<p>Dulux EasyCare to pierwsza na rynku plamoodporna farba wewnętrzna do ścian i sufitów o rewolucyjnych właściwościach hydrofobowych. Dzięki specjalnej powłoce farba odpycha wodę oraz wszelkie płynne zabrudzenia nie pozwalając im przeniknąć w głąb powierzchni. Tworzy matowe powłoki o najwyższej odporności na plamy, a ich usuwanie jest dziecinnie łatwe.</p>"
    ;
}
function moreinfo_reveal_absoluteWhite(){
    document.getElementById("remove_btn_absoluteWhite").remove();
    document.getElementById('moreinfo_absoluteWhite').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_absoluteWhite").innerHTML = ""+
        "<p>Dulux Absolute White to wysokiej jakości biała farba emulsyjna przeznaczona do malowania ścian i sufitów. Tworzy trwałe powłoki o absolutnie białym odcieniu bieli (100/100 w skali bieli) oraz głęboko matowym wykończeniu.</p>"
    ;
}
function moreinfo_reveal_smarthome(){
    document.getElementById("remove_btn_smarthome").remove();
    document.getElementById('moreinfo_smarthome').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_smarthome").innerHTML = ""+
        "<p>SMART HOME to najwyższej jakości matowa, plamoodporna farba ceramiczna do wnętrz z GWARANCJĄ 100% JAKOŚCI. Dzięki ceramicznym wypełniaczom o bardzo małej wielkości, po wyschnięciu farby tworzy się matowa, niezwykle twarda powłoka, odporna na szorowanie także przy użyciu detergentów.Zawarte w farbie cząsteczki hydrofobowe minimalizują głębokie wnikanie płynnych zanieczyszczeń nawet z wina, tłuszczu, czy kawy.</p>"
    ;
}
function moreinfo_reveal_cc(){
    document.getElementById("remove_btn_cc").remove();
    document.getElementById('moreinfo_cc').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_cc").innerHTML = ""+
        "<p>Satynowa farba lateksowa przeznaczona do dekoracyjnego malowania ścian wewnątrz pomieszczeń wykonanych z tynków cementowych, cementowo-wapiennych, powierzchni betonowych, tynków gipsowych, płyt gipsowo-kartonowych, powierzchni pomalowanych farbami emulsyjnymi oraz tapet (w tym tapet z włókna szklanego i na podkładzie flizelinowym). Pozostawia gładką, satynową powłokę, odporną na zabrudzenia i typowe plamy, np. ketchup, majonez, kreda, musztarda, cola, olej, czekolada, kawa itp. Ze względu na zastosowanie nowoczesnych polimerów w połączeniu z innymi składnikami aktywnymi farba posiada wielowymiarowe parametry ochronne takie jak elastyczność, trwałość i odporność. Szczególnie polecana jest do malowania pomieszczeń narażonych na zabrudzenia np. ciągi komunikacyjne, korytarze, pomieszczenia prywatne i biurowe, salony i jadalnie oraz pokoje dziecięce. Zastosowanie wysokogatunkowej dyspersji zapewnia prawidłową mikrowentylację powierzchni.</p>"
    ;
}
function moreinfo_reveal_knl(){
    document.getElementById("remove_btn_knl").remove();
    document.getElementById('moreinfo_knl').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_knl").innerHTML = ""+
        "<p>Farba lateksowa Łazienka & Kuchnia przeznaczona jest do malowania ścian i sufitów wewnątrz pomieszczeń szczególnie narażonych na rozwój grzybów pleśniowych, działanie wilgoci czy plamy. Polecana jest do łazienki, kuchni, pralni czy jadalni. Powłoka farby jest długotrwale zabezpieczona przed działaniem grzybów i jest odporna na zmywanie i szorowanie. Pozostawia satynowy efekt wykończenia. Zastosowanie wysokogatunkowej dyspersji umożliwia prawidłową mikrowentylację powierzchni. Na powierzchniach pomalowanych farbą Łazienka & Kuchnia uzyskasz niezwykle dekoracyjny efekt srebrnego lub złotego pyłu stosując Lakier Transparentny Dekoral z dodatkiem Brokatu Diamentowa Kolekcja.</p>"
    ;
}
function moreinfo_reveal_knlWhite(){
    document.getElementById("remove_btn_knlWhite").remove();
    document.getElementById('moreinfo_knlWhite').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_knlWhite").innerHTML = ""+
        "<p>Matowa lateksowa śnieżnobiała farba emulsyjna ŁAZIENKA & KUCHNIA przeznaczona jest do malowania ścian i sufitów wewnątrz pomieszczeń, takich jak: łazienki, kuchnie, piwnice, pływalnie, browary, piekarnie, pralnie, itp. szczególnie narażonych na rozwój grzybów pleśniowych oraz na działanie wilgoci. Zastosowanie wysokogatunkowej dyspersji polimerowej wpływa na podwyższoną trwałość mechaniczną powłoki, dzięki czemu jest ona elastyczna, mocna, trwała, odporna na działanie wody a odpowiedni dobór wypełniaczy i środków pomocniczych umożliwia prawidłowe oddychanie ścian. Powłoka jest długotrwale zabezpieczona przed działaniem grzybów.</p>"
    ;
}
function moreinfo_reveal_akrylitw(){
    document.getElementById("remove_btn_akrylitw").remove();
    document.getElementById('moreinfo_akrylitw').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_akrylitw").innerHTML = ""+
        "<p>Odporna na szorowanie śnieżnobiała farba lateksowa (Akrylit W) przeznaczona jest do dekoracyjnego malowania ścian i sufitów wewnątrz pomieszczeń. Optymalne dobranie właściwości fizykochemicznych i optycznych pigmentu gwarantuje, że powierzchnie pomalowane farbą charakteryzuje przyjemny dla oka śnieżnobiały, matowy efekt wykończenia. Zapewnia jednolitą powłokę, optycznie maskuje niedoskonałości podłoża. Zastosowanie wysokogatunkowej dyspersji umożliwia prawidłową mikrowentylację powierzchni. Produkt przeznaczony jest także do renowacyjnego malowania wnętrz.</p>"
    ;
}
function moreinfo_reveal_polinakPlus(){
    document.getElementById("remove_btn_polinakPlus").remove();
    document.getElementById('moreinfo_polinakPlus').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_polinakPlus").innerHTML = ""+
        "<p>ANTYREFLEKSYJNA farba akrylowa przeznaczona jest do dekoracyjnego malowania ścian i sufitów wewnątrz pomieszczeń. Szczególnie polecana do malowania sufitów - optycznie maskuje niedoskonałości podłoża, jest wygodna w aplikacji (nie chlapie). Kombinacja aktywnych substancji wybielających i rozjaśniających zapewnia nieskazitelną, trwałą biel. Pozostawia matowy efekt wykończenia. Zastosowanie wysokogatunkowej dyspersji zapewnia prawidłową mikrowentylację powierzchni.</p>"
    ;
}
function moreinfo_reveal_des(){
    document.getElementById("remove_btn_des").remove();
    document.getElementById('moreinfo_des').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_des").innerHTML = "" +
        "<p>Wysokiej jakości, wodorozcieńczalna farba lateksowa polecana do malowania ścian i sufitów. Powierzchnia pokryta farbą zyskuje piękne matowe wykończenie. Produkt rekomendowany przez Polskie Towarzystwo Alergologiczne.</p>"
    ;
}
function moreinfo_reveal_desWhite(){
    document.getElementById("remove_btn_desWhite").remove();
    document.getElementById('moreinfo_desWhite').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_desWhite").innerHTML = ""+
        "<p>Wysokiej jakości, wodorozcieńczalna, biała farba lateksowa polecana do malowania ścian i sufitów. Pokryta nią powierzchnia zyskuje piękne, głęboko matowe wykończenie. Produkt rekomendowany przez Polskie Towarzystwo Alergologiczne. Dodatkowo spełnia rygorystyczne europejskie normy dotyczące emisji Lotnych Związków Organicznych.</p>"
    ;
}
function moreinfo_reveal_superWhite(){
    document.getElementById("remove_btn_superWhite").remove();
    document.getElementById('moreinfo_superWhite').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_superWhite").innerHTML = ""+
        "<p>Biała, wysokiej jakości akrylowa farba lateksowa, charakteryzująca się bardzo dobrą siłą krycia. Przeznaczona do dekoracyjno-ochronnego malowania ścian i sufitów wewnątrz pomieszczeń mieszkalnych, biurowych, użyteczności publicznej i służby zdrowia (szpitale – z wyłączeniem ścian wokół umywalek, zlewozmywaków i pomieszczeń wymagających dezynfekcji lub utrzymania aseptyki ścian, szkoły i przedszkola), oraz w zakładach branży spożywczej z wykluczeniem bezpośredniego kontaktu z żywnością. Nadaje malowanej powierzchni eleganckie, głęboko matowe wykończenie.</p>"
    ;
}
function moreinfo_reveal_DnP(){
    document.getElementById("remove_btn_DnP").remove();
    document.getElementById('moreinfo_DnP').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_DnP").innerHTML = ""+
        "<p>Szybkoschnąca, emalia akrylowa o łagodnym zapachu, tworzona powłoki o satynowym połysku. Przeznaczona do dekoracyjno – ochronnego malowania wewnętrznych oraz zewnętrznych powierzchni drewnianych, drewnopochodnych, zabezpieczonych antykorozyjnie elementów metalowych, tynków wewnętrznych (lamperii). Może być również stosowana w pomieszczeniach branży spożywczej z wykluczeniem bezpośredniego kontaktu z żywnością oraz do renowacji starych wymalowań pokrytych farbami alkidowymi lub chemoutwardzalnymi.</p>"
    ;
}
function moreinfo_reveal_dd(){
    document.getElementById("remove_btn_dd").remove();
    document.getElementById('moreinfo_dd').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_dd").innerHTML = ""+
        "<p>Emalia szybkoschnąca „Do Dzieła” to nowoczesna, wodorozcieńczalna emalia akrylowa ogólnego stosowania. Przeznaczona jest do dekoracyjnego malowania przedmiotów z drewna, stalowych i żeliwnych uprzednio zagruntowanych podkładami antykorozyjnymi, eksploatowanych wewnątrz i na zewnątrz pomieszczeń, a także tynków wewnętrznych (lamperii) i kaloryferów. Specjalna formuła produktu zapewnia wysoką przyczepność oraz niezwykłą odporność powłoki. Jednocześnie nakładanie wyrobu jest łatwe i przyjemne oraz szybkie – pomalowane powierzchnie są gotowe w 1 dzień. Dzięki ekologicznym i precyzyjnie dobranym nowoczesnym składnikom emalię tę można stosować nawet do malowania zabawek dziecięcych.</p>"
    ;
}
function moreinfo_reveal_sm(){
    document.getElementById("remove_btn_sm").remove();
    document.getElementById('moreinfo_sm').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_sm").innerHTML = ""+
        "<p>SUPERMAL® Emalia olejno-ftalowa stosowana jest do dekoracyjno-ochronnego malowania drewna, materiałów drewnopochodnych, tynków oraz elementów stalowych i żeliwnych użytkowanych wewnątrz i na zewnątrz pomieszczeń, takich jak: okna, drzwi, meble, ogrodzenia, lamperie itp. Polecana do stosowania w pomieszczeniach mieszkalnych, przeznaczonych na stały pobyt chorych w budynkach służby zdrowia oraz przeznaczonych na stały pobyt dzieci i młodzieży w budynkach oświaty, a także w pomieszczeniach przeznaczonych do przechowywania produktów żywnościowych (bez bezpośredniego kontaktu z żywnością).</p>"
    ;
}
function moreinfo_reveal_emakol(){
    document.getElementById("remove_btn_emakol").remove();
    document.getElementById('moreinfo_emakol').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_emakol").innerHTML = ""+
        "<p>Silnie kryjąca emalia olejno-alkidowa ogólnego stosowania przeznaczona jest do malowania przedmiotów z drewna, materiałów drewnopochodnych oraz elementów stalowych i żeliwnych (po wcześniejszym zagruntowaniu podkładem antykorozyjnym) eksploatowanych wewnątrz i na zewnątrz pomieszczeń (takich jak: okna, drzwi, meble, lamperie, ogrodzenia itp.). Polecana jest do stosowania w budynkach mieszkalnych oraz użyteczności publicznej, w tym obiektach służby zdrowia, oświatowo-wychowawczych oraz branży spożywczej (bez bezpośredniego kontaktu z żywnością).</p>"
    ;
}
function moreinfo_reveal_hm(){
    document.getElementById("remove_btn_hm").remove();
    document.getElementById('moreinfo_hm').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_hm").innerHTML = ""+
        "<p>Hammerite, to nowoczesna, jednoskładnikowa farba, schnąca na powietrzu, przeznaczona do antykorozyjnego i dekoracyjnego malowania metali żelaznych (stal, żeliwo), zarówno tych pokrytych rdzą, jak i czystych. Może być również stosowana do zabezpieczenia metali nieżelaznych po odpowiednim zagruntowaniu.</p>"
    ;
}
function moreinfo_reveal_chlorokauczuk(){
    document.getElementById("remove_btn_chlorokauczuk").remove();
    document.getElementById('moreinfo_chlorokauczuk').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_chlorokauczuk").innerHTML = ""+
        "<p>Emalia Nobiles Chlorokauczuk przeznaczona jest do ochronno-dekoracyjnego malowania powierzchni: stalowych, żeliwnych i betonowych na zewnątrz. Wysoce odporna na działanie czynników atmosferycznych. W zestawie z podkładem antykorozyjnym Nobiles Nobikor zapewnia trwałą ochronę antykorozyjną metalu.</p>"
    ;
}
function moreinfo_reveal_nitro(){
    document.getElementById("remove_btn_nitro").remove();
    document.getElementById('moreinfo_nitro').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_nitro").innerHTML = ""+
        "<p>SUPERMAL® Emalia nitro przeznaczona jest do profesjonalnego malowania galanterii wykonanej z drewna, materiałów drewnopochodnych i metalu. Może być również używana w instalacjach do przemysłowego malowania elementów drewnianych, drewnopochodnych oraz metalowych. Wymalowanie nie jest odporne na działanie zmiennych warunków atmosferycznych.</p>"
    ;
}
function moreinfo_reveal_us(){
    document.getElementById("remove_btn_us").remove();
    document.getElementById('moreinfo_us').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_us").innerHTML = ""+
        "<p>Podkładowa farba antykorozyjna Urekor S jest zawiesiną pigmentów i wypełniaczy w roztworze żywicy ftalowej w mieszaninie rozpuszczalników organicznych z dodatkiem środków uszlachetniających i pomocniczych. Daje szybkoschnące, matowe, elastyczne powłoki doskonale przyczepne do podłoża, o stosownej do przeznaczenia twardości. Zaleca się stosować go jako podkład pod następujące farby i emalie nawierzchniowe: ftalowe, ftalowe modyfikowane i  nitrocelulozowe.</p>"
    ;
}
function moreinfo_reveal_antykorozja(){
    document.getElementById("remove_btn_antykorozja").remove();
    document.getElementById('moreinfo_antykorozja').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_antykorozja").innerHTML = ""+
        "<p>Podkład antykorozyjny przeznaczony jest do malowania konstrukcji stalowych, powierzchni stalowych, żeliwnych oraz elementów miedzianych i aluminiowych jako podkład pod wyroby nawierzchniowe (emalie ftalowe, emalie ftalowe modyfikowane, emalie chlorokauczukowe), wewnątrz i na zewnątrz pomieszczeń. Może być stosowany do czasowej ochrony przed korozją na czas transportu i składowania. Powłoka podkładu charakteryzuje się matowym wykończeniem oraz posiada dobre właściwości antykorozyjne i odporność mechaniczną. W zestawie z Chlorokauczukiem marki Dekoral, Podkład stanowi doskonałe zabezpieczenie metalu przed korozją (klasa C2 H zgodnie z PN-EN ISO 12944).</p>"
    ;
}
function moreinfo_reveal_FeidalGrunt(){
    document.getElementById("remove_btn_FeidalGrunt").remove();
    document.getElementById('moreinfo_FeidalGrunt').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_FeidalGrunt").innerHTML = ""+
        "<p>FEIDAL PRIMER GF to preparat gruntujący wyrównujący i obniżający chłonność podłoży. Preparat zwiększa przyczepność powłok malarskich i wydłuża czas schnięcia farb umożliwiając uzyskanie jednolitej powierzchni bez smug. Poprawia właściwości aplikacyjne. Produkt zwiększa ochronę ścian przed rozwojem glonów i grzybów. Preparat o neutralnym zapachu.</p>"
    ;
}
function moreinfo_reveal_SniezkaGrunt(){
    document.getElementById("remove_btn_SniezkaGrunt").remove();
    document.getElementById('moreinfo_SniezkaGrunt').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"
    
    document.getElementById("moreinfo_SniezkaGrunt").innerHTML = ""+
        "<p>Śnieżka Grunt dzięki specjalnym dodatkom nakłada się grubą warstwą i niweluje różnice w fakturze i barwie podłoża. Wnika w podłoże poprawiając przyczepność warstwy farby nawierzchniowej oraz zmniejsza jej zużycie. Stosowanie Śnieżki Grunt znacznie obniża koszt malowania gdyż do uzyskania oczekiwanego efektu zwykle wystarcza jedna warstwa farby podkładowej i jedna nawierzchniowej. Szczególnie polecana jest do pierwszego malowania płyt gipsowo-kartonowych i podłoży o niejednorodnej fakturze. Doskonale kryje zaprawy cementowe, cementowo-wapienne, drewno i materiały drewnopochodne w pomieszczeniach mieszkalnych, użyteczności publicznej i przemysłowych. Przeznaczona jest do wymalowań wewnątrz pomieszczeń.</p>"
    ;
}
function moreinfo_reveal_decocolor(){
    document.getElementById("remove_btn_decocolor").remove();
    document.getElementById('moreinfo_decocolor').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_decocolor").innerHTML = ""+
        "<p>Uniwersalny lakier syntetyczny na bazie rozpuszczalnika, do malowania powierzchni z metalu, drewna, ceramiki, szkła, wikliny, kartonu, tkanin, sztucznych kwiatów oraz niektórych tworzyw sztucznych i plastików. Szerokie zastosowanie zarówno w pracach hobbystycznych, jak i profesjonalnych w domu, ogrodzie, motoryzacji i przemyśle. Szczególnie praktyczny do prac artystycznych i dekoracyjnych.</p>"
    ;
}
function moreinfo_reveal_geodezyjny(){
    document.getElementById("remove_btn_geodezyjny").remove();
    document.getElementById('moreinfo_geodezyjny').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_geodezyjny").innerHTML = ""+
        "<p>Profesjonalny znacznik dla geodezji, budownictwa i leśnictwa. Idealny do prac na powierzchniach: asfalt, drewno, metal, beton, szkło, kamień. Idealny do prac bezpośrednio na grunt w trudnych warunkach atmosferycznych. Zastosowanie: w budownictwie lądowym i wodnym, przy budowie dróg i autostrad, linii energetycznych, gazociągów i wodociągów, przy pracach konstrukcyjnych, geodezyjnych, odkrywkowych, archeologicznych, magazynowych, do znakowania miejsc niebezpiecznych, do prac związanych z architekturą terenów zielonych, do prac w leśnictwie i ścince drewna.</p>"
    ;
}
function moreinfo_reveal_uniflott(){
    document.getElementById("remove_btn_uniflott").remove();
    document.getElementById('moreinfo_uniflott').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_uniflott").innerHTML = ""+
        "<p>Knauf Uniflott to masa szpachlowa, którą doceni każdy, kto wykonuje, lub zamierza wykonać jakąkolwiek zabudowę z płyt gipsowo-kartonowych: sufit podwieszany, zabudowę poddasza, ściankę działową itp. Masa przeznaczona jest do wykonania połączeń płyt g-k. Umożliwia spoinowanie bez konieczności użycia taśmy. Po rozrobieniu z wodą posiada konsystencję gęstej śmietany, co ułatwia szpachlowanie. Niewielki skurcz podczas wysychania oraz szybki przyrost wytrzymałości zapewniają uzyskanie trwałych połączeń bez rys, niewidocznych po zaszpachlowaniu i pomalowaniu całych powierzchni płyt.</p>"
    ;
}
function moreinfo_reveal_mp75l(){
    document.getElementById("remove_btn_mp75l").remove();
    document.getElementById('moreinfo_mp75l').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_mp75l").innerHTML = ""+
        "<p>Tynk maszynowy Knauf MP to sucha zaprawa gipsowa z dodatkiem kruszyw lekkich. Nadaje się do wykonywania jednowarstwowego tynku gipsowego. Produkt ten jest lekki w obróbce. Dzięki niemu możesz uzyskać gładkie powierzchnie ścian lub sufitów. Materiał nadaje się do stosowania na wszelkiego rodzaju mineralne podłoża wewnątrz budynków.</p>"
    ;
}
function moreinfo_reveal_murarska_atlas(){
    document.getElementById("remove_btn_murarska_atlas").remove();
    document.getElementById('moreinfo_murarska_atlas').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_murarska_atlas").innerHTML = ""+
        "<p>Zaprawa murarska Atlas przeznaczona jest do murowania cegieł, pustaków i innych materiałów ceramicznych, wapienno-piaskowych czy betonowych. Materiał jest mieszanką wysokiej klasy spoiwa cementowego, wypełniaczy kwarcowych i dodatków uszlachetniających w postaci suchej, co ułatwia przechowywanie, transportowanie i odpowiednie przygotowanie masy. Zaprawa murarska skutecznie wiąże elementy i dobrze rozprowadza się na powierzchni.</p>"
    ;
}
function moreinfo_reveal_tynkarska_atlas(){
    document.getElementById("remove_btn_tynkarska_atlas").remove();
    document.getElementById('moreinfo_tynkarska_atlas').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_tynkarska_atlas").innerHTML = ""+
        "<p>Prezentowana zaprawa tynkarska Atlas to wysokogatunkowa mieszanka spoiwa cementowego, wypełniaczy kwarcowych oraz dodatków uszlachetniających w postaci suchego proszku. Przed nałożeniem produktu na ścianę należy go przygotować zgodnie z załączoną czytelną instrukcją poprzez wymieszanie z wodą. Zaprawa jest łatwa w użyciu i dobrze się nakłada na różne powierzchnie z materiałów ceramicznych i silikatowych, jak cegły, pustaki czy płyty wiórowo-cementowe.</p>"
    ;
}
function moreinfo_reveal_cementowa_dublet(){
    document.getElementById("remove_btn_cementowa_dublet").remove();
    document.getElementById('moreinfo_cementowa_dublet').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_cementowa_dublet").innerHTML = ""+
        "<p>WYLEWKA BETONOWA C16 jest fabrycznie przygotowaną suchą mieszanką spoiwa mineralnego, wypełniaczy kwarcowych oraz dodatków uszlachetniających. Po zarobieniu wodą tworzy masę o dobrych właściwościach aplikacyjnych. Po stwardnieniu wodo- i mrozoodporna.</p>"
    ;
}
function moreinfo_reveal_p9(){
    document.getElementById("remove_btn_p9").remove();
    document.getElementById('moreinfo_p9').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_p9").innerHTML = ""+
        "<p>Zaprawa klejąca Adesilex P9 firmy MAPEI powstała z mieszanki suchego cementu, żywic syntetycznych oraz specjalnie dobranych kruszyw. Jest łatwa w urabianiu oraz tworzy bardzo mocne połączenie płytki z podłożem. Jej schnięcie odbywa się w sposób bezskurczowy. Dzięki właściwościom tiksotropowym możliwe jest klejenie nią płytek od góry ściany bez ich osuwania się.</p>"
    ;
}
function moreinfo_reveal_mapeKlej(){
    document.getElementById("remove_btn_mapeKlej").remove();
    document.getElementById('moreinfo_mapeKlej').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_mapeKlej").innerHTML = ""+
        "<p>Cementowa zaprawa klejąca, normalnie wiążąca, typu i klasy C1 przeznaczona do klejenia płytek ceramicznych na zewnątrz i wewnątrz budynku, na posadzkach, ścianach i sufitach, pod warunkiem, że podłoże jest stabilne, nośne i chłonne.</p>"
    ;
}
function moreinfo_reveal_geoFlex(){
    document.getElementById("remove_btn_geoFlex").remove();
    document.getElementById('moreinfo_geoFlex').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_geoFlex").innerHTML = ""+
        "<p>Klej żelowy to preparat, za pomocą którego zamontujesz płytki ceramiczne na powierzchni podłóg oraz ścian. Produkt może być z powodzeniem stosowany zarówno wewnątrz, jak i na zewnątrz budynków oraz w miejscach, gdzie zastosowano ogrzewanie podłogowe, ponieważ preparat sprawdzi się znakomicie również na wymagających podłożach.</p>"
    ;
}
function moreinfo_reveal_plusKDP(){
    document.getElementById("remove_btn_plusKDP").remove();
    document.getElementById('moreinfo_plusKDP').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_plusKDP").innerHTML = ""+
        "<p>W recepturze nowego kleju ATLAS PLUS zastosowano TECHNOLOGIĘ POLIMEROWĄ ATLAS. Dzięki wysokiej zawartości związków polimerowych, klej cementowy uzyskuje unikalne właściwości, czyniące go produktem o najwyższych parametrach technicznych i eksploatacyjnych, gwarantując trwałość przez długie lata. Obecność polimerów zapewnia uzyskanie wysokiej przyczepności wszystkich rodzajów okładzin do każdego podłoża, także do tzw. podłoży trudnych i krytycznych. Dzięki przeplataniu się sieci polimerowej z siecią nieorganicznych wiązań hydratacyjnych cementu, klej uzyskuje wyjątkowe parametry.</p>"
    ;
}
function moreinfo_reveal_grawisU(){
    document.getElementById("remove_btn_grawisU").remove();
    document.getElementById('moreinfo_grawisU').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_grawisU").innerHTML = ""+
        "<p>Klej do siatki Atlas Grawis służy do przyklejania siatki zbrojeniowej na powierzchnie termoizolacyjne w celu docieplenia budynku. Dobrze łączy się z wszelkimi materiałami wykorzystywanymi na budowach do izolacji cieplnej. Tak przyklejona siatka wzmacnia powierzchnię styropianu, przez co cała konstrukcja jest trwalsza i jeszcze lepiej chroni przed zimnem</p>"
    ;
}
function moreinfo_reveal_acrylputz(){
    document.getElementById("remove_btn_acrylputz").remove();
    document.getElementById('moreinfo_acrylputz').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_acrylputz").innerHTML = ""+
        "<p>Śnieżnobiała gładź szpachlowa doskonale przyczepna do podłoży. Nie wykazuje skurczu, wysycha w krótkim czasie, nie pęka nawet w grubych warstwach (do 3 cm – przy pojedynczych ubytkach),łatwo się szlifuje. Ściany i sufity po zastosowaniu gładzi szpachlowej uzyskują idealnie gładką, łatwą do malowania powierzchnię.</p>"
    ;
}
function moreinfo_reveal_franspol_gladz(){
    document.getElementById("remove_btn_franspol_gladz").remove();
    document.getElementById('moreinfo_franspol_gladz').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_franspol_gladz").innerHTML = ""+
        "<p>Gładź Szpachlowa Extra GS-2 jest wolnowiążącym materiałem wykończeniowym wysokiej jakości. Doskonały jako ostateczna warstwa, łatwy do obróbki i szlifowania. Gładź GS-2 przeznaczona jest głównie do prac remontowych, wykończeniowych i dekoracyjnych w budownictwie, a w szczególności pozwala doprowadzić ściany i sufity do idealnej gładkości przed malowaniem. Jest doskonałym materiałem służącym do ostatecznego wypełniania ubytków, bruzd i rys na tynkach. Dużą zaletą jest biel produktu, co zmniejsza zużycie farby podczas malowania.</p>"
    ;
}
function moreinfo_reveal_cement(){
    document.getElementById("remove_btn_cement").remove();
    document.getElementById('moreinfo_cement').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_cement").innerHTML = ""+
        '<p>MULTI 32,5 to cement o bardzo wielu zastosowaniach. W okresie wiosenno-letnim idealnie nadaje się do wszystkich prac budowlanych. Można z niego wykonywać beton towarowy przeznaczony na stropy, ławy fundamentowe, schody czy tarasy. To cement o podwyższonej odporności na działanie środowisk agresywnych chemicznie. Idealnie nadaje się także do produkcji zapraw, podsypek pod nawierzchnie z kostki brukowej, a także stabilizacji gruntów i produkcji tzw. "chudych betonów". To nieodzowne spoiwo do drobnych prac remontowych i naprawczych w Państwa domach.</p>'
    ;
}
function moreinfo_reveal_wapno(){
    document.getElementById("remove_btn_wapno").remove();
    document.getElementById('moreinfo_wapno').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_wapno").innerHTML = ""+
        "<p>Wapno budowlane marki Izolbet jest odpowiednia do zastosowania jako składnik zapraw murarskich i tynkarskich. Hydratyzowane wapno jest produktem, który otrzymujemy poprzez kontrolowaną hydratyzację palonego wapna, a następnie separację ziarnową. Dzięki swoim znakomitym właściwościom wapno te powoduje, iż zaprawy budowlane w trakcie eksploatacji budynków charakteryzują się odpowiednią więźliwością i elastycznością.</p>"
    ;
}
function moreinfo_reveal_gips(){
    document.getElementById("remove_btn_gips").remove();
    document.getElementById('moreinfo_gips').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_gips").innerHTML = ""+
        "<p>Gips Budowlany jest spoiwem mineralnym, wykonanym niemal całkowicie z naturalnej skały gipsowej. Uzyskiwany jest w procesie częściowego odwodnienia naturalnego kamienia gipsowego, pochodzącego z odkrywkowej kopalni gipsu. </p>"
    ;
}
function moreinfo_reveal_niskoprezna(){
    document.getElementById("remove_btn_niskoprezna").remove();
    document.getElementById('moreinfo_niskoprezna').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_niskoprezna").innerHTML = ""+
        "<p>TYTAN PROFESSIONAL 65 Piana Pistoletowa to chemia budowlana nowej generacji posiadająca szeroką listę zastosowań. Jest niezastąpiona podczas budowy domu, prac wykończeniowych oraz generalnego remontu mieszkania. Pianka montażowa Tytan przeznaczona jest do wypełniania szczelin, uzupełniania pęknięć i przepustów rurowych. Świetnie sprawdza się do uszczelniania podczas montażu okien i drzwi. Dodatkowo pozwala na wykonanie perfekcyjnej izolacji termicznej, która pomoże Ci w ociepleniu domu. Nadaje się również do izolacji akustycznej, która idealnie wyciszy ściany, a tym samym wygłuszy mieszkanie. Produkt posiada certyfikat potwierdzający izolacyjność akustyczną do 61 dB. Piana Pistoletowa z serii TYTAN PROFESSIONAL cechuje się krótkim czasem utwardzania, wysoką izolacyjnością termiczną i dużą wydajnością. Z jednego opakowania o pojemności 750 ml można uzyskać aż do 65 l piany. Ponadto pianka izolacyjna TYTAN nie emituje oparów MDI podczas aplikacji oraz po utwardzeniu. Opakowanie produktu pozwala na bardzo precyzyjne dozowanie poprzez zawór, który odporny jest na zatykanie się i ucieczkę gazów. Co więcej, pianka niskoprężna zapobiega deformacji ościeżnic.</p>"
    ;
}
function moreinfo_reveal_montazowa(){
    document.getElementById("remove_btn_montazowa").remove();
    document.getElementById('moreinfo_montazowa').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_montazowa").innerHTML = ""+
        "<p>Piana wężykowa Tytan Professional LEXY utwardza się pod wpływem wilgoci, rekomendowana do szerokiej gamy zastosowań w budownictwie: montowanie, uszczelnianie, wypełnianie, izolowanie. Dzięki nowoczesnej recepturze piana nie spływa z powierzchni pionowych, jest wielopozycyjna –można ją wypuszczać w pozycji „zaworem do góry” i wielosezonowa – można nią pracować w okresie zarówno letnim jak i zimowym. Piana jest odporna na pleśnie i grzyby oraz na działanie wysokich i niskich temperatur (od -60°C do +100°C). Po utwardzeniu pianę można ciąć, piaskować, gipsować lub malować. Wysokiej jakości piana montażowa Tytan Professional LEXY jest produkowana zgodnie z normą ISO 9001.</p>"
    ;
}
function moreinfo_reveal_klejmontaz(){
    document.getElementById("remove_btn_klejmontaz").remove();
    document.getElementById('moreinfo_klejmontaz').style.cssText = "" +
    "float: right;width: 75%; padding: 0.5% 1% 0.5%; margin: 2% 2% 1%; border: solid #cc0000 2px; border-radius: 10px; background-color: #45454575; font-size: 15px; text-align: left;"

    document.getElementById("moreinfo_klejmontaz").innerHTML = ""+
        "<p>Uniwersalny, bezbarwny klej rozpuszczalnikowy przeznaczony do różnorodnych prac montażowych i wykończeniowych w budownictwie, szczególnie sytuacji, kiedy potrzebna jest bezbarwna i wytrzymała spoina.Charakteryzuje się szybkim i mocnym chwytem początkowym oraz doskonałą przyczepnością do większości podłoży. Po utwardzeniu tworzy bezbarwną spoinę o bardzo wysokiej sile łączenia, odporną na wilgoć oraz na zmienne warunki atmosferyczne i promieniowanie UV. Może być stosowany wewnątrz i na zewnątrz pomieszczeń.</p>"
    ;
}