window.manywho = {
    component: {
        register: jest.fn()
    },
    model: {
        getComponent: jest.fn().mockReturnValue({ contentValue: 'input' })
    },
    state: {
        getComponent: jest.fn().mockReturnValue(null)
    }
};

//console.log(global.manywho);
