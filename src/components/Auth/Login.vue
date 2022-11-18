<template>
  <h1 class="text-primary text-center">Login</h1>
  <form>
    <div class="form-group">
      <label for="email">Email: </label>
      <input type="email" class="form-control" />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" />
    </div>
    <button class="btn btn-primary">Login</button>
    <br />
    <div class="text-center switch-sign mb-3" @click="$emit('switch_sign')">
      Are you create account?
    </div>
    <h3 class="text-center text-secondary">&copy;2022 Ar Kar Lin</h3>
  </form>
</template>

  <script>
export default {};
</script>

  <style>
</style>
