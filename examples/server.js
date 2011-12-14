#!/usr/bin/env node

// a fake solr server written in nodejs.

var http = require('http');

var response = '<?xml version="1.0" encoding="UTF-8"?>\
<response>\
<lst name="responseHeader"><int name="status">0</int><int name="QTime">0</int><lst name="params"><str name="q">kharkov</str><str name="fl">_id</str></lst></lst><result name="response" numFound="2125" start="0"><doc><str name="_id">4e8bbf5ab52abf110f36d131</str></doc><doc><str name="_id">4e8bbda9b52abf110f366c68</str></doc><doc><str name="_id">4e8d003cb52abf110f7efede</str></doc><doc><str name="_id">4e69cd6cb52abf30e709ee1e</str></doc><doc><str name="_id">4e6a4a2ab52abf7b69010e4f</str></doc><doc><str name="_id">4e8bbfedb52abf110f36f483</str></doc><doc><str name="_id">4e8bd698b52abf110f3c77e6</str></doc><doc><str name="_id">4e8bebc1b52abf110f413a05</str></doc><doc><str name="_id">4e8ca79fb52abf110f6be7c1</str></doc><doc><str name="_id">4e686970b52abf4e2f004565</str></doc></result>\
</response>';

var port = parseInt(process.argv[2]) || 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/xml;charset=UTF-8'});
  res.end(response);
}).listen(port, "127.0.0.1");
console.log('Server running at http://127.0.0.1:%d/', port);
