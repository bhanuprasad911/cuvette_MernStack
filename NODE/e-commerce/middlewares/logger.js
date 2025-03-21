const logger = (req,res,next)=>{
    console.log('I am a logger middleware');
    next();
}

module.exports = {
    logger
}