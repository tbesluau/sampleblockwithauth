# Sample block with authentication
Sample Salesforce Marketing Cloud Content Builder Block using the [blocksdk](https://github.com/salesforce-marketingcloud/blocksdk) and SSO OAuth.

## Deployment

### As a node app

```bash
npm install
npm start
```
One click deployment to heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Environment variables

The node app needs the following env variables set, that you can get from your MC enhanced package API integration screen:

 * AUTH_URL - the authentication endpoint for you inetgration
 * REST_URL - the REST endpoint for your integration
 * REDIRECT_URL - the redirect URL to be used by the MC after successfully authenticating someone
 * CLIENT_ID - the client id from the API integration so it can use the auth endpoing to get a token 
 * CLIENT_SECRET - the client secret from the API integration so it can use the auth endpoing to get a token 

## Building your own block from here

```bash
# do not fork
git clone https://github.com/tbesluau/sampleblock.git <my block name e.g. myblock>
cd <my block name e.g. mybock>
# create your own empty github repository for your new block and copy the clone url for it
git remote set-url origin <your empty repo url>
npm install
```

Files to edit:

 * src/main.js for your code
 * dist/index.html for your markup
 * package.json for your block name and description
 * README.md to be your own README
 
To test your changes locally:

```bash
npm run build; npm start
```

Then go to the block tester app and enter `http://localhost:3000` in the text field and click a block. You will have to allow unsecure iframes in your bowser (top right in the url bar in Chrome) first.

Once ready to deploy, commit your changes to your repo and click the deploy to heroku button on it.
