# notify

Service for sending notifications to Telegram via public API with ease

## Description

Notify is especialy usefull for:
+ feedback forms on static websites, without server side logic
+ notifications from external services like CircleCI, Integromat, etc.

## Instalation

Notify is vailable as a [docker container](https://hub.docker.com/r/igorkamyshev/notify/) and can be deployed on your own server.

It exposes port `8080` and accepts some enviroment variable:
+ `TELEGRAM_KEY` — private token for your own Telegram bot;
+ `PUBLIC_URL` — public address of your site (for telegram web-hook).

```sh
docker pull igorkamyshev/notify
docker run -e TELEGRAM_KEY=key -e PUBLIC_URL=https://mysite.com igorkamyshev/notify
```

Also, you can build it from sources, of course.

## Usage

1. Create Telegram bot, save generated key, and pass it to Notify as enviroment variable
2. Start chat with your Telegram bot and save generated user ID
3. Send POST request to {NOTIFY_SERVER_URL}/v1/send with the following body:

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