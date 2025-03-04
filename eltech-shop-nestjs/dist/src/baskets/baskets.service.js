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
exports.BasketsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const basket_entity_1 = require("./entities/basket.entity");
const product_entity_1 = require("../products/entities/product.entity");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const basket_line_entity_1 = require("../basket-lines/entities/basket-line.entity");
let BasketsService = class BasketsService {
    constructor(basketLineRepository, basketRepository, productRepository, userRepository) {
        this.basketLineRepository = basketLineRepository;
        this.basketRepository = basketRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async addProductToBasket(userId, productId, variant, count = 1) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: ['basket'],
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        let basket = user.basket;
        if (!basket) {
            basket = this.basketRepository.create({ user });
            await this.basketRepository.save(basket);
            user.basket = basket;
            await this.userRepository.save(user);
        }
        const product = await this.productRepository.findOne({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        let basketLine = await this.basketLineRepository.findOne({
            where: { basket: { id: basket.id }, product: { id: productId }, variant },
        });
        if (basketLine) {
            console.log('[basketService] update a basket line');
            basketLine.count = count;
            basketLine.unitPrice = product.price;
            basketLine.amount = product.price * count;
        }
        else {
            console.log('[basketService] create a basket line');
            basketLine = this.basketLineRepository.create({
                basket,
                product,
                variant,
                count,
                unitPrice: product.price,
                amount: product.price * count,
            });
        }
        const saved = await this.basketLineRepository.save(basketLine);
        await this.updateBasketTotalQtyAndPrice(basket.id);
        return this.basketLineRepository.findOne({
            where: { id: saved.id },
            relations: ['product'],
        });
    }
    create(createBasketDto) {
        return 'This action adds a new basket';
    }
    findAll() {
        return `This action returns all baskets`;
    }
    findOne(id) {
        const basket = this.basketRepository.findOne({
            where: { id },
            relations: ['basketLines', 'basketLines.product'],
        });
        if (!basket) {
            throw new common_1.NotFoundException('Basket not found');
        }
        return basket;
    }
    update(id, updateBasketDto) {
        return `This action updates a #${id} basket`;
    }
    remove(id) {
        return `This action removes a #${id} basket`;
    }
    async updateBasketTotalQtyAndPrice(id) {
        const basket = await this.basketRepository?.findOne({
            where: { id },
            relations: ['basketLines'],
        });
        if (!basket) {
            throw new common_1.NotFoundException('Basket not found');
        }
        const totalCount = basket.basketLines?.reduce((sum, basketLine) => sum + basketLine.count, 0);
        const subTotalAmount = basket.basketLines?.reduce((sum, basketLine) => sum + basketLine.amount, 0);
        basket.totalCount = totalCount;
        basket.subTotalAmount = subTotalAmount;
        basket.totalAmount = totalCount * subTotalAmount;
        const basket_ = await this.basketRepository.save(basket);
        console.log('[updateBasketTotalQtyAndPrice] : ', basket_);
    }
};
exports.BasketsService = BasketsService;
exports.BasketsService = BasketsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(basket_line_entity_1.BasketLine)),
    __param(1, (0, typeorm_1.InjectRepository)(basket_entity_1.Basket)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BasketsService);
//# sourceMappingURL=baskets.service.js.map