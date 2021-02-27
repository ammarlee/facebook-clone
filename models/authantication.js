module.exports = (req,res,next)=>{
    if (!req.session.isAuthanticated) {
      return  res.redirect('/')
        
    }
    next()
}