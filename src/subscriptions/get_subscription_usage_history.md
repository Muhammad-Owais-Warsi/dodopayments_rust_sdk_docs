# Get Subscription Usage History

Retrieve the complete usage history for a subscription with usage-based billing.

This  provides insights into customer usage patterns and billing calculations over time.

## What You'll Get:

- **Billing periods**: Each item represents a billing cycle with start and end dates
- **Meter usage**: Detailed breakdown of usage for each meter configured on the subscription
- **Usage calculations**: Total units consumed, free threshold units, and chargeable units
- **Historical tracking**: Complete audit trail of usage-based charges

## Use Cases:

- **Customer support**: Investigate billing questions and usage discrepancies
- **Usage analytics**: Analyze customer consumption patterns over time
- **Billing transparency**: Provide customers with detailed usage breakdowns
- **Revenue optimization**: Identify usage trends to optimize pricing strategies

## Filtering Options:

- **Date range filtering**: Get usage history for specific time periods
- **Meter-specific filtering**: Focus on usage for a particular meter
- **Pagination**: Navigate through large usage histories efficiently

## Important Notes:

- Only returns data for subscriptions with usage-based (metered) components
- Usage history is organized by billing periods (subscription cycles)
- Free threshold units are calculated and displayed separately from chargeable units
- Historical data is preserved even if meter configurations change

## Example Query Patterns:

- Get last 3 months: `?start_date=2024-01-01T00:00:00Z&end_date=2024-03-31T23:59:59Z`
- Filter by meter: `?meter_id=mtr_api_requests`
- Paginate results: `?page_size=20&page_number=1`
- Recent usage: `?start_date=2024-03-01T00:00:00Z` (from March 1st to now)

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

    let subscription_id = "sub_xxxxxxxxxx";

    let resp = client
        .subscriptions()
        .id(subscription_id)
        .usage_history()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `subscription_id` | `string` | `Unique subscription identifier` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<UsageHistoryItem>` | List of usage history items |

Usage history retrieved successfully

### 400 Status

Invalid request - malformed parameters or validation errors

### 401 Status

Unauthorized - invalid or missing API key

### 404 Status

Subscription not found - no subscription exists with the specified ID

### 422 Status

Unprocessable entity - invalid query parameter values or date ranges

### 500 Status

Internal server error - please contact support if this persists