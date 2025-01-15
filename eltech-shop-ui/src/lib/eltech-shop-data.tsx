export const eltechShopData = {
  categories: [
    {
      id: 1,
      name: "V\u00eatements",
      description: "Cat\u00e9gorie pour tous les types de v\u00eatements.",
      createdAt: "2025-01-15T04:05:18.106366",
      updatedAt: "2025-01-15T04:05:18.106374",
    },
    {
      id: 2,
      name: "Accessoires",
      description: "Cat\u00e9gorie pour les accessoires de mode.",
      createdAt: "2025-01-15T04:05:18.106377",
      updatedAt: "2025-01-15T04:05:18.106378",
    },
  ],
  products: [
    {
      name: "T-shirt Olivia Garden",
      description: "T-shirt de haute qualit\u00e9, confortable et l\u00e9ger.",
      detail:
        "Id\u00e9al pour un usage quotidien, disponible en plusieurs couleurs.",
      image: "soldes.webp",
      imageUrl: "soldes.webp",
      is_new: true,
      in_stock: true,
      brand: "Olivia Garden",
      color: "Blanc",
      category: {
        id: 1,
        name: "V\u00eatements",
      },
      quantity: 50,
      price: 29.3,
    },
    {
      name: "Casquette de sport",
      description:
        "Casquette l\u00e9g\u00e8re et respirante pour les activit\u00e9s sportives.",
      detail:
        "Disponible en diff\u00e9rentes couleurs, l\u00e9g\u00e8re et ajustable.",
      image: "soldes.webp",
      imageUrl: "soldes.webp",
      is_new: false,
      in_stock: true,
      brand: "Nike",
      color: "Noir",
      category: {
        id: 2,
        name: "Accessoires",
      },
      quantity: 100,
      price: 19.99,
    },
  ],
  users: [
    {
      id: "user_001",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "hashed_password_001",
      phoneNumber: "123456789",
      address: "123 Rue de Paris, T\u00e9touan",
      isAdmin: false,
      basket: {
        id: "basket_001",
        userId: "user_001",
        items: [
          {
            product: {
              name: "T-shirt Olivia Garden",
              description:
                "T-shirt de haute qualit\u00e9, confortable et l\u00e9ger.",
              detail:
                "Id\u00e9al pour un usage quotidien, disponible en plusieurs couleurs.",
              image: "https://example.com/images/tshirt.jpg",
              is_new: true,
              in_stock: true,
              brand: "Olivia Garden",
              color: "Blanc",
              category: {
                id: 1,
                name: "V\u00eatements",
              },
              quantity: 50,
              price: 29.3,
            },
            quantity: 2,
            totalPrice: 58.6,
          },
        ],
        totalPrice: 58.6,
        createdAt: "2025-01-15T04:05:18.106383",
        updatedAt: "2025-01-15T04:05:18.106385",
      },
    },
  ],
};