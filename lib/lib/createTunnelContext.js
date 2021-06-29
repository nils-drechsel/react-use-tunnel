"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTunnelContext = void 0;
const react_1 = require("react");
const createTunnelContext = (context) => {
    if (context)
        return react_1.createContext(context);
    else
        return react_1.createContext(null);
};
exports.createTunnelContext = createTunnelContext;
//# sourceMappingURL=createTunnelContext.js.map