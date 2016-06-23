def((ListControlFiltersItem) => class extends Jinkela {
  get styleSheet() {
    return `
      :scope {
        float: left;
        text-align: left;
        margin-bottom: 1em;
      }
    `;
  }
  init() {
    let { scheme } = depot;
    if (!scheme) return location.hash = '';
    let { filters = [] } = scheme;
    ListControlFiltersItem.cast(filters).renderTo(this);
  }
});
