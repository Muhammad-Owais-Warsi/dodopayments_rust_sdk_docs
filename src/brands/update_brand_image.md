# Update Brand Image

Update the images associated with a brand.

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

    let resp = client
        .brands()
        .id(brand_id)
        .update_brand_image()
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
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `image_id` | `string` | UUID that will be used as the image identifier/key suffix |
| `url` | `string` | Presigned URL to upload the image |

Generate presigned upload URL for brand image