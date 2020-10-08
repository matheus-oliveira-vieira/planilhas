import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
query {
  vendedores: allGoogleSheetVendedoresRow {
    edges {
      node {
        cidade
        endereco
        estado
        nome
      }
    }
  }
}

`

const Index = () => {
  const data = useStaticQuery(QUERY)
  return (
    <div>
      <h1>Revendedores</h1>

      {data.vendedores.edges.map(v => {
        return (
          <h3>
            {v.node.nome}
          </h3>
        )
      })}

    </div>
  )
}
export default Index