"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var path;
path = '.env.test';
if (process.env.NODE_ENV === 'dev')
    path = '.env.dev';
if (process.env.NODE_ENV === 'production')
    path = '.env';
dotenv_1["default"].config({ path: path });
