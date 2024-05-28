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
  }
  // Additional entries can be added here...
]
