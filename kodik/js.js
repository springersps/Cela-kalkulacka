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
}

function druhaodmocnina()
{
    znak = "druhaodmocnina";
    if(vysledek == ""){
        vysledek = hodnota;
    }
}

function pocitani()
{
    if(znak == "plus")
    {
        parseInt(hodnota);
        parseInt(vysledek);

        vysledek += hodnota;
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

    if(znak == "mocnina2"){
        vysledek = vysledek * vysledek;
    }
    if(znak == "druhaodmocnina"){
        vysledek = Math.sqrt(vysledek);
    }

    console.log(vysledek);
}