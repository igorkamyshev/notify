export default [
    {
        name: 'Telegram',
        cover: 'telegram.jpg',
        description: (
            <div>
                <p>Add <a href="https://t.me/notify_me_robot" target="_blank">the bot</a> and save generated user ID.</p>
                <p>Send POST request to <code>/api/v0/telegram</code> with the following body:</p>
            </div>
        ),
        request: {
            user: 'String',
            message: {
                medium: 'String',
                from: 'String',
                name: 'String',
                text: 'String',
            },
        },
    },
]
