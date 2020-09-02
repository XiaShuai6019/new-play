module: {
  rules: [
      {
          test: /\.vue$/,
          use: [
              {
                  loader: 'vue-loader',
                  options: {
                      
                  }
              },
              {
                  loader: 'iview-loader',
                  options: {
                      prefix: false
                  }
              }
          ]
      }
  ]
}