# Sistemas-Multimídia 

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2ef72d6f457b4617ada9ce745667d7f4)](https://www.codacy.com/gh/Lawniet/Sistemas-Multimidia/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Lawniet/Sistemas-Multimidia&amp;utm_campaign=Badge_Grade)
[![GitHub license](https://img.shields.io/github/license/Lawniet/Sistemas-Multimidia)](https://github.com/Lawniet/Sistemas-Multimidia/blob/master/LICENSE)
[![Run on Repl.it](https://repl.it/badge/github/Lawniet/Sistemas-Multimidia)](https://repl.it/github/Lawniet/Sistemas-Multimidia)

Repositório de material desenvolvido no Trabalho de Sistemas Multimídia, o qual foi solicitado pelo [Prof. Me. Leandro Vaguetti](https://www.escavador.com/sobre/3762616/leandro-vaguetti) como requisito parcial para obtenção de nota na disciplina.

O aplicativo foi baseado e desenvolvido a partir do #DioLabs (desafio prático do bootcamp "Code Like a Fullstack Girl") de javascript "Recriando o jogo da cobrinha com JavaScript", ofertada pela Digital Innovation One e ministrada por [Gabriela Pinheiro](https://github.com/gabriela-pinheiro). A partir dos conceitos aprendidos nesta Lab, foi realizado um planejamento de releitura para jogo a fim de obter uma versão moderna disponível nas versões de desktop e dispositivos móveis.

## :rocket: DETALHAMENTO TÉCNICO

As tecnologias a serem utilizadas estão listadas abaixo com sua função dentro do projeto:

- Phaser 3 - Por ser uma framework de mídias digitais, auxiliará na releitura do jogo permitindo modernizar e deixá-lo mais interativo;
- Repl.it - É uma IDE online que permite a visualização simultânea de aplicações Web e será utilizada no início do desenvolvimento;
- GitHub - Será utilizada para versionamento e armazenamento do código na nuvem;
- Heroku - Onde será hospedada a versão final do jogo;
- NodeJS -  Utilizado para habilitar a coleta e análise de dados,facilitando a comunicação entre com o servidor; 
- MongoDB Atlas - Serviço de banco de dados NoSQL que será utilizado para armazenar as informações do jogador;
- My JSON Server - API REst fake que foi utilizado para o pseudo cadastro e interação com os jogadores;

### :seedling: Front-end, Back-end e Ambiente de desenvolvimento

Foi planejado um estilo visual de jogo minimalista e moderno, mas matendo a essencia original do jogo, logo foi utilizado a ferramenta de desenhos vetoriais InkScape para confecção do cenário e personagens.

A fim de ter uma melhor renderização dos componentes utilizamos o React JS, pois esta é uma biblioteca JavaScript de opensource com foco em criar interfaces de usuário em páginas web, podendo ser utilizada tanto para desktop quanto em plataformas mobile. 

Para o ambiente de desenvolvimento utilizamos Node.js, que por server-side permite o gerenciamento de pacotes e dependências de forma mais ágil.

Além disto foi  utilizada a biblioteca de jogos Phaser 3, uma vez que esta é uma framework de jogos 2D para a criação de jogos HTML5 para desktop e dispositivos móveis. 

### :information_source: Pontuação (Score) e Vidas (Lifes)

Além das alterações já relatadas adicionadas as funções de Pontuação (Score) e Vidas (Lifes). 
O jogo contabiliza a pontuação por cada ratinho comido pela cobra. A dificuldade do jogo é por padrão "Normal", pois neste modo há também alguns obstáculos aleatórios (pedras), que podem retirar pontos de vida da cobrinha.

Além disso foi planejado um sistema de vidas, na qual quando o jogador colide com um obstáculo ou borda ele perde um ponto de vida, mas pode recuperá-lo com um combo.

## :link: Versões de execução disponíveis

Protótipo: [SGMR no Quant-UX](https://www.quant-ux.com/#/test.html?h=a2aa10aLfAhEboZUiZIBkCTpNzrROA9MLF3Wc2c9MZrKyyuF8FXZokhA1kYK)

Versão jogável: [SGMR](https://sgmr.herokuapp.com/)

Documentação: [Drive de SGMR](https://drive.google.com/drive/folders/0B4Jrwbi8IaMCOGJRU0x5OHF2RDg?usp=sharing)

Ingressar na equipe Dev: [Team Dev SGMR no Repl.it](https://repl.it/teams/join/ctwpskrrfslhgiqlmovgudkgjthaotbk-SGMR)
