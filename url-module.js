const url = require('url');

const urlString = 'https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82852543379s';
const urlObject = url.parse(urlString, true);
console.log(urlObject);

console.table(urlObject);

console.log(`Hostname: ${urlObject.hostname}`);
console.log(`Protocol: ${urlObject.protocol}`);
console.log(`Port: ${urlObject.port}`);
console.log(`Path Parameter: ${urlObject.path}`);
console.log(`Query Parameter: ${JSON.stringify(urlObject.query)}`);


// const url = require('url');
// const formattedURL = url.format({
//     protocol: 'https',
//     hostname: 'www.google.com',
//     pathname: '/search',
//     query: {
//         q: 'nodejs',
//         q2: 'javascript',
//     },
// });
// console.log(formattedURL);
