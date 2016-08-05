var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")

exports.modifyWebpackConfig = function(config, env) {
  console.log(config)
  console.log(env)

  config.merge({
    resolve: {
      moduleDirectories: ['components', 'lib'],
    },
    postcss: [
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      })
    ]
  })

  return config
}
