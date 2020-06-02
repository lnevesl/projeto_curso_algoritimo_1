/*
Var
// Seção de Declarações das variáveis
    nota01, nota02, media: real
    nome: caractere
    passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
     passou := falso
     escreval ("Digite nome do Aluno")
     leia(nome)
     escreval("Digite a nota da primeira unidade")
     leia(nota01)
     escreval("Digite a nota da segunda unidade")
     leia(nota02)
     media := (nota01 + nota02) / 2

     se media >= 50 entao
      passou := verdadeiro

 fimse
 
       se ( passou ) && ( media >= 50 || media <= 70) entao
       escreval("Aprovado!", nome)
       senao
       escreval("Reprovado!", nome)

Fimalgoritmo
*/

var nome, nota01, nota02, passou;

passou = false 

nome = prompt("Digite seu nome:")
nota01 = prompt("Digite a nota da primeira unidade:")
nota02 = prompt("Digite a nota da segunda unidade:")

media = (parseInt(nota01) + parseInt(nota02)) / 2;
if(media >= 50){
    passou = true;
// a condição é tem que estar na media e ser >=70 para ser aprovado
if(passou && media >=70)
    alert(nome + "Aprovado!")
}
else
    alert(nome  + "Reprovado!")