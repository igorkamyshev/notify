const createMessage = (data) => 
    [
        `*Medium:* ${data.medium}`,
        `*From*: ${data.name} <${data.from}>`,
        data.text,
    ].join("\n\n")


module.exports = {
    createMessage
}