export const pcComponentList = [
  {
    id: 1,
    name: 'CPU',
    description: 'Central Processing Unit for high-performance computing',
    code: 'INT-CPU123',
    amount: 10,
    seller: 'TechMart',
    unitPrice: 250.99
  },
  {
    id: 2,
    name: 'Graphics Card',
    description:
      'Powerful GPU for rendering high-quality graphics in games and applications',
    code: 'NVD-GPU456',
    amount: 8,
    seller: 'PC Parts Inc.',
    unitPrice: 499.99
  },
  {
    id: 3,
    name: 'RAM',
    description: 'Random Access Memory for fast data access and multitasking',
    code: 'CRU-RAM789',
    amount: 20,
    seller: 'Memory World',
    unitPrice: 99.99
  },
  {
    id: 4,
    name: 'Motherboard',
    description:
      'Mainboard for connecting all components and providing interfaces',
    code: 'MBD-MOBO101',
    amount: 15,
    seller: 'Tech Depot',
    unitPrice: 149.99
  },
  {
    id: 5,
    name: 'SSD',
    description: 'Solid State Drive for fast storage and quick boot times',
    code: 'SSD-STORAGE222',
    amount: 25,
    seller: 'Storage Solutions',
    unitPrice: 129.99
  },
  {
    id: 6,
    name: 'Power Supply',
    description: 'PSU for providing stable power to all components',
    code: 'PSU-PWR333',
    amount: 12,
    seller: 'ElectroPower',
    unitPrice: 89.99
  }
]

export const inventoryList = [
  {
    id: 101,
    products: [
      {
        id: 1,
        name: 'CPU',
        description: 'Central Processing Unit for high-performance computing',
        code: 'INT-CPU123',
        amount: 10,
        seller: 'TechMart',
        unitPrice: 250.99
      },
      {
        id: 2,
        name: 'Graphics Card',
        description:
          'Powerful GPU for rendering high-quality graphics in games and applications',
        code: 'NVD-GPU456',
        amount: 8,
        seller: 'PC Parts Inc.',
        unitPrice: 499.99
      }
    ],
    date: '2024-05-28',
    description: 'Received a new batch of CPUs and Graphics Cards',
    provider: {
      id: 201,
      name: 'TechMart',
      location: '123 Main St, City, Country',
      contact: 'John Doe'
    }
  },
  {
    id: 102,
    products: [
      {
        id: 3,
        name: 'RAM',
        description:
          'Random Access Memory for fast data access and multitasking',
        code: 'CRU-RAM789',
        amount: 20,
        seller: 'Memory World',
        unitPrice: 99.99
      }
    ],
    date: '2024-05-26',
    description: 'Added new RAM modules to inventory',
    provider: {
      id: 203,
      name: 'Memory World',
      location: '789 Elm St, City, Country',
      contact: 'Bob Johnson'
    }
  },
  {
    id: 103,
    products: [
      {
        id: 5,
        name: 'Motherboard',
        description: 'High-performance motherboard for gaming',
        code: 'MB-GAM123',
        amount: 5,
        seller: 'Gamerz Gear',
        unitPrice: 299.99
      },
      {
        id: 6,
        name: 'Power Supply',
        description: '750W Modular Power Supply Unit',
        code: 'PSU-750W456',
        amount: 12,
        seller: 'Energy Efficient Supplies',
        unitPrice: 109.99
      }
    ],
    date: '2024-05-30',
    description: 'Received a shipment of motherboards and power supplies',
    provider: {
      id: 203,
      name: 'Gamerz Gear',
      location: '789 Gamer St, Game City, Country',
      contact: 'Mike Johnson'
    }
  },
  {
    id: 104,
    products: [
      {
        id: 7,
        name: 'Cooling Fan',
        description: '120mm RGB Cooling Fan',
        code: 'FAN-RGB123',
        amount: 50,
        seller: 'Cooling Solutions',
        unitPrice: 29.99
      },
      {
        id: 8,
        name: 'Case',
        description: 'ATX Mid Tower Gaming Case',
        code: 'CASE-ATX456',
        amount: 10,
        seller: 'Case World',
        unitPrice: 99.99
      }
    ],
    date: '2024-05-31',
    description: 'Received a shipment of cooling fans and cases',
    provider: {
      id: 204,
      name: 'Cooling Solutions',
      location: '321 Cool Ave, Chill City, Country',
      contact: 'Alice Brown'
    }
  },
  {
    id: 105,
    products: [
      {
        id: 9,
        name: 'Monitor',
        description: '27-inch 4K UHD Monitor',
        code: 'MON-4K123',
        amount: 7,
        seller: 'Display Tech',
        unitPrice: 399.99
      },
      {
        id: 10,
        name: 'Keyboard',
        description: 'Mechanical Gaming Keyboard',
        code: 'KB-MECH456',
        amount: 20,
        seller: 'Keyboard Kings',
        unitPrice: 79.99
      }
    ],
    date: '2024-06-01',
    description: 'Received a shipment of monitors and keyboards',
    provider: {
      id: 205,
      name: 'Display Tech',
      location: '987 Display Blvd, Screen City, Country',
      contact: 'Chris Green'
    }
  }
]

export const proveedores = [
  {
    id: 203,
    name: 'Memory World',
    location: '789 Elm St, City, Country',
    contact: 'Bob Johnson'
  },
  {
    id: 201,
    name: 'TechMart',
    location: '123 Main St, City, Country',
    contact: 'John Doe'
  },
  {
    id: 205,
    name: 'Display Tech',
    location: '987 Display Blvd, Screen City, Country',
    contact: 'Chris Green'
  },
  {
    id: 204,
    name: 'Cooling Solutions',
    location: '321 Cool Ave, Chill City, Country',
    contact: 'Alice Brown'
  }
]
