# Anti Clown
To prevent people from using the clown emoji 
## General Bot Setup
Visit https://discord.com/developers/applications and login.

Once logged in hit new application in top right corner.

After Creating your new application, in the application settings visit the "bot" tab. 

Add a bot. 

Once you have created your bot find where it says "token" and copy.

Once you have copied your bot token, paste this into the config.json file under "token" or in heroku under token. 

## Inviting to discord server
To invite your bot to your server go to the application settings, the "General Information Tab" and copy the client ID. 

Once the Client ID is copied to clipboard, visit https://discordapi.com/permissions.html

Select the permissions the bot needs (Administrator is find for this)

Then where it says "Oauth Url Generator" paste the client ID. 

The link at the bottom will change and you can visit that invite your bot!

## Installing Dependencies 
If running locally (not Heroku) dependencies will be needed.

Insure node.js v12+ is installed 

To install needed packages run - `npm install`  within directory

## Config and Starting Bot (Only use if running locally)
***Within the config.json change these lines.*** 

**prefix** - Prefix for Bot Commands

**token**  - Discord Bot Token 

**rmessage** - The message sent after deletion of clown emoji 

After run `node .` to start the bot!

## Heroku
Alternatively, you can also run on heroku, just follow steps of button below. 

<a href="https://heroku.com/deploy?template=https://github.com/Greenpilot4/anti-clown-discord/tree/heroku">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
