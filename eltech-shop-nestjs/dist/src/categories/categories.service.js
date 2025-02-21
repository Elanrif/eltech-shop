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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(dto) {
        const currentDate = new Date();
        const category = this.categoryRepository.create({
            ...dto,
            createdAt: currentDate,
            updatedAt: currentDate,
        });
        return this.categoryRepository.save(category);
    }
    async findAll() {
        return this.categoryRepository.find();
    }
    async findOne(id) {
        const category = this.categoryRepository.findOne({ where: { id } });
        if (!category)
            return null;
        return await category;
    }
    async update(id, dto) {
        const category = await this.findOne(id);
        if (!category)
            return new Error(`Category with id ${id} not found`);
        const currentDate = new Date();
        const updateDto = {
            ...dto,
            createdAt: currentDate,
            updatedAt: currentDate,
        };
        await this.categoryRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
            return {
                statusCode: 400,
                message: 'Not Found Category with id ' + id,
            };
        }
        return this.categoryRepository.delete(category);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map