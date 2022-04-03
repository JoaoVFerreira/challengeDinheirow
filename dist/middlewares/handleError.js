"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appError(err, _req, res, _next) {
    if (err.status) {
        return res.status(err.status).json({ error: err.message });
    }
    return res.status(500).json({ message: err.message });
}
exports.default = appError;
