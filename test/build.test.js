const execSync = require('child_process').execSync;

test('builds without errors', () => {
  execSync('npm run build', { stdio: 'inherit' });
});
