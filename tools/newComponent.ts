const fs = require('fs');
const commander = require('commander');

if (process.argv.length < 3) {
  console.log('Usage: newComponent <name>');
  process.exit(1);
}

const program = new commander.Command();

const name = process.argv[process.argv.length - 1];

program
  .option('-s, --style', 'create style file')
  .parse(process.argv);

const componentSnippet = `
import s from './index.module.css';

const ${name} = () => (
  <div className={s.container}></div>
);

export default ${name};
`;

const styleSnippet = ``

const dir = `./src/components/${name}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const componentFile = `${dir}/index.tsx`;

fs.writeFile(componentFile, componentSnippet, (err: string) => {
  if (err) {
    return console.log(err);
  }
  console.log(`${componentFile} created`);
});

if (program.style) {
  const styleFile = `${dir}/index.module.css`;
  fs.writeFile(styleFile, styleSnippet, (err: string) => {
    if (err) {
      return console.log(err);
    }
    console.log(`${styleFile} created`);
  });
}

export {};
