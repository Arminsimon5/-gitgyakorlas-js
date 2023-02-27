document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", function(){
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const visszaJelzes = document.getElementById("visszaJelzes")
        visszaJelzes.innerHTML = nagyobb(input1,input2)

}) 
})

function nagyobb(egesz1,egesz2) {
    if (egesz1>egesz2) {
        return "Az első szám nagyobb: "+egesz1
    }
    else if (egesz1<egesz2) {
        return "Az második szám nagyobb: "+egesz2
    }
    else {
        return "A két szám egyenlő."
    }
}