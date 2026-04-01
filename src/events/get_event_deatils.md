# Get Event Deatils

Get a specific usage event by its ID.

- Debugging specific event ingestion issues
- Retrieving event details for customer support
- Validating that events were processed correctly
- Getting the complete metadata for an event

## Event ID Format:

The event ID should be the same value that was provided during event ingestion via the `/events/ingest` .
Event IDs are case-sensitive and must match exactly.

## Response Details:

The response includes all event data including:
- Complete metadata key-value pairs
- Original timestamp (preserved from ingestion)
- Customer and business association
- Event name and processing information

## Example Usage:

```text
GET /events/api_call_12345
```

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

    let event_id = "evt_xxxxxxxxxx";

    let resp = client.usage_events().id(event_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `event_id` | `string` | `Unique event identifier (case-sensitive, must match the ID used during ingestion)` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `business_id` | `string` |  |
| `customer_id` | `string` |  |
| `event_id` | `string` |  |
| `event_name` | `string` |  |
| `metadata` | `object` |  |
| `timestamp` | `string` |  |

Event retrieved successfully

### 401 Status

Unauthorized - invalid or missing API key

### 404 Status

Event not found - no event exists with the specified ID for your business

### 422 Status

Unprocessable entity - invalid event ID format