module.exports = {
  target: (dependencyName) => {
    // global-agent: https://github.com/gajus/global-agent/issues/77
    // rxjs: Requires major refactoring
    if (['global-agent', 'rxjs'].includes(dependencyName))
      return 'minor';
    return 'latest';
  }
}
