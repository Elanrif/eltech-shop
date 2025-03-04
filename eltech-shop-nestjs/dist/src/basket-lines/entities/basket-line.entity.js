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
exports.BasketLine = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/entities/product.entity");
const basket_entity_1 = require("../../baskets/entities/basket.entity");
const variant_enum_1 = require("../dto/variant.enum");
let BasketLine = class BasketLine {
};
exports.BasketLine = BasketLine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BasketLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => basket_entity_1.Basket, (basket) => basket.basketLines, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", basket_entity_1.Basket)
], BasketLine.prototype, "basket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.basketLines, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", product_entity_1.Product)
], BasketLine.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], BasketLine.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], BasketLine.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], BasketLine.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BasketLine.prototype, "variant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BasketLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BasketLine.prototype, "updatedAt", void 0);
exports.BasketLine = BasketLine = __decorate([
    (0, typeorm_1.Entity)()
], BasketLine);
//# sourceMappingURL=basket-line.entity.js.map