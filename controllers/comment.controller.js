const CommentService = require("../services/comment.service");

const commentService = new CommentService();
class CommentController {
    async storeComment(req, res) {
        try {
            const comment = await commentService.store(req.body);
            res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Gagal menyimpan komentar.' });
        }
    }

    async deleteComment(req, res) {
        try {
            const comment = await commentService.delete(req.params.id)
            res.status(201).json({
                data: comment, message: "Berhasil menghapus komentar"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Gagal menghapus komentar." });
        }
    }
}

module.exports = CommentController;