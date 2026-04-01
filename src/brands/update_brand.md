# Update Brand

Update an existing brand's details.

## Request

```rust
use dodopayments_rust::{models::PatchBrandRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let brand_id = "brand_xxxxxxxxxx";

    let resp = client
        .brands()
        .id(brand_id)
        .update()
        .body(PatchBrandRequest {
            name: Some("Updated Brand".to_string()),
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
| `id` | `string` | `Brand Id` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `description` | `object` |  |
| `image_id` | `object` | The UUID you got back from the presigned‐upload call |
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

Updated Brand

### 403 Status

Primary brand cannot be updated via this API 

### 404 Status

Brand not found