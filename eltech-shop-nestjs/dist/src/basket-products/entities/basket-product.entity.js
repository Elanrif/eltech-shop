"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketProduct = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/entities/product.entity");
const basket_entity_1 = require("../../baskets/entities/basket.entity");
const variant_enum_1 = require("../dto/variant.enum");
let BasketProduct = class BasketProduct {
};
exports.BasketProduct = BasketProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BasketProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => basket_entity_1.Basket, (basket) => basket.basketProducts, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", basket_entity_1.Basket)
], BasketProduct.prototype, "basket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.basketProducts, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", product_entity_1.Product)
], BasketProduct.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], BasketProduct.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BasketProduct.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BasketProduct.prototype, "variant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BasketProduct.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BasketProduct.prototype, "updatedAt", void 0);
exports.BasketProduct = BasketProduct = __decorate([
    (0, typeorm_1.Entity)()
], BasketProduct);
//# sourceMappingURL=basket-product.entity.js.map