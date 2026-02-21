// ABC Retail — Sample POS Dataset
// This file is the single source of truth for all dashboard data.
// Swap this file per client without touching any app logic.

window.ABC_DATA = {

  meta: {
    company: "ABC Retail",
    industry: "Fashion & Apparel",
    currency: "LKR",
    period: "Jan 2024 – Jun 2024",
    generated: "2024-06-30"
  },

  stores: [
    { id: "S01", name: "City Centre", region: "Colombo", size_sqft: 4200, opened: "2018-03-01", manager: "Nimal Perera", terminals: 6 },
    { id: "S02", name: "Harbour Walk", region: "Colombo", size_sqft: 3100, opened: "2019-07-15", manager: "Dilani Silva", terminals: 4 },
    { id: "S03", name: "Lakeside Mall", region: "Kandy", size_sqft: 2800, opened: "2020-01-10", manager: "Ruwan Fernando", terminals: 4 },
    { id: "S04", name: "Sunset Plaza", region: "Galle", size_sqft: 2200, opened: "2021-05-20", manager: "Amara Jayawardena", terminals: 3 },
    { id: "S05", name: "North Gate", region: "Colombo", size_sqft: 3600, opened: "2017-11-01", manager: "Kasun Bandara", terminals: 5 },
    { id: "S06", name: "Marina Point", region: "Negombo", size_sqft: 1900, opened: "2022-02-14", manager: "Sachini Dias", terminals: 3 }
  ],

  products: [
    { sku: "DN-001", name: "Slim Fit Denim", category: "Bottoms", subcategory: "Denim", cost: 1800, price: 4500, supplier: "BlueLine Co" },
    { sku: "DN-002", name: "Wide Leg Denim", category: "Bottoms", subcategory: "Denim", cost: 2100, price: 5200, supplier: "BlueLine Co" },
    { sku: "TS-001", name: "Classic Tee", category: "Tops", subcategory: "T-Shirts", cost: 450, price: 1200, supplier: "TextilePro" },
    { sku: "TS-002", name: "Graphic Tee", category: "Tops", subcategory: "T-Shirts", cost: 550, price: 1500, supplier: "TextilePro" },
    { sku: "TS-003", name: "Polo Shirt", category: "Tops", subcategory: "Polo", cost: 900, price: 2400, supplier: "TextilePro" },
    { sku: "JK-001", name: "Bomber Jacket", category: "Outerwear", subcategory: "Jackets", cost: 3200, price: 7800, supplier: "OutdoorFab" },
    { sku: "JK-002", name: "Denim Jacket", category: "Outerwear", subcategory: "Jackets", cost: 2800, price: 6500, supplier: "BlueLine Co" },
    { sku: "AC-001", name: "Canvas Belt", category: "Accessories", subcategory: "Belts", cost: 300, price: 900, supplier: "AccessoriesHub" },
    { sku: "AC-002", name: "Leather Wallet", category: "Accessories", subcategory: "Wallets", cost: 700, price: 2100, supplier: "AccessoriesHub" },
    { sku: "AC-003", name: "Snapback Cap", category: "Accessories", subcategory: "Hats", cost: 400, price: 1100, supplier: "AccessoriesHub" },
    { sku: "FW-001", name: "Canvas Sneaker", category: "Footwear", subcategory: "Sneakers", cost: 1900, price: 4800, supplier: "SoleCraft" },
    { sku: "FW-002", name: "Slip-On Loafer", category: "Footwear", subcategory: "Loafers", cost: 2200, price: 5500, supplier: "SoleCraft" },
    { sku: "DR-001", name: "Midi Dress", category: "Dresses", subcategory: "Casual", cost: 1600, price: 3900, supplier: "StyleHouse" },
    { sku: "DR-002", name: "Wrap Dress", category: "Dresses", subcategory: "Smart Casual", cost: 2000, price: 4800, supplier: "StyleHouse" },
    { sku: "PT-001", name: "Chino Pants", category: "Bottoms", subcategory: "Chinos", cost: 1400, price: 3500, supplier: "TextilePro" }
  ],

  customers: [
    { id: "C001", joined: "2021-01-15", segment: "VIP", loyalty_tier: "Platinum", region: "Colombo", age_group: "35-44" },
    { id: "C002", joined: "2022-03-20", segment: "Regular", loyalty_tier: "Gold", region: "Kandy", age_group: "25-34" },
    { id: "C003", joined: "2023-11-05", segment: "New", loyalty_tier: "Silver", region: "Colombo", age_group: "18-24" },
    { id: "C004", joined: "2020-07-30", segment: "VIP", loyalty_tier: "Platinum", region: "Galle", age_group: "45-54" },
    { id: "C005", joined: "2024-01-10", segment: "New", loyalty_tier: "Bronze", region: "Negombo", age_group: "25-34" },
    { id: "C006", joined: "2019-05-12", segment: "VIP", loyalty_tier: "Platinum", region: "Colombo", age_group: "35-44" },
    { id: "C007", joined: "2022-08-22", segment: "Regular", loyalty_tier: "Gold", region: "Colombo", age_group: "25-34" },
    { id: "C008", joined: "2021-12-01", segment: "At Risk", loyalty_tier: "Silver", region: "Kandy", age_group: "45-54" },
    { id: "C009", joined: "2023-06-18", segment: "Regular", loyalty_tier: "Bronze", region: "Galle", age_group: "18-24" },
    { id: "C010", joined: "2024-02-28", segment: "New", loyalty_tier: "Bronze", region: "Colombo", age_group: "25-34" }
  ],

  // Monthly aggregated transactions — realistic retail patterns
  monthly_revenue: [
    { month: "Jan", revenue: 4820000, transactions: 3241, avg_basket: 1488, returns: 124000 },
    { month: "Feb", revenue: 4340000, transactions: 2987, avg_basket: 1453, returns: 98000 },
    { month: "Mar", revenue: 5610000, transactions: 3876, avg_basket: 1448, returns: 156000 },
    { month: "Apr", revenue: 6230000, transactions: 4102, avg_basket: 1519, returns: 188000 },
    { month: "May", revenue: 5980000, transactions: 3944, avg_basket: 1516, returns: 172000 },
    { month: "Jun", revenue: 6890000, transactions: 4521, avg_basket: 1524, returns: 203000 }
  ],

  store_performance: [
    { store: "City Centre", revenue: 9840000, transactions: 6821, avg_basket: 1442, conversion: 28, footfall: 24360, variance_vs_avg: 18 },
    { store: "Harbour Walk", revenue: 7320000, transactions: 5102, avg_basket: 1435, conversion: 24, footfall: 21258, variance_vs_avg: 5 },
    { store: "Lakeside Mall", revenue: 5890000, transactions: 4210, avg_basket: 1399, conversion: 21, footfall: 20047, variance_vs_avg: -8 },
    { store: "Sunset Plaza", revenue: 4120000, transactions: 3021, avg_basket: 1364, conversion: 19, footfall: 15900, variance_vs_avg: -15 },
    { store: "North Gate", revenue: 8760000, transactions: 6102, avg_basket: 1436, conversion: 26, footfall: 23469, variance_vs_avg: 12 },
    { store: "Marina Point", revenue: 2940000, transactions: 2415, avg_basket: 1217, conversion: 16, footfall: 15093, variance_vs_avg: -22 }
  ],

  category_revenue: [
    { category: "Bottoms", revenue: 12840000, units: 4821, margin_pct: 58, growth_pct: 12 },
    { category: "Tops", revenue: 9320000, units: 8102, margin_pct: 52, growth_pct: 8 },
    { category: "Footwear", revenue: 7610000, units: 2341, margin_pct: 61, growth_pct: 18 },
    { category: "Outerwear", revenue: 6890000, units: 1204, margin_pct: 63, growth_pct: -4 },
    { category: "Dresses", revenue: 5240000, units: 1821, margin_pct: 57, growth_pct: 22 },
    { category: "Accessories", revenue: 2970000, units: 4102, margin_pct: 68, growth_pct: 31 }
  ],

  customer_segments: [
    { segment: "VIP", count: 1840, pct: 18, avg_basket: 6200, avg_visits_month: 3.2, ltv: 124000 },
    { segment: "Regular", count: 4120, pct: 41, avg_basket: 3100, avg_visits_month: 1.8, ltv: 42000 },
    { segment: "New", count: 2980, pct: 30, avg_basket: 1800, avg_visits_month: 0.9, ltv: 8200 },
    { segment: "At Risk", count: 1100, pct: 11, avg_basket: 2400, avg_visits_month: 0.3, ltv: 18000 }
  ],

  loyalty_impact: [
    { tier: "Platinum", members: 1840, avg_basket: 6200, visits_per_month: 3.2, retention_rate: 94 },
    { tier: "Gold", members: 3210, avg_basket: 3800, visits_per_month: 2.1, retention_rate: 86 },
    { tier: "Silver", members: 4100, avg_basket: 2200, visits_per_month: 1.4, retention_rate: 71 },
    { tier: "Bronze", members: 2890, avg_basket: 1400, visits_per_month: 0.8, retention_rate: 52 }
  ],

  inventory: [
    { category: "Bottoms", current_stock: 2840, optimal_stock: 2400, reorder_point: 600, days_of_supply: 28, overstock_units: 440 },
    { category: "Tops", current_stock: 5120, optimal_stock: 4200, reorder_point: 1000, days_of_supply: 22, overstock_units: 920 },
    { category: "Footwear", current_stock: 980, optimal_stock: 1200, reorder_point: 300, days_of_supply: 18, overstock_units: -220 },
    { category: "Outerwear", current_stock: 620, optimal_stock: 500, reorder_point: 120, days_of_supply: 58, overstock_units: 120 },
    { category: "Dresses", current_stock: 740, optimal_stock: 800, reorder_point: 200, days_of_supply: 24, overstock_units: -60 },
    { category: "Accessories", current_stock: 3210, optimal_stock: 2800, reorder_point: 700, days_of_supply: 35, overstock_units: 410 }
  ],

  peak_hours: [
    { hour: "9AM", transactions: 82 },
    { hour: "10AM", transactions: 156 },
    { hour: "11AM", transactions: 248 },
    { hour: "12PM", transactions: 312 },
    { hour: "1PM", transactions: 284 },
    { hour: "2PM", transactions: 198 },
    { hour: "3PM", transactions: 276 },
    { hour: "4PM", transactions: 342 },
    { hour: "5PM", transactions: 468 },
    { hour: "6PM", transactions: 521 },
    { hour: "7PM", transactions: 489 },
    { hour: "8PM", transactions: 287 }
  ],

  payment_methods: [
    { method: "Card", pct: 58, transactions: 13241 },
    { method: "Cash", pct: 24, transactions: 5481 },
    { method: "Digital Wallet", pct: 12, transactions: 2741 },
    { method: "Buy Now Pay Later", pct: 6, transactions: 1370 }
  ],

  staff_performance: [
    { store: "City Centre", headcount: 18, avg_transactions_per_staff: 379, training_hrs: 24, satisfaction_score: 4.2 },
    { store: "Harbour Walk", headcount: 14, avg_transactions_per_staff: 364, training_hrs: 20, satisfaction_score: 4.0 },
    { store: "Lakeside Mall", headcount: 12, avg_transactions_per_staff: 351, training_hrs: 18, satisfaction_score: 3.8 },
    { store: "Sunset Plaza", headcount: 9, avg_transactions_per_staff: 336, training_hrs: 16, satisfaction_score: 3.6 },
    { store: "North Gate", headcount: 16, avg_transactions_per_staff: 381, training_hrs: 22, satisfaction_score: 4.1 },
    { store: "Marina Point", headcount: 8, avg_transactions_per_staff: 302, training_hrs: 14, satisfaction_score: 3.4 }
  ],

  // Table metadata for the data discovery screen
  tables: [
    {
      id: "transactions",
      label: "Transactions",
      icon: "receipt",
      description: "Every sale event recorded at POS terminals across all stores",
      record_count: 22671,
      fields: ["transaction_id", "timestamp", "store_id", "terminal_id", "customer_id", "items", "total_amount", "payment_method", "staff_id"],
      sample: [
        { transaction_id: "TXN-204891", timestamp: "2024-06-28 17:42:11", store_id: "S01", total_amount: "LKR 4,500", payment_method: "Card" },
        { transaction_id: "TXN-204892", timestamp: "2024-06-28 17:43:55", store_id: "S05", total_amount: "LKR 1,200", payment_method: "Cash" },
        { transaction_id: "TXN-204893", timestamp: "2024-06-28 17:45:02", store_id: "S01", total_amount: "LKR 9,800", payment_method: "Digital Wallet" }
      ]
    },
    {
      id: "products",
      label: "Products",
      icon: "tag",
      description: "Full SKU catalog with pricing, categories and supplier data",
      record_count: 15,
      fields: ["sku", "name", "category", "subcategory", "cost_price", "sell_price", "supplier"],
      sample: [
        { sku: "DN-001", name: "Slim Fit Denim", category: "Bottoms", sell_price: "LKR 4,500", supplier: "BlueLine Co" },
        { sku: "FW-001", name: "Canvas Sneaker", category: "Footwear", sell_price: "LKR 4,800", supplier: "SoleCraft" },
        { sku: "AC-002", name: "Leather Wallet", category: "Accessories", sell_price: "LKR 2,100", supplier: "AccessoriesHub" }
      ]
    },
    {
      id: "customers",
      label: "Customers",
      icon: "users",
      description: "Customer master with loyalty tiers, segments and visit history",
      record_count: 10040,
      fields: ["customer_id", "joined_date", "segment", "loyalty_tier", "region", "age_group", "lifetime_value"],
      sample: [
        { customer_id: "C001", segment: "VIP", loyalty_tier: "Platinum", region: "Colombo", ltv: "LKR 124,000" },
        { customer_id: "C002", segment: "Regular", loyalty_tier: "Gold", region: "Kandy", ltv: "LKR 42,000" },
        { customer_id: "C005", segment: "New", loyalty_tier: "Bronze", region: "Negombo", ltv: "LKR 8,200" }
      ]
    },
    {
      id: "stores",
      label: "Stores",
      icon: "store",
      description: "Store master with location, size, staff and terminal counts",
      record_count: 6,
      fields: ["store_id", "name", "region", "size_sqft", "opened_date", "manager", "terminals"],
      sample: [
        { store_id: "S01", name: "City Centre", region: "Colombo", size_sqft: 4200, terminals: 6 },
        { store_id: "S03", name: "Lakeside Mall", region: "Kandy", size_sqft: 2800, terminals: 4 },
        { store_id: "S06", name: "Marina Point", region: "Negombo", size_sqft: 1900, terminals: 3 }
      ]
    },
    {
      id: "inventory",
      label: "Inventory",
      icon: "package",
      description: "Daily stock snapshots per category with reorder levels and overstock flags",
      record_count: 1080,
      fields: ["date", "category", "store_id", "current_stock", "optimal_stock", "reorder_point", "days_of_supply"],
      sample: [
        { category: "Tops", current_stock: 5120, optimal_stock: 4200, days_of_supply: 22, status: "Overstock" },
        { category: "Footwear", current_stock: 980, optimal_stock: 1200, days_of_supply: 18, status: "Low Stock" },
        { category: "Outerwear", current_stock: 620, optimal_stock: 500, days_of_supply: 58, status: "Overstock" }
      ]
    },
    {
      id: "staff",
      label: "Staff",
      icon: "user-check",
      description: "Staff roster with store assignment, shift patterns and performance scores",
      record_count: 77,
      fields: ["staff_id", "store_id", "role", "tenure_months", "shift", "training_hrs", "satisfaction_score"],
      sample: [
        { store: "City Centre", headcount: 18, avg_transactions: 379, satisfaction: 4.2 },
        { store: "North Gate", headcount: 16, avg_transactions: 381, satisfaction: 4.1 },
        { store: "Marina Point", headcount: 8, avg_transactions: 302, satisfaction: 3.4 }
      ]
    }
  ]
};
