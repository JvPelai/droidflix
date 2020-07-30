import React ,{ useState } from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria(){
  const [categorias,setCategorias] = useState(['Teste']);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [values,setValues] = useState('Valor inicial');

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  return(
    <PageDefault>
      <h1> Cadastro de categoria: {values.nome}</h1>

      <form  style={{background: values.cor}} onSubmit = {function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('tentastes enviar o form')
        setCategorias([
          ...categorias,
          values.nome
        ]);
      }}>
        <div>

        <label>
          Nome da Categoria:
          <input
            type="text"
            name="nome"
            value = {values.nome}
            onChange = {handleChange}
          />
        </label>
        </div>
        <br></br>
        <div>
        <label>
          Descrição: <br></br>
          <textarea
            type="text"
            name="descrição"
            value = {values.descricao}
            onChange = {handleChange}
          />
        </label>
        </div>
        <br></br>
        <div>
        <label>
          Cor: 
          <input 
            type="color"
            name = "cor"
            value = {values.cor}
            onChange = {handleChange}
          />
        </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria,indice) =>{
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>


      
      <Link to= '/'>
        Ir para a home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria