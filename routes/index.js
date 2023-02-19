const router = require('express').Router({mergeParams:true});

const {postSoyPudding,getSoyPudding, deleteSoyPudding} = require('../controllers/soyPuddingControllers.js');
const {postSoyMilk,getSoyMilk, deleteSoyMilk} = require('../controllers/soyMilkControllers.js');
const {postSnack,getSnack, deleteSnack} = require('../controllers/snackControllers.js');
const {postTable,getAllTables} = require('../controllers/tableControllers.js');

router.get('/', getAllTables);
// soy pudding
router.post('/:TableNumber/soyPudding', postSoyPudding)
router.get('/:TableNumber/soyPudding', getSoyPudding)
router.delete('/:TableNumber/soyPudding', deleteSoyPudding)
router.post('/:TableNumber', postTable);
// soy milk
router.post('/:TableNumber/soyMilk', postSoyMilk)
router.get('/:TableNumber/soyMilk', getSoyMilk)
router.delete('/:TableNumber/soyMilk', deleteSoyMilk)
// snack
router.post('/:TableNumber/snack', postSnack)
router.get('/:TableNumber/snack', getSnack)
router.delete('/:TableNumber/snack', deleteSnack)

module.exports = router;

