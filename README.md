[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/igorkamyshev/notify.svg?branch=master)](https://travis-ci.org/igorkamyshev/notify)

# notify
Free service for sending notifications via public API with ease.

## description
Notify is especialy usefull for static website administrators who want to add a feedback form, but struggle with server side of that problem.

## usage
### Telegram

1. Add [Telegram bot](https://t.me/notify_me_robot) and save generated user ID
2. Send POST request to api.usenotify.info/v0/telegram with the following body:
```
{
    "user": "String",
    "message": {
        "medium": "String",
        "from": "String",
        "name": "String",
        "text": "String"
    }
}
```


## TODO
+ Email client

[Official Site](https://usenotify.info)
