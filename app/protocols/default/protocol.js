module.exports = {
    parameters: {
        name: "Default"
    },
    skipFunctions: {
        exampleSkip: function() { return false; }
    },
    stages: [
        {label:'Example',page:'intro.html'}
    ]
};