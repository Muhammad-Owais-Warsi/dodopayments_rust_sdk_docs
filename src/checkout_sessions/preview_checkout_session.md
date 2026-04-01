# Preview Checkout Session

Preview a checkout session to calculate pricing, taxes, and totals without creating an actual session.

## Request

```dodopayments_rust_sdk/examples/preview_checkout.rs#L1-18
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    println!("Note: preview_checkout requires complex request types.");
    println!("See create_checkout.rs for checkout session creation example.");

    Ok(())
}
```

## Responses

### 200 Status

Checkout session preview calculated successfully

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(