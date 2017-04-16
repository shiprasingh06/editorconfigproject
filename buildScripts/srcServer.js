//var express=require("express");
//var path=require("path");
//var open=require("open");
import express from 'express';
import open from 'open';
import path from 'path';

import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

//var port=3000;
//var app=express();
const port=3000;
const app=express();
const compiler=webpack(config);

//below code for webpack
app.use(require('webpack-dev-middleware')(compiler ,{
  noInfo:true,
  publicPath:config.output.publicPath
}));


app.listen(port, function(err){
  if(err)
  {
    console.log(err);
  }
  else {

      open("http://localhost:"+port);

  }
});

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
