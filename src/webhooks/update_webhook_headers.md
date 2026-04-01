# Update Webhook Headers

Update the custom headers for a specific webhook.

## Request

```rust
use dodopayments_rust::{models::WebhookHeadersReq, to_pretty_json, DodoPaymentsClientBuilder};

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
        .update_webhook_headers()
        .body(WebhookHeadersReq {
            headers: std::collections::HashMap::new(),
        })
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

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `headers` | `object` | Object of header-value pair to update or add |
## Responses

### 200 Status

Webhook headers patched successfully

### 404 Status

Webhook Not Found

### 500 Status

Something went wrong.