const lista = [];


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hozzaAd").addEventListener("click", function(){
        const input1 = document.getElementById("input1").value;
        lista.push(input1)     
    });
    document.getElementById("kiIr").addEventListener("click", function(){
        const min = input1 = document.getElementById("input1").value;
        const max = input1 = document.getElementById("input1").value;
        document.getElementById("visszaJelzes").innerHTML = "A legnagyobb szám a felsorolásból: "+nagyobb(lista,max)+" A legkisebb szám a felsorolásból: "+kisebb(lista,min)
    });
});

function nagyobb(lista, max) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element>max) {
            max = element
        }
    }
    return max
}
function kisebb(lista, min) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element<min) {
            min = element
        }
    }
    return min
}

