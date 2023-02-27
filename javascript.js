const lista = [];
const max = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hozzaAd").addEventListener("click", function(){
        const input1 = document.getElementById("input1").value;
        lista.push(input1)     
    });
    document.getElementById("kiIr").addEventListener("click", function(){
        document.getElementById("visszaJelzes").innerHTML = "A legnagyobb szám a felsorolásból: "+nagyobb(lista,max)
    });
});

function nagyobb(lista, max) {
    max = 0
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element>max) {
            max = element
        }
    }
    return max
}

