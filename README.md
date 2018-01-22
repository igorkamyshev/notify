[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# notify
Service for send notification by API

## API v0

### Telegram
Add [notify me](https://t.me/notify_me_robot) and save `user`, which he send to you.

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
