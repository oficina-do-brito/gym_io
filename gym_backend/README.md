<div align="center">
  <img src="https://github.com/oficina-do-brito/ginasio/blob/main/docs/modelagem/logo.png" width="70" height="70">
</div>

<h4 align="center">Repositório com fins de resolução de problemas para reserva de horários de ginásio poliesportivo. 📑</h4>

<p align="center">
  [Project's badges]
</p>

<p align="center">
  <a href="https://github.com/oficina-do-brito/ginasio/blob/main/docs/modelagem/nomenclatura.md">Nomenclatura de banco de Dados</a> •
  <a href="#Modelo_Conceitual">Modelo Conceitual</a> •
   <a href="https://github.com/oficina-do-brito/ginasio/blob/main/docs/modelagem/breakpoints.md">Recursos</a> •
  <a href="https://github.com/oficina-do-brito/ginasio/blob/main/docs/modelagem/modelo_logico.jpg">Modelo Logico</a> •
  <a href="#Tecnologias_usadas">Tecnologias Usadas</a> •
  <a href="#Rodando_aplicação">Rodando aplicação</a> •
</p>

## Explicações

-   A criação da tabela Usuario é usada unificadamente, fazendo assim a definição de tipo por meio de atributos;
- Por padrão a aplicação roda na ``` http://localhost:3000 ``` porém teste ai que vai que eu ja tenha feito o front com next que roda na 3000 também ai costumo mudar a daqui do backend;


## Modelo_Conceitual

<img src="https://github.com/oficina-do-brito/ginasio/blob/main/docs/modelagem/conceitual.jpg" />


## Tecnologias_usadas

Backend:

IDE:

<img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" width="50" height="50">

Combinação:

<img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574" width="50" height="50"><img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" width="50" height="50">

## Rodando_aplicação

### Prerequisitos

-   Se quizer rodar o projeto com banco ja de databse criada, é a conselhavel ter o docker e docker-compose na sua maquina.
- Modificar o arquivo .env.example para .env e colocar suas variaveis de ambiente:

  -> DB_HOST= o base path que a aplicação vai rodar                     sugest:localhost 

  -> DB_TYPE= o tipo do seu banco de dados mysql, postgres etc          sugest:postgres

  -> DB_PORT= a porta que esta sendo exporta para connexao com db       sugest:5432

  -> DB_USERNAME= username                                              sugest:postgres    

  -> DB_PASSWORD= password                                              sugest:postgres

  -> DB_DATABASE= database                                              sugest:api_ginasio

  -> SECRET_KEY= um segredo para construção do jwt                      sugest:qualquer_secredo

  -> SALT = um sal de encriptação de senhas                             sugest:qualquer_valor_numerico

### Rodando o projeto backend

``` docker-compose up -d && npm i && npm run start:dev ```

### Limpando todos containers e images usadas (cuidado)

``` docker-compose down  && docker rmi $(docker images -q) && docker images ```