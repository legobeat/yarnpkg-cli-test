const { getCli, runExit } = require('@yarnpkg/cli');
const { resolve } = require('node:path');

const cwd = resolve('.', 'subprojects', 'foo');

const main = async () => {
  const { defaultContext } = await getCli({
    cwd,
  });
  console.log({
    cwd,
    defaultContext,
  });
  await runExit(['run', 'sayhello'], {
    cwd,
    selfPath: null,
    pluginConfiguration: defaultContext.plugins,
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


