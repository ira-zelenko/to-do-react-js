module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-css-variables': {
      variables: {
        '--color-header': 'rgba(51, 164, 167, .7)',
        '--color-text-base': '#333333',
        '--color-white-base': '#ffffff',
        '--color-item-active': '#46d1de',
        '--color-item-close': '#f44560',
        '--color-item-deleted': '#e5e5e5',
        '--color-grey-additional': '#c8c8c8',

        '--shadow-default': '0 1px 2px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
}