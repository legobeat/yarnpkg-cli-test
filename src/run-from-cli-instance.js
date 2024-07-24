const { getCli } = require('@yarnpkg/cli');
const { resolve } = require('node:path');

const cwd = resolve('.', 'subprojects', 'foo');

const main = async () => {
  const cli = await getCli({
    cwd,
  });
  await cli.runExit(['run', 'sayhello'], {
    cwd,
    selfPath: null,
    pluginConfiguration: cli.defaultContext.plugins,
  });
}

main().then(
  () => {
    console.log('Done');
  }).catch(
    (error) => {
      console.error('Error!', error);
    }
  )


