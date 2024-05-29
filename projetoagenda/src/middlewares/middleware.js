exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Isso vai para todas as views';
    next();
};
exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('404'); //se der erro, vai para a página 404
    }
    next();
};

exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
};
