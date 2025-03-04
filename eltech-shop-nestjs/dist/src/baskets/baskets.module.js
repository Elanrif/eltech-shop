"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketsModule = void 0;
const common_1 = require("@nestjs/common");
const baskets_service_1 = require("./baskets.service");
const baskets_controller_1 = require("./baskets.controller");
const typeorm_1 = require("@nestjs/typeorm");
const basket_entity_1 = require("./entities/basket.entity");
const basket_line_entity_1 = require("../basket-lines/entities/basket-line.entity");
const product_entity_1 = require("../products/entities/product.entity");
const user_entity_1 = require("../users/entities/user.entity");
let BasketsModule = class BasketsModule {
};
exports.BasketsModule = BasketsModule;
exports.BasketsModule = BasketsModule = __decorate([
    (0, common_1.Module)({
        controllers: [baskets_controller_1.BasketsController],
        imports: [typeorm_1.TypeOrmModule.forFeature([basket_entity_1.Basket, basket_line_entity_1.BasketLine, product_entity_1.Product, user_entity_1.User])],
        providers: [baskets_service_1.BasketsService],
    })
], BasketsModule);
//# sourceMappingURL=baskets.module.js.map