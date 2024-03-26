function isTitleValid(value){
    return value && value.trim().length >= 3;
}

function isValidDescription(value){
    return value && value.trim().length >= 3;
}

exports.isTitleValid = isTitleValid;
exports.isValidDescription = isValidDescription;
