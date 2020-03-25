module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-css-variables': {
      variables: {
        '--color-theme': 'rgba(51, 164, 167, .8)',
        '--color-theme-light': 'rgba(51, 164, 167, .2)',
        '--color-text-base': '#333333',
        '--color-white-base': '#ffffff',
        '--color-item-active': '#46d1de',
        '--color-item-close': '#f44560',
        '--color-item-deleted': '#e5e5e5',
        '--color-grey-additional': '#c8c8c8',
        '--color-grey-dark': '#757575',

        '--shadow-default': '0 1px 2px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
}