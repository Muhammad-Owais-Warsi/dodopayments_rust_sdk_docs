# Get Product Detail

Get detailed information about a specific product.

## Request

```rust
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let product_id = "prod_xxxxxxxxxx";

    let resp = client.products().id(product_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Product Id` |
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

Product Details

### 500 Status

Something went wrong :(