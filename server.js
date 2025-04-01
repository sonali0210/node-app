const http = require('http');

const httpServer = http.createServer((request, response) =>{
    const url = request.url;
    console.log(`Received URL: ${url}`);
    // console.log("I have received request ...");
    // console.log(`Let me respond ...`);
    // response.end(`Hello from server .....`);    
    // response.end(`Request URL:: ${url}`);
    switch (url) {
        case '/':
            response.end(`This is Home Page ... `);
            break;
        case '/home':
            response.end(`Home Content ... `);
            break;
        case '/about':
            response.end(`About US Content ... `);
            break;
        case '/project':
            response.end(`Project Details ... `);
            break
        case '/skills':
            response.end(`Skills Details ... `);
            break
        default:
            console.log(`Invalid URL:: ${url}`);
            response.end(`Invalid URL:: ${url}`);    
            break;
    }
} );

httpServer.listen(8080, () => {
    console.log('Server is running on port 8080');
});