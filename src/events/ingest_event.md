# Ingest Event

Ingest events for usage-based billing.

- Usage-based billing and metering
- Analytics and reporting
- Customer behavior tracking

## Important Notes:

- **Duplicate Prevention**:
  - Duplicate `event_id` values within the same request are rejected (entire request fails)
  - Subsequent requests with existing `event_id` values are ignored (idempotent behavior)
- **Rate Limiting**: Maximum 1000 events per request
- **Time Validation**: Events with timestamps older than 1 hour or more than 5 minutes in the future will be rejected
- **Metadata Limits**: Maximum 50 key-value pairs per event, keys max 100 chars, values max 500 chars

## Example Usage:

```json
{
  "events": [
    {
      "event_id": "api_call_12345",
      "customer_id": "cus_abc123",
      "event_name": "api_request",
      "timestamp": "2024-01-15T10:30:00Z",
      "metadata": {
        "": "/api/v1/users",
        "method": "GET",
        "tokens_used": "150"
      }
    }
  ]
}
```

## Request

```rust
use dodopayments_rust::{models::IngestEventsRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .usage_events()
        .ingest()
        .body(IngestEventsRequest {
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
| `events` | `array<EventInput>` | List of events to be pushed |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `ingested_count` | `integer` |  |

Events ingested successfully

### 400 Status

Invalid request - validation errors, duplicate event IDs, or invalid timestamps

### 401 Status

Unauthorized - invalid or missing API key

### 413 Status

Payload too large - request exceeds maximum allowed size

### 422 Status

Unprocessable entity - malformed JSON or schema validation errors

### 429 Status

Too many requests - rate limit exceeded