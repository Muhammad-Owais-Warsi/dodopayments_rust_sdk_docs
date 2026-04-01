# Create Webhook

Create a new webhook for a business.

## Request

```rust
use dodopayments_rust::{models::CreateWebhookRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .webhooks()
        .create()
        .body(CreateWebhookRequest {
            url: "https://example.com/webhook".to_string(),
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `description` | `object` |  |
| `disabled` | `object` | Create the webhook in a disabled state. Default is false |
| `filter_types` | `array<EventType>` | Filter events to the webhook. Webhook event will only be sent for events in the list. |
| `headers` | `object` | Custom headers to be passed |
| `idempotency_key` | `object` | The request's idempotency key |
| `metadata` | `object` | Metadata to be passed to the webhook Defaut is {} |
| `rate_limit` | `object` |  |
| `url` | `string` | Url of the webhook |
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

 created Successfully