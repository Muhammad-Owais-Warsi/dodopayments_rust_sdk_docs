# Create Checkout

Unified endpoint for creating checkout sessions for all types of billing requirements.

## Request

```rust
use dodopayments_rust::{
    models::{CreateCheckoutSessionRequest, ProductItemReq},
    to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .checkout_session()
        .create()
        .body(CreateCheckoutSessionRequest {
            product_cart: vec![ProductItemReq {
                product_id: "prod_xxxxxxxxxx".to_string(),
                quantity: 1,
                addons: None,
                amount: None,
            }],
            return_url: Some("https://example.com/success".to_string()),
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

Checkout session successfully created

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(