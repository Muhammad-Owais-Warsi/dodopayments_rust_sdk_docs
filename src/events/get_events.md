# Get Events

Get a list of all usage events.

- Debugging event ingestion issues
- Analyzing customer usage patterns
- Building custom analytics dashboards
- Auditing billing-related events

## Filtering Options:

- **Customer filtering**: Filter by specific customer ID
- **Event name filtering**: Filter by event type/name
- **Meter-based filtering**: Use a meter ID to apply the meter's event name and filter criteria automatically
- **Time range filtering**: Filter events within a specific date range
- **Pagination**: Navigate through large result sets

## Meter Integration:

When using `meter_id`, the  automatically applies:
- The meter's configured `event_name` filter
- The meter's custom filter criteria (if any)
- If you also provide `event_name`, it must match the meter's event name

## Example Queries:

- Get all events for a customer: `?customer_id=cus_abc123`
- Get API request events: `?event_name=api_request`
- Get events from last 24 hours: `?start=2024-01-14T10:30:00Z&end=2024-01-15T10:30:00Z`
- Get events with meter filtering: `?meter_id=mtr_xyz789`
- Paginate results: `?page_size=50&page_number=2`

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

    let resp = client.usage_events().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<Event>` |  |

Events retrieved successfully

### 400 Status

Invalid request - invalid query parameters, conflicting meter/event names, or malformed dates

### 401 Status

Unauthorized - invalid or missing API key

### 404 Status

Meter not found - the specified meter_id does not exist

### 422 Status

Unprocessable entity - validation errors in query parameters