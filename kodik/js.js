var hodnota = "";
var vysledek = "";
var znak = "";

function _0()
{
    hodnota += 0;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _1() 
{
    hodnota += 1;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _2()
 {
    hodnota += 2;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _3()
 {
    hodnota += 3;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _4()
 {
    hodnota += 4;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _5()
 {
    hodnota += 5;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _6()
 {
    hodnota += 6;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _7()
 {
    hodnota += 7;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _8()
 {
    hodnota += 8;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}
function _9()
{
    hodnota += 9;   

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}

function desetina()
{
    hodnota += ".";

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}

function negace()
{
    hodnota = -hodnota;

    document.getElementById("hodnota").innerHTML = hodnota;
    console.log(hodnota);
}

function plus()
{
    znak = "plus";
    vysledek = hodnota;

    hodnota = "";
}

function minus()
{
    znak = "minus"
    if(vysledek == "")
    {
        vysledek = hodnota
    }

    hodnota = "";
}

function nasobeni()
{
    znak = "nasobeni";
    if(vysledek == ""){
        vysledek = hodnota;
    }

    hodnota = "";
}

function deleno()
{
    znak = "deleno";
    if(vysledek == ""){
        vysledek = hodnota;
    }

    hodnota = "";
}

function mocnina2()
{
    znak = "mocnina2";
    if(vysledek == ""){
    vysledek = hodnota;
    }
    vysledek = vysledek * vysledek;
    console.log(vysledek);
}

function druhaodmocnina()
{
    znak = "druhaodmocnina";
    if(vysledek == ""){
        vysledek = hodnota;
    }
    vysledek = Math.sqrt(vysledek);
    console.log(vysledek);
}

function procenta(){
    znak = "procenta";
}

function obracenahodnota(){
    znak = "obracenahodnota";
    if(vysledek == ""){
    vysledek = hodnota;
    }
    vysledek = 1 / vysledek;
    console.log(vysledek);
}

function CE(){
    hodnota = "";
}

function C(){
    hodnota = "";
    vysledek = "";
}

function del(){
    hodnota = hodnota.slice(0, hodnota.length -1);
    console.log(hodnota);
}

function pocitani()
{
    if(znak == "plus"){
        vysledek = parseInt(hodnota) + parseInt(vysledek);
    }

    if(znak == "minus"){
        vysledek -= hodnota;
    }

    if(znak == "nasobeni"){
        vysledek *= hodnota;
    }

    if(znak == "deleno"){
        vysledek /= hodnota;
    }
    if(znak == "procenta"){
        hodnota = hodnota / 100;
        vysledek *= hodnota;
    }
    console.log(vysledek);
}

function odeslat(cislice) {

    let komunikacniObjekt = new XMLHttpRequest();

    komunikacniObjekt.open("GET", "ajax.php?cislice=" + cislice, true);
    komunikacniObjekt.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let odpoved = JSON.parse(this.responseText);
            console.log(odpoved[0]["pocet"]);
            console.log(odpoved);
            document.getElementById("cislice" + cislice).innerHTML = odpoved[cislice]["pocet"];
        }
    };
    komunikacniObjekt.send();
}
