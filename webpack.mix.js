const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ])
    .webpackConfig(require("./webpack.config"))
    .browserSync({
        proxy: "http://localhost:8000/",
        open: false,
    });

if (mix.inProduction()) {
    mix.version();
}
