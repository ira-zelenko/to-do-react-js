module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-css-variables': {
      variables: {
        '--color-header': 'rgba(51, 164, 167, .7)',
        '--color-text-base': '#333333',

        '--shadow-default': '0 1px 2px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
}