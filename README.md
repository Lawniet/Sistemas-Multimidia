# Sistemas-Multimídia
Repositório de material desenvolvido no Trabalho de Sistemas Multimídia, o qual foi solicitado pelo [Prof. Me. Leandro Vaguetti](https://www.escavador.com/sobre/3762616/leandro-vaguetti) como requisito parcial para obtenção de nota na disciplina.

O aplicativo foi baseado e desenvolvido a partir do #DioLabs (desafio prático do bootcamp "Code Like a Fullstack Girl") de javascript "Recriando o jogo da cobrinha com JavaScript", ofertada pela Digital Innovation One e ministrada por [Gabriela Pinheiro](https://github.com/gabriela-pinheiro). A partir dos conceitos aprendidos nesta Lab, foi realizado um planejamento de releitura para jogo a fim de obter uma versão moderna disponível nas versões de desktop e dispositivos móveis.

## :rocket: DETALHAMENTO TÉCNICO

As tecnologias a serem utilizadas estão listadas abaixo com sua função dentro do projeto:

- TypeScript - Como superSet do Javascript este módulo permitirá agilizar o processo de desenvolvimento da WebApp;
- Phaser - Por ser uma framework de mídias digitais, auxiliará na releitura do jogo permitindo modernizar e deixá-lo mais interativo;
- Repl.it - É uma IDE online que permite a visualização simultânea de aplicações Web e será utilizada no início do desenvolvimento;
- GitHub - Será utilizada para versionamento e armazenamento do código na nuvem;
- Heroku ou Netlifly - Onde será hospedada a versão final do jogo, a decidir qual das duas será utilizada;
- MongoDB Atlas - Serviço de banco de dados NoSQL que será utilizado para armazenar as informações do jogador;
- API Lawniet Games - Será utilizada para cadastro e login dos jogadores;

### :seedling: Front-end, Back-end e Ambiente de desenvolvimento

Foi planejado um estilo visual de jogo minimalista e moderno, mas matendo a essencia original do jogo, logo foi utilizado a ferramenta de desenhos vetoriais InkScape para confecção do cenário e personagens.

A fim de ter uma melhor renderização dos componentes utilizamos o React JS, pois esta é uma biblioteca JavaScript de opensource com foco em criar interfaces de usuário em páginas web, podendo ser utilizada tanto para desktop quanto em plataformas mobile. 

Para o ambiente de desenvolvimento utilizamos Node.js, que por server-side permite o gerenciamento de pacotes e dependências de forma mais ágil.

Além disto foi  utilizada a biblioteca de jogos Phaser 3, uma vez que esta é uma framework de jogos 2D para a criação de jogos HTML5 para desktop e dispositivos móveis. Além disso foram adicionadas as funções de Pontuação (Score), Vidas (Lifes) e Dificuldade (Difficulty). 

### :information_source: Pontuação (Score), Vidas (Lifes) e Dificuldade (Difficulty)

O jogo contabiliza a pontuação por cada ratinho comido pela cobra. Também é possível aumentar a a dificuldade do jogo, sendo que abaixo estão listados cada modo de dificuldade:

1. Fácil: não há bordas e nem obstáculos, apenas a cobra e o ratinho;
2. Normal: há o acréscimo das bordas para cobra não possa atravessar para o outro lado;
3. Difícil: neste modo há também alguns obstáculos aleatórios (pedras), que podem retirar pontos de vida da cobrinha.

Além disso foi planejado um sistema de vidas, na qual quando o jogador colide com um obstáculo ou borda ele perde um ponto de vida, mas pode recuperá-lo com um combo,isto é, comendo 3 ratinhos consecutivos.

## :link: Versões de execução disponíveis

Protótipo:

Versão jogável:

Documentação:

Ingressar na equipe Dev: [Team Dev SGMR no Repl.it](https://repl.it/teams/join/ctwpskrrfslhgiqlmovgudkgjthaotbk-SGMR)
