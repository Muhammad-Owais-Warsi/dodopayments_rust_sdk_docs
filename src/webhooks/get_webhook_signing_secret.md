# Get Webhook Signing Secret

Get the signing key for a specific webhook.

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

    let webhook_id = "wh_xxxxxxxxxx";

    let resp = client
        .webhooks()
        .id(webhook_id)
        .signing_key()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `webhook_id` | `string` | `` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `secret` | `string` |  |

Webhook secret retrived.

### 404 Status

 Not Found

### 500 Status

Something went wrong.