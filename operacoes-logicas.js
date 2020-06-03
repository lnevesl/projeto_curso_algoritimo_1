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