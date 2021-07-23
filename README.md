# SciTech Finance

Este repositório contém o código base da aplicação WEB SciTech Finance, disponível em: [https://github.com/luizfernandopezzi/ScitechFinance](https://github.com/luizfernandopezzi/ScitechFinance)

## Resumo
SciTech Finance é o nome da aplicação desenvolvida com ReactJS cuja funcionalidade é acompanhar o status dos seguintes ativos do mercado financeiro americano (é possível acompanhar qualquer ativo listado na NASDAQ, porém, a interface pode apresentar defeitos visto que a aplicação não possui os logotipos de outras empresas em seu código):

* ADBE: Adobe
* AMZN: Amazon
* AAPL: Apple
* FB: Facebook
* MSFT: Microsoft
* SBUX: Starbucks
* TWTR: Twitter

## Instruções de utilização

Utilize o campo de pesquisa para inserir o código do ativo desejado e clique no botão pesquisar localizado logo ao lado (caracterizado por uma lupa e de cor azul).

Aguarde alguns instantes enquanto a aplicação realiza a conexão com a API IEX Cloud (https://iexcloud.io/).
Uma estabelecida a conexção com a API, será exibido na tela as seguintes informações referentes ao ativo pesquisado:
 
* Código
* Nome da Empresa
* Valor de mercado da última cotação (atualizado em tempo real conforme disponibilização da API)
* Variação do valor atual em relação ao valor de fechamento do dia anterior em unidades monetárias (dólar) e em percentual.
* Gráfico referente à variação diária do preço do ativo, com intervalo de 1 minuto.
 
No rodapé da aplicação podem ser encontradas as informações dos ativos recém visualizados.
 
É possível adicionar três ativos à lista de favoritos. Para isso, na região acima do gráfico, clique na estrela de fundo branco e borda azul localizada ao lado do código do ativo e do nome da empresa. 
 
Caso deseje adicionar algum ativo visualizado recentemente aos favoritos, na região dos ativos recém visualizados, basta clicar na estrela de fundo branco e bordas azuis localizada na caixa do respectivo ativo.
 
Para remover um ativo da lista de favoritos, ao lado direito da tela, na região dos ativos favoritos, clique na estrela de fundo azul localizada na caixa do respectivo ativo.
 
## Instruções de instalação

Siga as instruções abaixo para obter uma cópia dos arquivos da aplicação possibilitando a execução em sua máquina local.

## Pré-requisitos
É necessário que você tenha o NojdeJS e Yarn ou NPM instalados em sua máquina.

Faça o download dos arquivos acessando o seguinte repositório da plataforma GitHub: [https://github.com/luizfernandopezzi/ScitechFinance](https://github.com/luizfernandopezzi/ScitechFinance)

Abra a pasta do projeto no ambiente do NodeJS e execute os seguintes comandos no terminal:

`yarn install`

Este comando é responsável por fazer o download de todos os arquivos complementares necessários para execução da aplicação.

Execute o seguinte script através do terminal do seu sistema operacional ou do NodeJS:

`yarn start`

Este comando executará a aplicação no modo de desenvolvimento. Uma vez inicializada, o seu navegador abrirá automaticamente.  Caso o seu navegador não abra automaticamente, abra manualmente e visite a seguinte URL: [http://localhost:3000](http://localhost:3000)

## Layout:
O layout desta aplicação foi desenvolvido com base em um protótipo FIGMA disponibilizado por *CONFIDENCIAL*.

## Stack:
* NodeJS [https://nodejs.org/en/](https://nodejs.org/en/)
* Figma [https://www.figma.com/](https://www.figma.com/)
* ReactJS [https://pt-br.reactjs.org/](https://pt-br.reactjs.org/)
* Recharts [https://recharts.org/en-US/](https://recharts.org/en-US/)
* Google Firebase [https://firebase.google.com/?hl=pt](https://firebase.google.com/?hl=pt)
* React Fast Marquee [https://www.react-fast-marquee.com/](https://www.react-fast-marquee.com/)
* IEX Cloud API [https://iexcloud.io/docs/api/](https://iexcloud.io/docs/api/)

## Autor
Luiz Fernando Pezzi - LinkedIn [https://www.linkedin.com/in/luizfernandopezzi/](https://www.linkedin.com/in/luizfernandopezzi/)

## Licença
This project is licensed under the MIT license - see [LICENSE.md] (LICENSE.md) for more information.