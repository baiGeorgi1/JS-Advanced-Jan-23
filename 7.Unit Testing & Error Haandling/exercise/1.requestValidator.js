function validator(obj) {
    const correctMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const pattern = /[\w.]+/g;
    const ver = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const tokenMessage = /[<>&'"\\]+/g;
    if (!obj.method || !correctMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);

    }
    if (!obj.uri || obj.uri === '' || !pattern.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!obj.version || !ver.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (obj.message === undefined || tokenMessage.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));

