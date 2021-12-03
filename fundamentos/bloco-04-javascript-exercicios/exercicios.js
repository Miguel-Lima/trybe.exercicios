// 1
 let a = 5;
let b = 10;

console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação:' + (a * b));
console.log('Divisão:' + (a / b));
console.log('Módulo:' + (a % b));

// 2 

 let a = 50;
let b = 10;

if (a > b) {
    console.log("'a' é o maior'");
} else {
    console.log("'b' é o maior");
}; 

// 3

let a = 10;
let b = 15;
let c = 12;

if (a > b && a > c) {
    console.log("'a' é o maior")
} else if (b > a && b > c) {
    console.log("'b' é maior");
} else {
    console.log("'c'")
} 

// 4

let number = 4;

if (number > 0) {
    console.log("positivo")
} else if (number < 0) {
    console.log("negativo")
} else {
    console.log("zero")
} 

// 5

 let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaAngulo = anguloA + anguloB + anguloC;

let anguloSomas = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (anguloSomas) {
if (somaAngulo === 180) {
    console.log(true);
} else {
    console.log(false)
};
} else {
    console.log('angulo inválido')
} 

// 6

 let pecaXadrez = "rei";

switch (pecaXadrez) {
    case "rei": 
        console.log('Rei -> movimentar uma casa para qualquer direção');
        break;

    case "dama": 
        console.log('Dama -> movimentar a peça para horizontal, vertical ou diagonal. Quantas casas desejar (Estando livre)');
        break;

    case "torre":
        console.log('Torre -> movimentar em linha reta, vertical ou horizontal, quantas casas desejar');
        break;
    
    case "bispo":
        console.log('Bispo -> movimentar em diagonal quantas casas desejar');
        break;
        
    case "cavalo":
        console.log('Cavalo -> Duas casas horizontal e uma na vertical ou aocontrário');
        break;
        
    case "peão":
        console.log('Peão -> mover sempre para frente uma casa');
        break;

    default: {
        console.log('Peça inválida, tente novamente.')
    }
}

 

// 7

 let porcentagem = "10";
if (porcentagem < 0 || porcentagem > 100) {
    console.log('Erro')
} else if (porcentagem >= 90) {
    console.log('A');
} else if (porcentagem >= 80) {
    console.log('B');
} else if (porcentagem >= 70) {
    console.log('C');
} else if (porcentagem >= 60) {
    console.log('D');
} else if (porcentagem >= 50) {
    console.log ('E');
} else {
    console.log('F')
} 

// 8 

let a = 4
let b = 3
let c = 145

let falso = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 ===0)) {
    falso = true;
}
  console.log(falso);
 


//9
  let a = 2;
  let b = 4;
  let c = 5;

  let falso = false;

  if ((a % 2 === 1 || b % 2 === 1 | c % 2 === 1)) {
      falso = true;
  }
  console.log(falso); 

  // 10

  const custoProduto = 4;
  const valorVenda = 10;


  if (custoProduto >= 0 && valorVenda >= 0) {
      const custoDoProduto = custoProduto * 1.2;
      const valorTotal = ( valorVenda - custoDoProduto) * 1000;
      console.log(valorTotal)
  } else {
      console.log('Error, valores não podem ser negativos')
  };


  // 11 

  let inss;
  let impostoRenda;

  let salarioBruto = 4000.10;

  if (salarioBruto <= 1556.94) {
      inss = salarioBruto * 0.08;
  } else if (salarioBruto <= 2594.92) {
      inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 5189.82) {
      inss = salarioBruto * 0.11;
  } else {
      inss = 570.88
  }

  let baseSalary = salarioBruto - inss;

  if (baseSalary <= 1903.98) {
      impostoRenda = 0
  } else if (baseSalary <= 2826.65) {
      impostoRenda = (baseSalary * 0.075) - 142.80; 
  } else if (baseSalary <= 3751.05) {
      impostoRenda = (baseSalary * 0.15) - 354.80;
  } else if (baseSalary <= 4664.68) {
      impostoRenda = (baseSalary * 0.225) - 636.13;
  } else {
      impostoRenda = (baseSalary * 0.275) - 869.36
  }

  