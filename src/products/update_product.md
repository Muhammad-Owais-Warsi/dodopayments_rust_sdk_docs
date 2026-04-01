# Update Product

Update a product's details.

## Request

```rust
use dodopayments_rust::{models::PatchProductRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let product_id = "prod_xxxxxxxxxx";

    let resp = client
        .products()
        .id(product_id)
        .update()
        .body(PatchProductRequest {
            name: Some("Updated Product".to_string()),
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `object` | Available Addons for subscription products |
| `brand_id` | `object` |  |
| `credit_entitlements` | `object` | Credit entitlements to update (replaces all existing when present) Send empty array to remove all, omit field to leave unchanged |
| `description` | `object` | Description of the product, optional and must be at most 1000 characters. |
| `digital_product_delivery` | `object` |  |
| `image_id` | `object` | Product image id after its uploaded to S3 |
| `license_key_activation_message` | `object` | Message sent to the customer upon license key activation. Only applicable if `license_key_enabled` is `true`. This message contains instructions for activating the license key. |
| `license_key_activations_limit` | `object` | Limit for the number of activations for the license key. Only applicable if `license_key_enabled` is `true`. Represents the maximum number of times the license key can be activated. |
| `license_key_duration` | `object` |  |
| `license_key_enabled` | `object` | Whether the product requires a license key. If `true`, additional fields related to license key (duration, activations limit, activation message) become applicable. |
| `metadata` | `object` |  |
| `name` | `object` | Name of the product, optional and must be at most 100 characters. |
| `price` | `object` |  |
| `tax_category` | `object` |  |
## Responses

### 200 Status

Product Updated Successfully

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(