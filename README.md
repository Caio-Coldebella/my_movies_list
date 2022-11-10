# my_movies_list

## Resumo do projeto:
<p>O projeto é um código básico feito no intuito de praticar TypeScript, e é basicamente uma API de um organizador de filmes, no qual o usuário
pode criar categorias para filme, categorias de serviços de streaming, e filmes. As entidades são estruturadas da seguinte maneira:
<p>

#### Platform:

<p>{<br>id: number,<br>name: string<br>}
<p>

### Genre:

<p>{<br>id: number,<br>name: string<br>}
<p>

### Movie:

<p>{<br>id: number,<br>name: string,<br>platformId: number,<br>genreId: number,<br>status: string,
<br>review: string,<br>grade: number<br>}
<p>

## Funcionamento das Rotas:
### Get "/": 
<p>Retorna lista contendo todos os filmes listados<p>

### Get "/moviesperplatform":
<p>Retorna a quantidade de filmes listados por plataforma<p>

### Get "/moviespergenre":
<p>Retorna a quantidade de filmes listados por gênero<p>

### Post "/platform"
<p>Recebe um objeto no formato {name} e insere um novo nome de categoria<p>

### Post "/genre"
<p>Recebe um objeto no formato {name} e insere um novo nome de gênero<p>

### Post "/movie"
<p>Recebe os parâmetros name,platformId e genreId e insere um novo filme no banco<P>

### Put "/movie"
<p>Recebe os parâmetros status,review e grade e atualzia um filme no banco, o parâmetro status pode ser apenas
"Não Assistido", "Assistindo" ou "Assistido"<p>

### Delete "/movie/:id"
<p>Recebe o id do filme por params e remove o filme do banco<p>
