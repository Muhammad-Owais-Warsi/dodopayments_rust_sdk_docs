# Update Product File

Update the files associated with a product.

## Request

```rust
use dodopayments_rust::{models::UploadProductFile, to_pretty_json, DodoPaymentsClientBuilder};

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
        .update_files()
        .body(UploadProductFile {
            file_name: "product_file.pdf".to_string(),
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
| `id` | `string` | `Product Id` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `file_name` | `string` |  |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `file_id` | `string` |  |
| `url` | `string` |  |

Aws s3 presigned URL. Upload image to this URL within 60s

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(