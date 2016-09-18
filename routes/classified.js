var router = require('express').Router()
var permission = require('../lib/permission')
module.exports = router
router.use(permission(2))
function render (res, link, data) {
  res.render('classified/' + link, data)
}
router.get('/', function (req, res) {
  render(res, 'index', {flash: req.flash('error')})
});

router.get('/:id', permission(3), function (req, res, next) {
  render(res, 'content', {id: req.params.id})
})
