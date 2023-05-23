function verificaIdadeEHoraEGenero(idade, horario, genero, acompanhada) {
  if (idade >= 19) { // verifica se a idade é maior ou igual a 19 anos
    if (genero === 'mulher' && horario < 22 && acompanhada) { // verifica se é mulher, chegou antes das 22h e está acompanhada
      return 'Você pode entrar na festa gratuitamente!'; 
    } else if (genero === 'homem' && horario < 22) { // verifica se é homem e chegou antes das 22h
      return 'Você pode entrar na festa pagando 50% do valor da entrada.'; 
    } else { // caso contrário
      return 'Você pode entrar na festa pagando o valor inteiro da entrada.'; 
    }
  } else { // caso a idade seja menor que 19 anos
    return 'Você não pode entrar na festa.';
  }
}