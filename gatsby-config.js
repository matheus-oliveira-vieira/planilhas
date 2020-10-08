module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1Bp-eYHFr-uCg52L_FbHYxU8JQLGrPwZ-Jtw5etzW-7E',
        worksheetTitle: 'Vendedores',
        credentials: require('./google-credentials.json')
      }
    }
  ]
}