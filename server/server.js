"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.static('../client/dist'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
