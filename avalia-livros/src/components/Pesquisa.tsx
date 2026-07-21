// Esse interface define as propriedades que o componente "Pesquisa" recebe. O termo de pesquisa é obrigatório, enquanto a função de callback para alteração do termo de pesquisa também é obrigatória.
type PesquisaProps = {
  query: string
  onQueryChange: (value: string) => void
}

// Esse export é o componente funcional "Pesquisa", que recebe as propriedades definidas na interface "PesquisaProps". Ele renderiza um campo de entrada de texto para pesquisa de livros, permitindo que o usuário digite um termo de pesquisa. O valor do campo é controlado pelo estado "query" e a função "onQueryChange" é chamada sempre que o valor do campo muda.
export function Pesquisa({ query, onQueryChange }: PesquisaProps) {
  return (
    <input
      type="text" //tipo que define o campo de entrada como texto
      value={query} // valor do campo de entrada é controlado pelo estado "query"
      onChange={(event) => onQueryChange(event.target.value)} 
      placeholder="&#128269;Pesquise o livro"
      className="p-2 w-fit border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}