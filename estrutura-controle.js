var nome, nota01, nota02;
nome = prompt("Digite seu nome:")
nota01 = prompt("Digite a nota da primeira unidade:")
nota02 = prompt("Digite a nota da segunda unidade:")

media = (parseInt(nota01) + parseInt(nota02)) / 2;
if(media >= 50){
    alert(nome + "Aprovado!")
}
else
    alert(nome  + "Reprovado!")