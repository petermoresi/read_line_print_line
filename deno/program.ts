(async () => {
  await Deno.copy(Deno.stdout, Deno.stdin);
})();
