"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTunnel = void 0;
const react_1 = require("react");
const createTunnel = (context) => {
    if (context)
        return react_1.createContext(context);
    else
        return react_1.createContext(null);
};
exports.createTunnel = createTunnel;
//# sourceMappingURL=createTunnel.js.map