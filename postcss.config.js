module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-css-variables': {
      variables: {
        '--color-deep-ocean': 'rgba(51, 164, 167, .8)',
        '--color-deep-ocean-medium': 'rgba(51, 164, 167, .3)',
        '--color-deep-ocean-light': 'rgba(51, 164, 167, .2)',
        '--color-black-base': '#333333',
        '--color-white-base': '#ffffff',
        '--color-aqua-accent': '#46d1de',
        '--color-red-accent': '#f44560',
        '--color-grey-light': '#e5e5e5',
        '--color-grey-additional': '#c8c8c8',
        '--color-grey-dark': '#757575',

        '--shadow-default': '0 1px 2px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
}