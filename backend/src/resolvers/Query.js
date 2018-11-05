// if we want to use prisma db query directly.
// const { forwardTo } = require("prisma-binding");

const Query = {
  //   items: forwardTo("db") ==> if we want to use prisma db query directly.
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items();
    return items;
  }
};

module.exports = Query;
