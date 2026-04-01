# Create Product Short Link

Create a short checkout URL with a custom slug for a product.

## Request

```rust
use dodopayments_rust::{
    models::CreateShortLinkRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

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
        .create_short_link()
        .body(CreateShortLinkRequest {
            slug: "my-product-link".to_string(),
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
| `slug` | `string` | Slug for the short link. |
| `static_checkout_params` | `object` | Static Checkout URL parameters to apply to the resulting short URL. |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `full_url` | `string` | Full URL. |
| `short_url` | `string` | Short URL. |

Short URL

### 404 Status

Product not found

### 409 Status

Slug is already taken

### 500 Status

Something went wrong :(