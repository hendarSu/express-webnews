const { comments } = require('../models');

class CommentService {

    constructor() {
        this.commentModel = comments
    }

    async store(payloady) {
        const { name, comment, news_id } = payloady;
        const date = new Date();

        const commentNew = this.commentModel.create({
            name, comment, news_id,
            createdAt: date, updatedAt: date
        });

        return commentNew;
    }

    async delete(id) {
        const commentDelete = this.commentModel.destroy({
            where: {
                id
            },
        });

        return commentDelete
    }
}

module.exports = CommentService;