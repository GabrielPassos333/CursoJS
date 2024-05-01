//module.exports = (req, res, next) => {
    //console.log('Passei no middleware global');
    // if(req.body.cliente){
    //     req.body.cliente = req.body.cliente.replace('Miranda','Não USE MIRANDA');
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // }
     //next();
//}
exports.middlewareGlobal = (req, res, next) => {
    next();
};
// exports.outroMiddleware = (req, res, next) => {
//      console.log('Sou seu outro middleware');
//      next();
// }