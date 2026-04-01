# Delete Product

Archive a product associated with your account.

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

    let resp = client.products().id(product_id).archive().send().await?;

    println!("Product archived successfully");

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `` |
## Responses

### 200 Status

Product Delected Successfully

### 410 Status

Product is deleted

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(