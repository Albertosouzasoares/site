const textoSalvo = localStorage.getItem("texto");
document.querySelector("#texto").innerHTML = textoSalvo;

// Variável para armazenar o texto final
var text = "";

// Seleciona o elemento com id "btn-m" e adiciona um evento de click
document.querySelector("#btn-m").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#m").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.m-${margin} {`,
        `    margin: ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.m-${margin} {</span>
        <span class="span-tab">margin: ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.m-${margin} {\n    margin: ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#m").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#m").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-m").click();
    }
});



// Seleciona o elemento com id "btn-my" e adiciona um evento de click
document.querySelector("#btn-my").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#my").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.my-${margin} {`,
        `    margin: ${margin}px 0px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.my-${margin} {</span>
        <span class="span-tab">margin: ${margin}px 0px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.my-${margin} {\n    margin: ${margin}px 0px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#my").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#my").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-my").click();
    }
});



// Seleciona o elemento com id "btn-mx" e adiciona um evento de click
document.querySelector("#btn-mx").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#mx").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.mx-${margin} {`,
        `    margin: 0px ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.mx-${margin} {</span>
        <span class="span-tab">margin: 0px ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.mx-${margin} {\n    margin: 0px ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#mx").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#mx").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-mx").click();
    }
});



// Seleciona o elemento com id "btn-mt" e adiciona um evento de click
document.querySelector("#btn-mt").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#mt").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.mt-${margin} {`,
        `    margin-top: ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.mt-${margin} {</span>
        <span class="span-tab">margin-top: ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.mt-${margin} {\n    margin-top: ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#mt").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#mt").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-mt").click();
    }
});



// Seleciona o elemento com id "btn-mr" e adiciona um evento de click
document.querySelector("#btn-mr").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#mr").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.mr-${margin} {`,
        `    margin-right: ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.mr-${margin} {</span>
        <span class="span-tab">margin-right: ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.mr-${margin} {\n    margin-right: ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#mr").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#mr").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-mr").click();
    }
});



// Seleciona o elemento com id "btn-mb" e adiciona um evento de click
document.querySelector("#btn-mb").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#mb").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.mb-${margin} {`,
        `    margin-bottom: ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.mb-${margin} {</span>
        <span class="span-tab">margin-bottom: ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.mb-${margin} {\n    margin-bottom: ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#mb").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#mb").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-mb").click();
    }
});



// Seleciona o elemento com id "btn-ml" e adiciona um evento de click
document.querySelector("#btn-ml").addEventListener("click", () => {

    // Seleciona o elemento com id "texto"
    const texto = document.querySelector("#texto");
    
    // Obtém o valor inserido pelo usuário
    const margin = document.querySelector("#ml").value;

    // Define um array de strings para cada linha de texto que será adicionada ao arquivo de saída
    const textLines = [
        `.ml-${margin} {`,
        `    margin-left: ${margin}px;`,
        `}`,
        ``,
        ``
    ];

    // Junta todas as strings do array em uma única string, separadas por uma nova linha ('\n')
    const indentedText = textLines.join('\n');

    // Verifica se o valor inserido pelo usuário já existe
    if (text.includes(indentedText)) {
        window.alert(`O valor ${margin} já foi inserido.`);
        return;
    }

    // Adiciona o conteúdo HTML ao elemento de texto
    texto.innerHTML += `
        <span>.ml-${margin} {</span>
        <span class="span-tab">margin-left: ${margin}px;</span>
        <span>}</span>
        <br>
    `;

    // Concatena o texto para ser salvo
    text += `.ml-${margin} {\n    margin-left: ${margin}px;\n}\n\n`;

    // Limpa o valor inserido pelo usuário
    document.querySelector("#ml").value = "";
});

// Adicione um evento de escuta para o evento "keyup" na entrada de margem
document.querySelector("#ml").addEventListener("keyup", (event) => {

    // Verifique se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {

        // Execute a mesma ação do clique no botão
        document.querySelector("#btn-ml").click();
    }
});





document.querySelector("#btn1").addEventListener("click", () => {
    const texto = document.querySelector("#texto").innerHTML;
    localStorage.setItem("texto", texto);
});

document.querySelector("#btnb").addEventListener("click", () => {

    var blob = "";

    if (textoSalvo !== "") {
        blob = new Blob([textoSalvo], {type: "text/css"});
    } else if (text !== "") {
        blob = new Blob([text], {type: "text/css"});
    } else {
        window.alert("Inssira conteudo para baixar");
        return;
    }

    saveAs(blob, "style.css");
});

document.querySelector("#btnc").addEventListener("click", () => {
    const aviso = window.confirm("Você tem certesa que quer limpar o css?");

    if (aviso == true) {
        document.querySelector("#texto").innerHTML = "";
        localStorage.setItem("texto", "");
        text = "";
    } 
});    
