"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBasketDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_basket_dto_1 = require("./create-basket.dto");
class UpdateBasketDto extends (0, mapped_types_1.PartialType)(create_basket_dto_1.CreateBasketDto) {
}
exports.UpdateBasketDto = UpdateBasketDto;
//# sourceMappingURL=update-basket.dto.js.map