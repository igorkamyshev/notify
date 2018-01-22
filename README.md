[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# notify
Service for send notification by API

## API v0

### Telegram
Add [NotifyBot](t.me/novel_notify_bot) and use `chat id`, which he send to you, as `user`.

`/api/v0/telegram`
```
{
	"user": String,
	"message": {
		"medium": String,
		"from": String,
		"name": String,
		"text": String
	}
}
```
