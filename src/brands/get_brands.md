# Get Brands

List all brands.

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

    let resp = client.brands().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<BrandResponse>` | List of brands for this business |

List all brands