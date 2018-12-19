const copy = require('recursive-copy');
const download = require('download');
const fs = require('fs-extra');
const merger = require('three-way-merger');

(async function() {
    console.log('Downloading update...');
    await download('https://github.com/manywho/ui-custom-component/archive/master.zip', '__update__', { extract: true });

    console.log('Merging updated dependencies in package.json');
    const source = JSON.parse(await fs.readFile('__update__/ui-custom-component-master/package.json'));
    const ours = JSON.parse(await fs.readFile('package.json'));
    const theirs = JSON.parse(await fs.readFile('__update__/ui-custom-component-master/package.json'));

    const result = merger.merge({source: source, ours: ours, theirs: theirs});

    Object.keys(result).forEach(key => {        
        if (!ours[key])
            ours[key] = key === 'bundledDependencies' ? [] : {};
    
        applyOperations(result[key], ours[key]);
    });

    console.log('Applying update to source files:');
    const copied = await copy('__update__/ui-custom-component-master', './', { 
        overwrite: true,
        filter: (filename) => {
            if (filename.includes('interfaces') 
                || filename.includes('src/utils')
                || (filename.includes('webpack') && !process.argv.includes('-exclude-webpack'))
                || filename === 'upload.js'
                || filename === 'tslint.json'
                || filename === 'tsconfig.json'
                || filename === 'upload.js')
                return true;

            return false;
        }
    });
    
    copied
        .map(item => item.dest)
        .forEach(item => console.log(item));

    await fs.writeFile('package.json', JSON.stringify(ours, null, 2));
    await fs.remove('__update__');

    console.log('Update complete');
}());


const applyOperations = (operations, deps) => {
    operations.remove.forEach(dep => delete deps[dep.name]);
    operations.add.forEach(dep => deps[dep.name] = dep.version);
    operations.change.forEach(dep => deps[dep.name] = dep.version);
}