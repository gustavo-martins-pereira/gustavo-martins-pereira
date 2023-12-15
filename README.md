<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

    @keyframes icons {
        from {
            transform: translateY(0px);
        }
        
        25% {
            transform: translateY(-5px);
        }
        
        30% {
            transform: translateY(-7px);
        }
        
        50% {
            transform: translateY(0px);
        }

        70% {
            transform: translateY(5px);
        }

        75% {
            transform: translateY(7px);
        }

        to {
            transform: translateY(0px);
        }
    }

    a::after {
        content: "🔗"
    }

    .title {
        font-family: 'Caveat', cursive;
        text-align: center;
    }

    .introduction__text {
        text-align: justify;
    }

    .introduction__text p {
        float: left;
        text-indent: 32px;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 48px;
    }

    .technologies__icon {
        animation: icons 6s infinite ease-in;
    }

        .technologies__icon:nth-of-type(2n) {
            animation-delay: 0.5s;
        }
        .technologies__icon:nth-of-type(3n) {
            animation-delay: 1s;
        }
        .technologies__icon:nth-of-type(4n) {
            animation-delay: 0.75s;
        }
        .technologies__icon:nth-of-type(5n) {
            animation-delay: 0.25s;
        }
</style>

<h1 class="title">
    <font size="7">Gustavo Martins Pereira</font>
</h1>

<h2 class="title">
    <font size="6">❔ Quem sou eu ❔</font>
</h2>

<div class="introduction">
    <p>Trabalho e estudo programação há 3 anos, formado na faculdade <a href="https://multivix.edu.br/"
            target="_blank" rel="external">Multivix</a> em <strong>Engenharia da Computação</strong>🔍🖥️, atuo como
        programador <strong><i>Full Stack</i></strong> na empresa <strong>Ancarp</strong>.</p>
    <p>Meu mantra é sempre conhecer a base da programação (como o <b>JavaScript</b> ❤) para somente depois atuar em
        <i>frameworks</i>, porque para resolver os maiores pepinos que um programador encontrar durante o caminho, é
        preciso um conhecimento muito bem construido em cima da linguagem estudada.</p>
    <p>Nas horas em que não estou programando eu pratico piano 🎹 e jogo uns jogos aleatórios na Steam.</p>
    <img src="./images/profile.jpg" alt="Foto de perfil de mim com cabelo cacheado castanho">
</div>

<h2 class="title">
    <font size="6">👨‍💻 Tecnologias que Uso 👨‍💻</font>
</h2>

<h3 class="title">
    <font size="5">🌐 Linguagens e Frameworks 🌐</font>
</h3>

<div class="technologies">
    <img class="technologies__icon" src="./images/icons/html-5.svg" alt="Logo do HTML5">
    <img class="technologies__icon" src="./images/icons/css-3.svg" alt="Logo do CSS3">
    <img class="technologies__icon" src="./images/icons/bootstrap.svg" alt="Logo do Bootstrap">
    <img class="technologies__icon" src="./images/icons/sass.svg" alt="Logo do SASS">
    <img class="technologies__icon" src="./images/icons/javascript.svg" alt="Logo do JavaScript">
    <img class="technologies__icon" src="./images/icons/express.svg" alt="Logo do Express">
    <img class="technologies__icon" src="./images/icons/react.svg" alt="Logo do React">
    <img class="technologies__icon" src="./images/icons/nodejs.svg" alt="Logo do NodeJs">
    <img class="technologies__icon" src="./images/icons/java.svg" alt="Logo do Java">
</div>

<h3 class="title">
    <font size="5">🛠️ Ferramentas 🛠️</font>
</h3>

<div class="technologies">
    <img class="technologies__icon" src="./images/icons/git.svg" alt="Logo do Git">
    <img class="technologies__icon" src="./images/icons/vscode.svg" alt="Logo do VS Code">
    <img class="technologies__icon" src="./images/icons/figma.svg" alt="Logo do VS Code">
</div>

<h2 class="title">
    <font size="6">🚢 Navegando pelos Repositórios 🚢</font>
</h2>

Os diretórios estão divididos em subcategorias que são:
* **Course**: Cursos de alguma plataforma, como **Youtube**, **Udemy**, etc.
    * Para cada curso, a plataforma em que o curso foi feito também é categorizada, por exemplo: "Project" como sendo o nome do repositório, com uma tag incluida como **udemy**.
* **Personal-Project**: Projetos pessoais já feitos usando algumas das tecnologias que tenho conhecimento.
* **Course-Project**: Projetos feitos dentro de um curso.

Para pesquisar um repositório com um desses tópicos específicos, digite na barra de pesquisa dos repositórios:</br>
`SUB-CATEGORY is:topics`, onde no lugar de *SUB-CATEGORY*, você vai escrever o nome da subcategoria, como por exemplo
`course is:topics`, assim aparecerão todos os repositórios que são relacionados aquela tag, conforme exemplo abaixo:</br>
![Na página de "repositórios" está escrito "personal-project is:topics" na caixa de pesquisa, retornando somente os repositórios que contem essa tag](./images/search-repo-github-example.png)

> Para mais informações de pesquisa de repositórios, acesse essa página da [documentação do
GitHub](https://docs.github.com/pt/search-github/searching-on-github/searching-for-repositories).