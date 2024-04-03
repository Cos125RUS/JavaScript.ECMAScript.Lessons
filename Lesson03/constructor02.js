function createObject(constructor) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));
    if (!result || typeof result === 'string' || typeof result
        === 'number' || typeof result === 'boolean') {
        return obj
    } else {
        return result;
    }
}
