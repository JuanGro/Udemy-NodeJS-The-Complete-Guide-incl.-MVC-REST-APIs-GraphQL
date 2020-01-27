const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Thank you 4 all</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></input></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/users') {
        res.write('<html>');
        res.write('<body>');
        res.write('<table><ul><li>User 1</li></ul><ul><li>User 2</li></ul></table>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            return res.end();
        });
    }
};

exports.handler = requestHandler;
