const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
const rp = require('request-promise-native');
const colors = require('colors/safe');
const fs = require('fs');
const glob = require('glob-promise');
const mime = require('mime-types');
const path = require('path');
const clipboardy = require('clipboardy');

const baseUrl = 'https://flow.manywho.com';

(async function() {
    const credentials = await inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: "What's your Boomi Flow email?",
        },
        {
            type: 'password',
            name: 'password',
            message: 'Whats your Boomi Flow password?',
        },
    ]);
    
    console.log(colors.blue.dim('Loading Tenants...'));

    const token = await rp({
        method: "POST",
        uri: baseUrl + "/api/draw/1/authentication",
        body: {
            "loginUrl": baseUrl + "/plugins/manywho/api/draw/1/authentication",
            "username": credentials.email,
            "password": credentials.password
        },
        headers: {
            'ManyWhoTenant': 'da497693-4d02-45db-bc08-8ea16d2ccbdf'
        },
        json: true
    });

    const me = await rp({
        method: "GET",
        uri: baseUrl + "/api/admin/1/users/me",
        headers: {
            'authorization': token,
        },
        json: true
    });

    const tenantChoices = me.tenants.map(tenant => { 
        return { name: tenant.developerName, value: tenant.id }
    });

    const tenant = await inquirer.prompt([
        {
            type: 'autocomplete',
            name: 'id',
            message: 'Select the tenant that you want to upload the custom component to',
            source: (answers, input) => {
                input = input || '';
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(tenantChoices.filter(item => item.name.indexOf(input) !== -1));
                    }, 10);
                });
            }
        }
    ]);

    const authToken = await rp({
        method: "GET",
        uri: baseUrl + "/api/draw/1/authentication/" + tenant.id,
        headers: {
            'authorization': token,
        }
    });

    const authTokenClean = authToken.replace(/\"/g, '');

    const fileNames = await glob('build/*.*');

    console.log('Preparing to upload:');
    console.log(fileNames.join('\r\n'));

    const should = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'upload',
            message: "Are you sure you want to upload new assets? This will overwrite any existing assets with the same name",
        },
    ]);

    if (should.upload) {

        for (let i = 0; i < fileNames.length; i++) {
            console.log(`Uploading ${fileNames[i]}`);

            const contentType = mime.lookup(path.extname(fileNames[i]));

            const uploadUri = await rp({
                method: 'POST',
                uri: baseUrl + "/api/draw/1/assets/upload",
                headers: {
                    'authorization': authTokenClean,
                    'ManyWhoTenant': tenant.id,
                    'Content-Type': 'application/json'
                },
                body: {
                    contentType,
                    key: path.basename(fileNames[i])
                },
                json: true
            });
        
            await rp({
                method: 'PUT',
                uri: uploadUri,
                body: fs.readFileSync(fileNames[i]),
                headers: {
                    'Content-Type': contentType
                }
            });
        }

        let customResources = 'customResources: [';
        fileNames.forEach(fileName => {
            customResources += `'https://files-manywho-com.s3.amazonaws.com/${tenant.id}/${path.basename(fileName)}',`;
        });
        customResources = customResources.slice(0, -1);
        customResources += '],';

        clipboardy.writeSync(customResources);
        console.log(customResources);
        console.log('Custom Resources copied to clipboard!');
    }
}());