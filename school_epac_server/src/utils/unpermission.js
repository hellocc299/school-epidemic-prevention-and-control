function unPermission(ctx) {
  if(ctx.user) {
    const { type } = ctx.user
    if(!type === 1 || !type === 3) {
      const error = new Error(errorType.UNPEIMISSION) 
      return ctx.app.emit('error', error, ctx)
    }
  } 
  return
}

module.exports = unPermission
