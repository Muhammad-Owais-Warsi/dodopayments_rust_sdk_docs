# Get Discounts

Retrieve a list of all discounts associated with your account.

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

    let resp = client.discounts().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<DiscountResponse>` | Array of active (non-deleted) discounts for the current page. |

List of active Discounts

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(