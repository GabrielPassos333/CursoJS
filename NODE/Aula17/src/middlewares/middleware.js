exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Isso vai para todas as views';
    next();
};
exports.outroMiddleware = (req, res, next) => {
    next();
};

