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
exports.CreateBasketLineDto = void 0;
const class_validator_1 = require("class-validator");
const basket_entity_1 = require("../../baskets/entities/basket.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const variant_enum_1 = require("./variant.enum");
class CreateBasketLineDto {
}
exports.CreateBasketLineDto = CreateBasketLineDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", basket_entity_1.Basket)
], CreateBasketLineDto.prototype, "basket", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", product_entity_1.Product)
], CreateBasketLineDto.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBasketLineDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(variant_enum_1.VariantType),
    __metadata("design:type", String)
], CreateBasketLineDto.prototype, "variant", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBasketLineDto.prototype, "amount", void 0);
//# sourceMappingURL=create-basket-line.dto.js.map