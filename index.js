
function Pagination(params) {
  const opts = {
    limit: 10
  };

  Object.assign(opts, params || {});

  this.init = (ctx, next) => {
    const limit = Number(ctx.request.query.limit) || opts.limit;
    const page  = (Number(ctx.request.page) || 1) - 1;
    const skip  = page * limit;
    ctx._pag = { limit, page, skip };
    return next();
  };
}


module.exports = Pagination;
