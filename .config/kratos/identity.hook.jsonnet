function(ctx) {
  id: ctx.identity.id,
  email: ctx.identity.traits.email,
  firstName: ctx.identity.traits.name.first,
  lastName: ctx.identity.traits.name.last,
}
