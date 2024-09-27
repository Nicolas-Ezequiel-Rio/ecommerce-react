export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  benefits: null | any
  promise: null | any
  shipping_score: number
}

export interface Seller {
  id: number
  nickname: string
}

export interface AttributeValue {
  id: string | null
  name: string
  struct: { number: number; unit: string } | null
  source: number
}

export interface Attribute {
  id: string
  name: string
  value_id: string | null
  value_name: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct: { number: number; unit: string } | null
  values: AttributeValue[]
  source: number
  value_type: string
}

export interface SalePriceConditions {
  eligible: boolean
  context_restrictions: string[]
  start_time: string
  end_time: string
}

export interface SalePrice {
  price_id: string
  amount: number
  conditions: SalePriceConditions
  currency_id: string
  exchange_rate: null | any
  payment_method_prices: any[]
  payment_method_type: string
  regular_amount: number
  type: string
  metadata: {
    promotion_id: string
    promotion_type: string
  }
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
  metadata: {
    meliplus_installments: boolean
    additional_bank_interest: boolean
  }
}

export interface DifferentialPricing {
  id: number
}

export interface Product {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: string
  listing_type_id: string
  sanitized_title: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: number | null
  sale_price: SalePrice
  available_quantity: number
  official_store_id: number
  official_store_name: string
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: Shipping
  stop_time: string
  seller: Seller
  attributes: Attribute[]
  installments: Installments
  winner_item_id: string | null
  catalog_listing: boolean
  discounts: null | any
  promotions: any[]
  differential_pricing: DifferentialPricing
  inventory_id: string
}
