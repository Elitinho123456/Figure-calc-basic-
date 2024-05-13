//Wellington Ribeiro Lara & João Gabriel Silveira Costa & Ítalo de Sousa e Santos

// const { parse } = require('path'); não apaguei porque não sei oque é (●'◡'●)

const prompt = require('prompt-sync')();

//adendo ao grupo: por favor fassa anotações do código para saber oque é oque :)

//adendo para o professor: os consoles.log vazios são para espassar linhas e organizar o código :)


// Menu interativo
function menu() {
    console.log("")
    console.log("Menu Legal Funcional. Confia")
    console.log("1 - Listar figuras");
    console.log("2 - Lista de tipos de Calculo");
    console.log("3 - Selecionar e Calcular");
    console.log("4 - Encerrar programa");
    console.log("")
}

// Lista de figuras
function listarFiguras() {
    console.log("Figuras disponiveis:")
    console.log("1 - Círculo");
    console.log("2 - Triângulo equilátero");
    console.log("3 - Quadrado");
    console.log("4 - Retângulo");
    console.log("5 - Pentágono regular");
    console.log("6 - Hexágono regular");
    console.log("7 - Heptágono regular");
    console.log("8 - Octógono regular");
    console.log("9 - Eneágono regular");
    console.log("10 - Decágono regular");
    console.log("11 - Polígono L");
    console.log("12 - Polígono +");
}

// Processamento/calculos

function calculos() {

    console.log("")
  
    console.log("Tipos de calculo disponiveis:")
    console.log("1 - calcular area ")
    console.log("2 - calcular perimetro")
    console.log("3 - calcular ambos")
    console.log("")

}

function calcularAreaPerimetro(figura) {


    // Desconfio que usar parsefloat aqui não seja uma boa ideia mas tá ai né
    console.log("")

   let lado 

    let q = parseFloat(prompt("Digite a Opção de Calculo: "))

    

    console.log("")

  do {
      lado = parseInt(prompt("Digite a medida da figura: "));
      if (lado <= 0) {
          console.log(" \n Valor inválido. Insira uma medida positiva. \n");
      }
  } while (lado <= 0);

    console.log("")

    let area, perimetro;

    switch (figura) {

        case 1: // Círculo

            let raio = lado / 2;
            area = Math.PI * Math.pow(raio, 2);
            perimetro = 2 * Math.PI * raio;
            break;

        case 2: // Triângulo equilátero

            area = (Math.sqrt(3) / 4) * Math.pow(lado, 2);
            perimetro = 3 * lado;

            break;

        case 3: // Quadrado

            area = Math.pow(lado, 2);
            perimetro = 4 * lado;

            break;

        case 4: // Retângulo

            let largura = parseFloat(prompt("Digite a largura: "));

            area = lado * largura;
            perimetro = 2 * (lado + largura);

            break;

        case 5: // Pentágono regular

            area = (5 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 5);
            perimetro = 5 * lado;

            break;

        // Adiciona o resto, trabaia ai 

        case 6: // Hexágono regular

            area = (5 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 6);
            perimetro = 6 * lado;

            break;

        case 7: // Heptágono regular

            area = (7 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 7);
            perimetro = 7 * lado;

            break;

        case 8: // Octógono regular

            area = (8 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 8);
            perimetro = 8 * lado;

            break;

        case 9: // Eneágono regular

            area = (9 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 9);
            perimetro = 9 * lado;

            break;

        case 10: // Decágono regular

            area = (10 / 4) * Math.pow(lado, 2) * Math.tan(Math.PI / 10);
            perimetro = 10 * lado;

            break;

        case 11: // Polígono L

            let ladoR = parseFloat(prompt("Digite o lado do retângulo: "))
            console.log("")
            let ladoQ = parseFloat(prompt("Digite o lado do quadrado: "))
            console.log("")

            perimetro = lado + (2 * ladoR) + (3 * ladoQ) + (lado - ladoQ)
            area = (ladoR * lado) + Math.pow(ladoQ, 2)

            break;


        case 12: //Polígono +

            let ladoBase = parseFloat(prompt("Digite um dos lados do polígono +: "))

            areaBase = ladoBase * ladoBase
            area = areaBase * 5
            perimetroGeral = 4 * ladoBase;
            perimetro = 5 * perimetroGeral

            break;

        default:
            console.log("Figura não implementada.");
    }

    // se tiver errado ou der erro a culpa é do Ítalo :D

    // arrumei, relaxa （￣︶￣）↗　


    if (q == 1) {
      
        console.log("Área: " + area);
      
    } else if (q == 2) {
      
        console.log("Perímetro: " + perimetro);
      
    } else if (q == 3) {
      
        console.log("Área: " + area);
        console.log("Perímetro: " + perimetro);
      
    } else {
      
        console.log("Opção de Calculo inválido.")
      
    }

}

///////////////////////////////////////////////////////

//EU ODEIO A IA DO REPLIT AAAAAAAAAAAAAAA

//eu tbm <--- FOI A PROPRIA IA QUE ESCREVEU ISSO KAKASKAKSDKA

// Programa "principal" o principal mesmo são as funções mas ses intenderam
// não entendi :V
// eu comrpeendi ᕕ( ᐛ )ᕗ

let op;
do {
    menu();

    op = parseInt(prompt("Digite sua opção: "));
    console.log("")

    switch (op) {
        case 1:
            listarFiguras();
            break;
        case 2:
            calculos();
            break;

        case 3:
            let figura = parseInt(prompt("Digite o número da figura: "));
            calcularAreaPerimetro(figura);
            break;

        case 4:
            console.log("Encerrando programa...");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (op != 4);