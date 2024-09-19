function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push((function (index) {
            return function () {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const functionsArray = createFunctionArray();
functionsArray[0](); // Logs: 0
functionsArray[1](); // Logs: 1
