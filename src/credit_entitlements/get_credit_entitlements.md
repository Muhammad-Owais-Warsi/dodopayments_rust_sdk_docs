# Get Credit Entitlements

List all credit entitlements for the authenticated business with pagination support.

entitlements. By default, only non-deleted entitlements are returned.

# Business Logic

- Results are ordered by creation date in descending order (newest first)
- Only entitlements belonging to the authenticated business are returned
- The `deleted` parameter controls visibility of soft-deleted entitlements
- Pagination uses offset-based pagination (offset = page_number * page_size)

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

    let resp = client.credit_entitlements().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<CreditEntitlementResponse>` |  |

Credit Entitlements List

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(