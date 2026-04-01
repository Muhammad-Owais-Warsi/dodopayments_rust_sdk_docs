# Get Brand Detail

Retrieve a specific brand by ID.

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

    let brand_id = "brand_xxxxxxxxxx";

    let resp = client.brands().id(brand_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Brand Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `brand_id` | `string` |  |
| `business_id` | `string` |  |
| `description` | `object` |  |
| `enabled` | `boolean` |  |
| `image` | `object` |  |
| `name` | `object` |  |
| `reason_for_hold` | `object` | Incase the brand verification fails or is put on hold |
| `statement_descriptor` | `string` |  |
| `support_email` | `object` |  |
| `url` | `object` |  |
| `verification_enabled` | `boolean` |  |
| `verification_status` | `BrandVerificationStatus` |  |

Get a single brand

### 404 Status

Brand not found