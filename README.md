# Daily Tarot Adventure

Aplicação totalmente estática, feita com HTML, CSS e JavaScript. Não exige backend, instalação de dependências ou etapa de build.

## Publicar no GitHub Pages

Mantenha `index.html`, `.nojekyll`, `manifest.webmanifest`, `pwa.js`, `sw.js` e a pasta `assets/` na mesma pasta de publicação. No GitHub Pages, selecione a branch e essa pasta como origem do site. Os caminhos das imagens e do app são relativos e funcionam também em endereços como `usuario.github.io/repositorio/`.

## Instalar no celular

O site é um aplicativo web instalável (PWA) e continua totalmente estático. A instalação fica disponível depois de publicar o site por HTTPS, como no GitHub Pages.

- **Android:** abra o site e acesse Configurações → Instalar aplicativo. Quando o navegador oferecer a instalação, essa seção mostra um botão. Também é possível usar “Instalar app” ou “Adicionar à tela inicial” no menu do navegador.
- **iPhone e iPad:** abra o site no Safari e escolha Compartilhar → Adicionar à Tela de Início. Mantenha a opção de abrir como app ativada, se ela aparecer.
- O app abre em uma janela própria e usa o ícone de tarot gerado para o projeto.

Não é necessário publicar em uma loja para instalar desta forma. Os passos dependem dos recursos oferecidos pelo navegador. Referências: [instalação de PWAs (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) e [adicionar um app à tela inicial no iPhone (Apple)](https://support.apple.com/guide/iphone/iphea86e5236/ios).

## Uso sem conexão

O app guarda sua interface e somente as imagens das cartas efetivamente abertas. Nenhum baralho é baixado por inteiro ou antecipadamente. Depois da primeira visita com conexão e da ativação do modo offline, é possível reabrir a mesa, consultar o guia e escrever no diário sem internet. Uma carta que ainda não esteja armazenada precisa de conexão para ser aberta. O armazenamento depende do espaço e das políticas do navegador.

O diário e as preferências continuam no armazenamento local do navegador. Ao publicar uma atualização, incremente a versão `shell-v2` em `sw.js`; o cache das cartas é mantido. Os caches são separados pelo endereço do projeto para não interferirem com outros sites do mesmo domínio.

## Ícone

A imagem original gerada está em `assets/icons/icon-source.png`, com versões PNG de 512, 192, 180 e 48 pixels para instalação, iOS e favicon. Foi criada pelo gerador integrado de imagens. O [prompt completo](assets/icons/PROMPT.md) está registrado no projeto.

## Carregamento das cartas

- A abertura da página não baixa imagens das cartas.
- O loading de tela cheia aparece somente na abertura. Durante a partida, as frentes são carregadas em segundo plano, com um indicador na própria carta; a mesa continua interativa.
- Trocar o baralho atualiza somente as cartas já abertas e preserva a leitura.
- A galeria usa versos como espaço reservado e reaproveita uma carta já carregada para mostrar a coleção selecionada. Outras coleções não são carregadas antecipadamente.
- No Oswald Wirth, somente os arcanos menores revelados usam imagens Rider–Waite–Smith, pois a coleção contém apenas os 22 maiores.
- Se uma imagem falhar, toque na própria carta para tentar novamente. Resets e trocas de baralho descartam resultados atrasados de carregamentos anteriores.

O diário e as preferências continuam salvos no navegador. Para usar offline abrindo `index.html` diretamente, baixe também toda a pasta `assets/`. Os créditos permanecem no site; os dados das fontes originais estão em `assets/decks/sources.json`.
