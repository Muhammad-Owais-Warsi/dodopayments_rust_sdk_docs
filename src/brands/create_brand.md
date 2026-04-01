# Create Brand

Create a new brand.

## Request

```rust
use dodopayments_rust::{models::CreateBrandRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .brands()
        .create()
        .body(CreateBrandRequest {
            name: Some("My Brand".to_string()),
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
| `description` | `object` |  |
| `name` | `object` |  |
| `statement_descriptor` | `object` |  |
| `support_email` | `object` |  |
| `url` | `object` |  |
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

Created Brand