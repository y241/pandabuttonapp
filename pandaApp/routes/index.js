var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('pandadb',
  process.env.RDS_USERNAME || 'panda',
  process.env.RDS_PASSWORD || 'panda999',
  {dialect:'mysql', host: process.env.RDS_HOSTNAME || 'localhost', port: process.env.RDS_PORT || '3306'}
);
const uuidv1 = require('uuid/v1');

const PandaTable = sequelize.define('pandatable', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING
  }
},{
  freezeTableName: true,
  timestamps: true
});
PandaTable.sync();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/:statusid/status', function (req, res) {
  var statusid = req.params.statusid;
  var uuid = uuidv1();
  
  PandaTable.create({
    id:uuid,
    status:statusid
  }).then(function(){
    console.log("inserted");
    res.json({
      'id':uuid,
      'status':statusid
    });
  });
});


module.exports = router;
