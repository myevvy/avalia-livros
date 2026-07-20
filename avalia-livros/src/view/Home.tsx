import { useEffect, useState } from 'react'
import { Livro } from '../components/Livro'
import { Header } from './Header'
import { api } from '../services/api'

// importar o componente "Livro", o componente de pesquisa e a instância do axios configurada.
// O componente "Home" busca a lista de livros e permite filtrar os resultados pelo texto digitado.

// A interface "LivroData" define a estrutura dos dados de um livro, incluindo id, título, autor, avaliação, descrição e imagem.
interface LivroData {
  id: number 
  titulo: string
  autor: string
  avaliacao: number
  descricao?: string
  imagem?: string
}

export default function Home() {
  const [livros, setLivros] = useState<LivroData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function carregarLivros() {
      try {
        const response = await api.get<LivroData[]>('/livros.json')
        setLivros(response.data)
      } catch (err) {
        setError('Não foi possível carregar a lista de livros.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    carregarLivros()
  }, [])

  

  const livrosFiltrados = livros.filter((livro) => {
    const termo = query.toLowerCase()
    return (
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
    )
  })

  return (
    <main className="home-page">
      <Header query={query} onQueryChange={setQuery} />

      {loading ? (
        <p>Carregando livros...</p>
      ) : error ? (
        <p>{error}</p>
      ) : livrosFiltrados.length === 0 ? (
        <p>Nenhum livro encontrado.</p>
      ) : (
        <section className="livros-lista">
          {livrosFiltrados.map((livro) => (
            <Livro
              key={livro.id}
              imagem={livro.imagem}
              titulo={livro.titulo}
              autor={livro.autor}
              avaliacao={livro.avaliacao}
              descricao={livro.descricao}
            />
          ))}
        </section>
      )}
    </main>
  )
}
