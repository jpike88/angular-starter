//@ts-check
const {
  fusebox,
  sparky
} = require("fuse-box");
class Context {
  constructor(npmTag = 'latest', versionBumpType = 2) {
    npmTag;
    versionBumpType;
  }
}
const { src, task, exec } = sparky(Context);
const fuse = fusebox({
  target: 'browser',
  logging: {
    level: 'succinct',
  },
  watch: true,
  devServer: {
    httpServer: {
      port: 9999,
    },
  },
  allowSyntheticDefaultImports: true,
  sourceMap: { vendor: true },
  cache: false,
  webIndex: {
    publicPath: '.',
    template: 'src/index.html',
  },
  homeDir: __dirname,
  entry: 'src/main.browser.ts'
});


task('default', () => {

  fuse.runProd();

});



task('default', () => {

  fuse.runDev();

});
