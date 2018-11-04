[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/igorkamyshev/notify.svg?branch=master)](https://travis-ci.org/igorkamyshev/notify)

# notify
Free service for sending notifications via public API with ease.

## Description
Notify is especialy usefull for static website administrators who want to add a feedback form, but struggle with server side of that problem.

## Usage
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

## Deploy on your server
Notify is also available as a [docker container](https://hub.docker.com/r/igorkamyshev/notify/) and can be deployed on your own server

### Telegram
It exposes port ```8080``` and accepts ```TELEGRAM_KEY``` enviroment variable,  which is the key for your own Telegram bot.

## Usage as a docker container

```docker pull igorkamyshev/notify```

```docker run --env-file ./env igorkamyshev/notify```


## TODO
+ Email client

[Official Site](https://usenotify.info)
