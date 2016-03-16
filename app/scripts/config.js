"use strict";

 angular.module('config', [])

.constant('ENV', {default_lang:'en',debug:true,trademark:{url:'http://dev.api.brandtinker.com/trademark/'},business:{url:'http://dev.api.brandtinker.com/business/'},domain:{url:'https://domainsearch.p.mashape.com/index.php?name=',headers:{'X-Mashape-Key':'bpsKdaCjL3mshlMtVkxIRYeIwEirp1NVSEMjsnITtotxWPEeke',Accept:'application/json'},api_key:'bpsKdaCjL3mshlMtVkxIRYeIwEirp1NVSEMjsnITtotxWPEeke'},api:{data_source:'https://data.example.com/:v1/:object/:id'}})

;