import { useRef, useCallback, useMemo , useState } from 'react'
import { useEffect } from 'react'


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    // forma de como fazer referencia a algum elemento HTML

    const [email, setEmail] = useState(''); // para armazenar o valor do email
    const [senha, setSenha] = useState(''); // para armazenar o valor da senha

    const emailLength = useMemo(() =>  {
        return email.length * 1000
    }, [email.length]);  
    // useMemo é um hook do React que memoriza o valor de uma função e só a recalcula quando suas dependências mudam. Nesse caso, ele memoriza o comprimento do email e só recalcula quando o email muda.


    useEffect(() => { 
        // useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele é chamado após a renderização do componente e pode ser usado para realizar operações como buscar dados, manipular o DOM ou configurar assinaturas.
        console.log('Email:', email);
        console.log('Senha:', senha);
    }, [email, senha]); 
    // o array de dependências [email, senha] indica que o efeito será executado sempre que o valor do email ou da senha mudar.

    const handleEntrar = useCallback(() => { 
        // o useCallBack não precisa reconstruir a função pois ele é acionado após uma ação 
        console.log('Email:', email);
        console.log('Senha:', senha);
    }, [email, senha])

    return(
        <div>
            <h1>Login</h1>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <label>
                    <span>email</span>
                    <input type="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined } /> 
                    {/*Quando a pessoa clicar em enter o navegador vai começar a focar no input de senha*/}
                    {/* Aqui adicionamos o valor do email e a função para atualizar o estado, esse "(e) => setEmail(e.target.value)" significa o evento que ele terá, que no caso é o evento de mudança de valor */}
                </label>

                <label>
                    <span>senha</span>
                    <input  ref={inputPasswordRef} /*Fazendo referencia ao input de senha */ 
                    type="password" value={senha} 
                    onChange={(e) => setSenha(e.target.value)} />
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