//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        // Preenchimento dos atributos da classe
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning index (0 or 1), if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            
            if(carArr.length < 2) {
              
                carArr.push(carClass);
            } else {
             
                el.checked = false; 
                alert("Você só pode selecionar 2 carros para comparação.");
            }
        } else {
           
            const position = GetCarArrPosition(carArr, carClass);
            if(position !== -1) {
               
                carArr.splice(position, 1);
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
   
    document.getElementById("compare").scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
    for (let i = 0; i < 2; i++) {
        const car = carArr[i];
        
        
        if (car) {
           
            document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="150px" style="display:block; margin: 0 auto;"/>`;
           
            document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
          
            document.getElementById(`compare_alturacacamba_${i}`).innerText = `${car.alturaCacamba} mm`;
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = `${car.alturaVeiculo} mm`;
            document.getElementById(`compare_alturasolo_${i}`).innerText = `${car.alturaSolo} mm`;
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = `${car.capacidadeCarga} Kg`;
            document.getElementById(`compare_motor_${i}`).innerText = `${car.motor} L`;
            document.getElementById(`compare_potencia_${i}`).innerText = `${car.potencia} cv`;
            document.getElementById(`compare_volumecacamba_${i}`).innerText = `${car.volumeCacamba} L`;
            document.getElementById(`compare_roda_${i}`).innerText = car.roda;
         
            document.getElementById(`compare_preco_${i}`).innerText = `R$ ${car.preco.toLocaleString('pt-BR')}`;
        } else {
            
            document.getElementById(`compare_image_${i}`).innerHTML = '';
            document.getElementById(`compare_modelo_${i}`).innerText = '';
            document.getElementById(`compare_alturacacamba_${i}`).innerText = '';
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = '';
            document.getElementById(`compare_alturasolo_${i}`).innerText = '';
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = '';
            document.getElementById(`compare_motor_${i}`).innerText = '';
            document.getElementById(`compare_potencia_${i}`).innerText = '';
            document.getElementById(`compare_volumecacamba_${i}`).innerText = '';
            document.getElementById(`compare_roda_${i}`).innerText = '';
            document.getElementById(`compare_preco_${i}`).innerText = '';
        }
    }
}