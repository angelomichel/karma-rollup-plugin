import buble from 'rollup-plugin-buble'

export default {
    input: 'src/index.js',
    plugins: [
        buble()
    ],
    format: 'cjs',
    dest: require('./package.json').main
};
