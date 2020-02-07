var express = require('express');
const LoginDto = require('../dto/loginDto');
const LoginDao = require('../repo/loginDao');
const ClientDto = require('../dto/clientDto');
const loginBusiness = require('../business/loginBusiness');
const logger = require('../helper/logger');

const loginDao = new LoginDao();

var router = express.Router();

router.post('/', async function (req, res, next) {
   const loginDto = new LoginDto(req.body);

   if (!loginBusiness.isSyntaxValid(req.body)) {
      res.status(400).send({"error" : "Invalid Syntax"});
   }

   const clientFromDao = await loginDao.checkLogin(loginDto);
   if (clientFromDao) {

      const resultat = await loginBusiness.bcryptCompare(loginDto.password, clientFromDao.password);
      await loginBusiness.bcryptHash('toto');
      if(resultat){
         const clientDto = new ClientDto(clientFromDao);
         res.status(200).json(clientDto);
      } else {
         res.status(404).send({ "error": "Invalid login or password" });
      }
   } else {
      res.status(404).send({ "error": "Invalid login or password" });
   }
});

module.exports = router;
