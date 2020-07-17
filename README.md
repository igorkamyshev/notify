# notify

Service for sending notifications via public API with ease.

## Description

Notify is especialy usefull for static website administrators who want to add a feedback form, but struggle with server side of that problem.

## API

### Telegram

1. Create Telegram bot, save generated key, and pass it to Notify as enviroment variable
1. Start chat with your Telegram bot and save generated user ID
1. Send POST request to {NOTIFY_SERVER_URL}/v0/telegram with the following body:

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

## Usage

Notify is vailable as a [docker container](https://hub.docker.com/r/igorkamyshev/notify/) and can be deployed on your own server.

It exposes port `8080` and accepts `TELEGRAM_KEY` enviroment variable, which is the key for your own Telegram bot.

```sh
docker pull igorkamyshev/notify
docker run -e TELEGRAM_KEY=key igorkamyshev/notify
```

Also, you can build it from sources, of course.
