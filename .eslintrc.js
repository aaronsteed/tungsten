module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb',
    'rules': {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}