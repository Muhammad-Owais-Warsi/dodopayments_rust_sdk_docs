# Get Credit Entitlement Detail

Retrieve a specific credit entitlement by its ID.

settings for expiration, rollover, and overage policies.

# Business Logic

- Only non-deleted credit entitlements can be retrieved through this
- The entitlement must belong to the authenticated business (business_id check)
- Deleted entitlements return a 404 error and must be retrieved via the list with `deleted=true`

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

    let entitlement_id = "ent_xxxxxxxxxx";

    let resp = client
        .credit_entitlements()
        .id(entitlement_id)
        .retrieve()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `id`      | `string` | `Credit Entitlement ID` |

## Responses

### 200 Status

| Field                         | Type                 | Description                                           |
| :---------------------------- | :------------------- | :---------------------------------------------------- |
| `business_id`                 | `string`             |                                                       |
| `created_at`                  | `string`             |                                                       |
| `currency`                    | `object`             |                                                       |
| `description`                 | `object`             |                                                       |
| `expires_after_days`          | `object`             |                                                       |
| `id`                          | `string`             |                                                       |
| `max_rollover_count`          | `object`             |                                                       |
| `name`                        | `string`             |                                                       |
| `overage_behavior`            | `CbbOverageBehavior` | Controls how overage is handled at billing cycle end. |
| `overage_enabled`             | `boolean`            |                                                       |
| `overage_limit`               | `object`             |                                                       |
| `precision`                   | `integer`            |                                                       |
| `price_per_unit`              | `object`             | Price per credit unit                                 |
| `rollover_enabled`            | `boolean`            |                                                       |
| `rollover_percentage`         | `object`             |                                                       |
| `rollover_timeframe_count`    | `object`             |                                                       |
| `rollover_timeframe_interval` | `object`             |                                                       |
| `unit`                        | `string`             |                                                       |
| `updated_at`                  | `string`             |                                                       |

Credit entitlement details

### 404 Status

Credit entitlement not found

### 500 Status

Something went wrong :(