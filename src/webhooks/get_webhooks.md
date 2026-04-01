# Get Webhooks

List all webhooks for a business.

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

    let resp = client.webhooks().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | `array<WebhookDetails>` | List of webhoooks |
| `done` | `boolean` | true if no more values are to be fetched. |
| `iterator` | `object` | Cursor pointing to the next paginated object |
| `prev_iterator` | `object` | Cursor pointing to the previous paginated object |

List of s