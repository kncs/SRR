var webpack = require("webpack");
var config = require("./webpack.config");

webpack(config, function(err, stats) {
    if(err) {
      console.log(err);
    }
});
