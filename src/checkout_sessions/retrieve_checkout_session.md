# Get Checkout Details

Retrieve details of a specific checkout session by its ID.

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

    let checkout_id = "checkout_xxxxxxxxxx";

    let resp = client
        .checkout_session()
        .id(checkout_id)
        .retrieve()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

Checkout session successfully fetched

### 404 Status

Not found

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(