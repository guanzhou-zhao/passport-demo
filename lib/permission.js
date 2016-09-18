var permission = function (l) {
  return function (req, res, next) {
    if (req.user.privilege < l) {
      console.log('not permit...');
      req.flash('error', 'Higer privilege needed for the resource.')

      return res.redirect(req.headers.referer ? req.headers.referer : '/')
    }
    console.log('permit...');
    next()
  }
}

module.exports = permission
