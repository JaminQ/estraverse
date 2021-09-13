const estraverse = module.exports = require('estraverse');
const extensions = [require('./extensions/jsx'), require('./extensions/fieldAndPrivate')];

extensions.forEach(extension => {
  for (const nodeType in extension) {
    estraverse.Syntax[nodeType] = nodeType;
    const keys = extension[nodeType];
    keys && (estraverse.VisitorKeys[nodeType] = keys);
  }
});