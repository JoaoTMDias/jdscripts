#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const react_router_1 = require("react-router");
const Start_1 = __importDefault(require("./steps/start/Start"));
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const ink_big_text_1 = __importDefault(require("ink-big-text"));
function Shell() {
    return (react_1.default.createElement(react_router_1.MemoryRouter, null,
        react_1.default.createElement(ink_gradient_1.default, { name: "cristal" },
            react_1.default.createElement(ink_big_text_1.default, { text: "jdscripts" })),
        react_1.default.createElement(Start_1.default, null)));
}
(0, ink_1.render)(react_1.default.createElement(Shell, null));
