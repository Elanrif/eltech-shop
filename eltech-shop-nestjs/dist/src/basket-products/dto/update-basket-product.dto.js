"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBasketProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_basket_product_dto_1 = require("./create-basket-product.dto");
class UpdateBasketProductDto extends (0, mapped_types_1.PartialType)(create_basket_product_dto_1.CreateBasketProductDto) {
}
exports.UpdateBasketProductDto = UpdateBasketProductDto;
//# sourceMappingURL=update-basket-product.dto.js.map