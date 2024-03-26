class NotesNotFoundError {
    constructor(message){
        this.message = message;
        this.status = 404;
    }
}

exports.NotesNotFoundError = NotesNotFoundError;