"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appError(err, _req, res, _next) {
    return res.status(500).json({ message: err.message });
}
exports.default = appError;
