# Create Credit Entitlement

Create a new credit entitlement for the authenticated business.

Each entitlement defines how credits behave in terms of expiration, rollover, and overage.

# Business Logic

- A unique ID with prefix `cde_` is automatically generated for the entitlement
- Created and updated timestamps are automatically set
- Currency is required when price_per_unit is set
- price_per_unit is required when overage_enabled is true
- rollover_timeframe_count and rollover_timeframe_interval must both be set or both be null

## Request

```rust
use dodopayments_rust::{
    models::CreateCreditEntitlementRequest, to_pretty_json, DodoPaymentsClientBuilder,
};
#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .credit_entitlements()
        .create()
        .body(CreateCreditEntitlementRequest {
            name: "Basic Credits".to_string(),
            description: Some("Monthly credit allocation".to_string()),
            unit: "credits".to_string(),
            price_per_unit: Some("1.00".to_string()),
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
| `currency` | `object` |  |
| `description` | `object` | Optional description of the credit entitlement |
| `expires_after_days` | `object` | Number of days after which credits expire (optional) |
| `max_rollover_count` | `object` | Maximum number of times credits can be rolled over |
| `name` | `string` | Name of the credit entitlement |
| `overage_behavior` | `object` |  |
| `overage_enabled` | `boolean` | Whether overage charges are enabled when credits run out |
| `overage_limit` | `object` | Maximum overage units allowed (optional) |
| `precision` | `integer` | Precision for credit amounts (0-10 decimal places) |
| `price_per_unit` | `object` | Price per credit unit |
| `rollover_enabled` | `boolean` | Whether rollover is enabled for unused credits |
| `rollover_percentage` | `object` | Percentage of unused credits that can rollover (0-100) |
| `rollover_timeframe_count` | `object` | Count of timeframe periods for rollover limit |
| `rollover_timeframe_interval` | `object` |  |
| `unit` | `string` | Unit of measurement for the credit (e.g., "API Calls", "Tokens", "Credits") |
## Responses

### 201 Status

Credit entitlement created successfully

| Field                         | Type      | Description                                           |
| :---------------------------- | :-------- | :---------------------------------------------------- |
| `business_id`                 | `string`  | -                                                     |
| `created_at`                  | `string`  | -                                                     |
| `currency`                    | `object`  | -                                                     |
| `description`                 | `object`  | -                                                     |
| `expires_after_days`          | `object`  | -                                                     |
| `id`                          | `string`  | -                                                     |
| `max_rollover_count`          | `object`  | -                                                     |
| `name`                        | `string`  | -                                                     |
| `overage_behavior`            | `object`  | Controls how overage is handled at billing cycle end. |
| `overage_enabled`             | `boolean` | -                                                     |
| `overage_limit`               | `object`  | -                                                     |
| `precision`                   | `integer` | -                                                     |
| `price_per_unit`              | `object`  | Price per credit unit                                 |
| `rollover_enabled`            | `boolean` | -                                                     |
| `rollover_percentage`         | `object`  | -                                                     |
| `rollover_timeframe_count`    | `object`  | -                                                     |
| `rollover_timeframe_interval` | `object`  | -                                                     |
| `unit`                        | `string`  | -                                                     |
| `updated_at`                  | `string`  | -                                                     |

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(