# Get Webhook Detail

Get detailed information about a specific webhook.

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

    let resp = client.webhooks().id(webhook_id).retrieve().send().await?;

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
| `created_at` | `string` | Created at timestamp |
| `description` | `string` | An example webhook name. |
| `disabled` | `object` | Status of the webhook. If true, events are not sent |
| `filter_types` | `object` | Filter events to the webhook. Webhook event will only be sent for events in the list. |
| `id` | `string` | The webhook's ID. |
| `metadata` | `object` | Metadata of the webhook |
| `rate_limit` | `object` | Configured rate limit |
| `updated_at` | `string` | Updated at timestamp |
| `url` | `string` | Url endpoint of the webhook |

Webhook details retrived.

### 404 Status

 Not Found

### 500 Status

Something went wrong.