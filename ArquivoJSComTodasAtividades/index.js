// Função para verificar se um número é primo
function éprimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Função para listar todos os números primos entre 1 e 1000
  function listarNumerosPrimos() {
    var primos = [];
  
    for (var i = 1; i <= 1000; i++) {
      if (éprimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
  // Uso da função isPrimo e seus prompt's
  var numero = 7;
  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
  } else {
    numero = parseInt(numero);
    if (éprimo(numero)) {
      alert(numero + " é um número primo!");
    } else {
      alert(numero + " não é um número primo.");
    }
  }
  
  // Exemplo de uso da função listarNumerosPrimos
  var primos = listarNumerosPrimos();
  alert("Números primos entre 1 e 1000: " + primos.join(", "));

  //---------------------------------------------------------------------EXERCICIO2-----------------------------------------------------------------------------------------------------

  function verificarSenha(senha) {
    // Verifica o tamanho minimo da senha
    if (senha.length < 8) {
      return false;
    }
  
    // Verifica se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
  
    for (var i = 0; i < senha.length; i++) {
      var char = senha.charAt(i);
  
      if (char >= "A" && char <= "Z") {
        temMaiuscula = true;
      } else if (char >= "a" && char <= "z") {
        temMinuscula = true;
      } else if (char >= "0" && char <= "9") {
        temNumero = true;
      }
    }
  
    // Retorna true se todos os critérios forem atendidos, caso contrário, retorna false
    return temMaiuscula && temMinuscula && temNumero;
  }
  
  // Exemplo de uso
  var senha = "Rafael12348";
  if (verificarSenha(senha)) {
    alert(senha + " Senha válida!");
  } else {
    alert("Senha inválida!");
  }

  //-------------------------------------------------------------------EXERCICIO3------------------------------------------------------------------------------------------

  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    var fatorial = 1;
  
    for (var i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Solicitar ao usuário um número
  var numero = 5;
  
  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
  } else {
    numero = parseInt(numero);
  
    // Calcular o fatorial do número fornecido pelo usuário
    var fatorialUsuario = calcularFatorial(numero);
    alert("O fatorial de " + numero + " é: " + fatorialUsuario);
  
    // Calcular os fatoriais de 1 a 10
    var fatoriais = "";
    for (var i = 1; i <= 10; i++) {
      var fatorial = calcularFatorial(i);
      fatoriais += "O fatorial de " + i + " é: " + fatorial + "\n";
    }
  
    alert("Fatoriais de 1 a 10:\n" + fatoriais);
  }

//--------------------------------------------------------------------EXERCICIO4------------------------------------------------------------------------------------

function isQuadradoPerfeito(numero) {
    var raiz = Math.sqrt(numero);
  
    // Verifica se a raiz é um número inteiro
    return raiz === Math.floor(raiz);
  }
  
  // Pedir o numero e responder o usuário
  var numero = 49;
  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
  } else {
    numero = parseInt(numero);
    if (isQuadradoPerfeito(numero)) {
      alert(numero + " é um quadrado perfeito!");
    } else {
      alert(numero + " não é um quadrado perfeito.");
    }
  }
  