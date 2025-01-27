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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketsController = void 0;
const common_1 = require("@nestjs/common");
const baskets_service_1 = require("./baskets.service");
const create_basket_dto_1 = require("./dto/create-basket.dto");
const update_basket_dto_1 = require("./dto/update-basket.dto");
let BasketsController = class BasketsController {
    constructor(basketsService) {
        this.basketsService = basketsService;
    }
    create(createBasketDto) {
        return this.basketsService.create(createBasketDto);
    }
    findAll() {
        return this.basketsService.findAll();
    }
    findOne(id) {
        return this.basketsService.findOne(+id);
    }
    update(id, updateBasketDto) {
        return this.basketsService.update(+id, updateBasketDto);
    }
    remove(id) {
        return this.basketsService.remove(+id);
    }
};
exports.BasketsController = BasketsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_basket_dto_1.CreateBasketDto]),
    __metadata("design:returntype", void 0)
], BasketsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasketsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasketsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_basket_dto_1.UpdateBasketDto]),
    __metadata("design:returntype", void 0)
], BasketsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasketsController.prototype, "remove", null);
exports.BasketsController = BasketsController = __decorate([
    (0, common_1.Controller)('baskets'),
    __metadata("design:paramtypes", [baskets_service_1.BasketsService])
], BasketsController);
//# sourceMappingURL=baskets.controller.js.map