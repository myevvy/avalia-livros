// Esse interface define as propriedades que o componente "Livro" recebe. O título, autor e a avaliação são obrigatórios, enquanto a descrição é opcional.

interface LivroProps {
  imagem?: string
  titulo: string
  autor: string
  avaliacao: number
  descricao?: string
} 

// Esse export é o componente funcional "Livro", que recebe as propriedades definidas na interface "LivroProps". Ele renderiza um card de livro com o título, autor, avaliação e, se fornecida, a descrição do livro. A avaliação é formatada para exibir uma casa decimal.

export function Livro({ imagem, titulo, autor, avaliacao, descricao }: LivroProps) {
  return (
    <article className="livro-card">
      <div className="livro-card-header">
        <img src={imagem} alt={titulo} />
        <h2>{titulo}</h2> 
        <span className="livro-avaliacao">{avaliacao.toFixed(1)} / 5</span>
      </div>
      <p className="livro-autor">{autor}</p>
      {descricao ? <p className="livro-descricao">{descricao}</p> : null}
    </article>
  )
}
 