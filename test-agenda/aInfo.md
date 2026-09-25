# Fluxo de Execução (Do Ponto de Entrada à Tela)

#### [index.html](./index.html) *(Ponto de Entrada HTML)*
O navegador carrega este arquivo primeiro. Ele contém a estrutura base do documento HTML e inclui a tag `<script type="module" src="/src/main.tsx"></script>`, que chama o JavaScript/TypeScript inicial.

#### [src/main.tsx](./src/main.tsx) *(Bootstrapping da Aplicação)*
Primeiro arquivo TypeScript executado. Ele importa os estilos globais (`index.css`), localiza a tag `<div id="root">` dentro do `index.html` e inicializa o React montando o componente raiz (`<App/>`).

#### [src/index.css](./src/index.css) *(Injeção de Estilos e Tokens)*
Carregado pelo `main.tsx`. Ele inicializa o Tailwind CSS, define utilitários customizados (como `.hide-scrollbar`) e disponibiliza no CSS global as variáveis de cor das categorias do Teste (`--color-prog-cultura`, etc.).

#### [src/App.tsx](./src/App.tsx) *(Página / Layout Principal)*
Atua como a página/tela principal. Ele importa a lista de dados (`mockEvents`) e a seção de interface (`EventSection`), conectando os dados à interface ao renderizar `<EventSection events={mockEvents} />`.

#### [src/data/mockEvents.ts](./src/data/mockEvents.ts) *(Provedor de Dados)*
Importado pelo `App.tsx`. Fornece o array com as informações dos eventos (títulos, datas, imagens e referências de cor das categorias).

#### [src/components/EventSection.tsx](./src/components/EventSection.tsx) *(Container da Seção)*
Recebe o array de eventos vindo do `App.tsx`. Ele constrói a estrutura visual externa (o título com a barra azul do Teste e a grade/carrossel responsivo) e executa um `.map()` para instanciar um `<EventCard/>` para cada item da lista.

#### [src/components/EventCard.tsx](./src/components/EventCard.tsx) *(Componente de Interface do Card)*
Importado pelo `EventSection.tsx`. Recebe individualmente os dados de um evento e renderiza a estrutura final do card (imagem, badge de categoria formatado com a cor correspondente, título, local, data, hora e preço).

#### [src/types/event.ts](./src/types/event.ts) *(Validação de Tipos — Tempo de Compilação)*
Apesar de não rodar dinamicamente no navegador, este arquivo é importado por `mockEvents.ts`, `EventCard.tsx` e `EventSection.tsx` durante o processo de build do Vite para garantir que todos os dados e propriedades sigam rigorosamente a mesma estrutura definida.


4.4. Habilitar a aba Actions no GitHub (se estiver desativada):
Acesse o repositório no navegador.
Se após o git push a aba continuar vazia:
Vá na aba Settings (Configurações) do seu repositório no site do GitHub.
No menu esquerdo, clique em Actions > General.
Em Actions permissions, selecione Allow all actions and reusable workflows.
Clique em Save.


Opção 1: Publicar o site ao vivo via GitHub PagesComo o Ionic React foi configurado com mode: 'md', o site já terá o visual, fontes e botões idênticos aos do Android quando acessado pelo navegador.1.1. Configurar o caminho base do Vite:Ajuste no arquivo vite.config.ts.No arquivo vite.config.ts, adicione a propriedade base com o nome do seu repositório para que os arquivos JavaScript e CSS sejam encontrados corretamente no GitHub Pages:TypeScriptimport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teste-agenda/', // Nome do seu repositório no GitHub
})
2.2. Instalar a biblioteca gh-pages:Facilita o envio dos arquivos compilados.No terminal do VS Code (C:\ESTUDO\EstudoReact\teste-agenda), instale a biblioteca de publicação:PowerShellnpm install -D gh-pages
3.3. Adicionar o script de deploy:Edição do package.json.Abra o arquivo package.json e adicione estas duas linhas dentro da seção "scripts":JSON"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
4.4. Executar a publicação:Gera a build e envia para a branch gh-pages.Rode o comando no terminal:PowerShellnpm run deploy
5.5. Ativar o site no GitHub:Ajustar nas configurações do repositório no site.Acesse o seu repositório no GitHub ([github.com/SEU-USUARIO/teste-agenda](https://github.com/SEU-USUARIO/teste-agenda)).Vá em Settings > Pages (no menu lateral esquerdo).Em Source, selecione a branch gh-pages e a pasta /(root).Clique em Save.Após alguns minutos, o link público estará disponível em:[https://SEU-USUARIO.github.io/teste-agenda/](https://SEU-USUARIO.github.io/teste-agenda/)Opção 2: Exibir molduras de celular no README.md (Para Portfólio)Para deixar a página inicial do repositório atraente para recrutadores e visitantes:Tire um print da tela do seu app usando o modo de inspeção de celular (F12 > Ctrl + Shift + M).Acesse um gerador gratuito de molduras como o shots.so ou deviceframes.com e insira o print dentro da carcaça de um Android (ex: Google Pixel ou Samsung Galaxy).Salve a imagem gerada na pasta do seu projeto (ex: public/preview.png).Adicione a imagem ao seu arquivo README.md:Markdown# 📱 TESTE Agenda - App Mobile

Aplicativo desenvolvido com React, Ionic Framework e Capacitor.

<p align="center">
  <img src="./public/preview.png" alt="Demonstração do App no Celular" width="350">
</p>

## 🚀 Teste a Aplicação
- [Acessar a Demo Web](https://SEU-USUARIO.github.io/teste-agenda/)
- [Baixar o arquivo APK Android](https://github.com/SEU-USUARIO/teste-agenda/actions)