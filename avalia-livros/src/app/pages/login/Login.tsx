import { useState } from 'react'
import { useEffect } from 'react'


export const Login = () => {

    const [email, setEmail] = useState(''); // para armazenar o valor do email
    const [senha, setSenha] = useState(''); // para armazenar o valor da senha

    useEffect(() => { // useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele é chamado após a renderização do componente e pode ser usado para realizar operações como buscar dados, manipular o DOM ou configurar assinaturas.
        console.log('Email:', email);
        console.log('Senha:', senha);
    }, [email, senha]); // o array de dependências [email, senha] indica que o efeito será executado sempre que o valor do email ou da senha mudar.

    const handleEntrar = () => {
        
    }

    return(
        <div>
            <form>
                <label>
                    <span>email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* Aqui adicionamos o valor do email e a função para atualizar o estado, esse "(e) => setEmail(e.target.value)" significa o evento que ele terá, que no caso é o evento de mudança de valor */}
                </label>

                <label>
                    <span>senha</span>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    {/* Aqui adicionamos o valor da senha e a função para atualizar o estado, esse "(e) => setSenha(e.target.value)" significa o evento que ele terá, que no caso é o evento de mudança de valor */}
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>


            </form>

            {/* Botão para voltar à página anterior */}
            <button type="button" onClick={() => window.history.back()}> 
                Voltar
            </button>
            
        </div>
    )
}