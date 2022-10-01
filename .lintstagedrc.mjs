export default {
    './resources/**/*.{js,jsx,ts,tsx,css,md,html}': 'prettier',
    '*.php': ['vendor/bin/pint -v', 'vendor/bin/rector process'],
}
