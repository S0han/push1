var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCf4IdYC4GRhNih0dCDnYkGwBJ6N3v-E1Mxjp8ZjLfTJy9NYrDhklESjr559ujPNN3KN5xOOaPDrUgqHrxiyLKI',
    privateKey: 'xNDCjKXCnBz5O7hm2TYtTsuRRbHpeiI4iVzD4fJYYZs'
  }

push.setVapidDetails('mailto:kanepereira18@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')