# Delete Discount

Delete a discount from your account.

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

    let discount_id = "dis_xxxxxxxxxx";

    let resp = client.discounts().id(discount_id).delete().send().await?;

    println!("Discount deleted successfully");

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `discount_id` | `string` | `Discount Id` |
## Responses

### 204 Status

Soft-deleted discount (no content)

### 404 Status

Discount not found or already deleted

### 500 Status

Something went wrong :(