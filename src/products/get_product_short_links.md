# Get Product Short Links

List all short checkout links created by the business.

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

    let resp = client.products().list_short_links().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<ShortLinkItem>` |  |

Short URLs for the Business

### 500 Status

Something went wrong :(