
function trocarTema() {
    const themeLink = document.getElementById('theme-link');
    const button = document.getElementById('theme-toggle-btn');
    const currentTheme = themeLink.getAttribute('href');
    
    let novoTema; 
    let novoTextoBotao;
    
    if (currentTheme === 'css/lightTheme.css') {
        novoTema = 'css/darkTheme.css'; 
        novoTextoBotao = 'Trocar para Tema Claro';
    } else {
        novoTema = 'css/lightTheme.css';
        novoTextoBotao = 'Trocar para Tema Escuro';
    }
    
    themeLink.setAttribute('href', novoTema);
    button.textContent = novoTextoBotao;
}

document.addEventListener('DOMContentLoaded', () => {
    const themeLink = document.getElementById('theme-link');
    const button = document.getElementById('theme-toggle-btn');

    if (themeLink.getAttribute('href') === 'css/lightTheme.css') {
        button.textContent = 'Trocar para Tema Escuro';
    } else {
        button.textContent = 'Trocar para Tema Claro';
    }
});

