import { Pesquisa } from '../components/Pesquisa'

type HeaderProps = {
  query: string
  onQueryChange: (value: string) => void
}

export function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="p-4 mb-10" >
      <div className="flex flex-row justify-between items-center">
        <span >AvaliaLivros</span>
        <Pesquisa query={query} onQueryChange={onQueryChange} />
        <img src="#" alt="foto-estante" />
        <img src="#" alt="foto-menu" />
      </div>
    </header>
  )
}