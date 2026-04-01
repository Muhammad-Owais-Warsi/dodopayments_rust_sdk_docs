# Create Product

Create a new product.

## Request

```rust
use dodopayments_rust::{models::CreateProductRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .products()
        .create()
        .body(CreateProductRequest {
            name: "Premium Plan".to_string(),
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `object` | Addons available for subscription product |
| `brand_id` | `object` | Brand id for the product, if not provided will default to primary brand |
| `credit_entitlements` | `object` | Optional credit entitlements to attach (max 3) |
| `description` | `object` | Optional description of the product |
| `digital_product_delivery` | `object` |  |
| `license_key_activation_message` | `object` | Optional message displayed during license key activation |
| `license_key_activations_limit` | `object` | The number of times the license key can be activated. Must be 0 or greater |
| `license_key_duration` | `object` |  |
| `license_key_enabled` | `object` | When true, generates and sends a license key to your customer. Defaults to false |
| `metadata` | `Metadata` | Additional metadata for the product |
| `name` | `string` | Name of the product |
| `price` | `Price` | Price configuration for the product |
| `tax_category` | `TaxCategory` | Tax category applied to this product |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `object` | Available Addons for subscription products |
| `brand_id` | `string` |  |
| `business_id` | `string` | Unique identifier for the business to which the product belongs. |
| `created_at` | `string` | Timestamp when the product was created. |
| `credit_entitlements` | `array<CreditEntitlementMappingResponse>` | Attached credit entitlements with settings |
| `description` | `object` | Description of the product, optional. |
| `digital_product_delivery` | `object` |  |
| `image` | `object` | URL of the product image, optional. |
| `is_recurring` | `boolean` | Indicates if the product is recurring (e.g., subscriptions). |
| `license_key_activation_message` | `object` | Message sent upon license key activation, if applicable. |
| `license_key_activations_limit` | `object` | Limit on the number of activations for the license key, if enabled. |
| `license_key_duration` | `object` |  |
| `license_key_enabled` | `boolean` | Indicates whether the product requires a license key. |
| `metadata` | `Metadata` | Additional custom data associated with the product |
| `name` | `object` | Name of the product, optional. |
| `price` | `Price` | Pricing information for the product. |
| `product_collection_id` | `object` | The product collection ID this product belongs to, if any |
| `product_id` | `string` | Unique identifier for the product. |
| `tax_category` | `TaxCategory` | Tax category associated with the product. |
| `updated_at` | `string` | Timestamp when the product was last updated. |

Product Created Successfully

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(