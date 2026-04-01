# Update Credit Entitlement

Update an existing credit entitlement with partial data.

provided in the request body will be updated; all other fields remain unchanged.
This supports nullable fields using the double option pattern.

# Business Logic

- Only non-deleted credit entitlements can be updated
- Fields set to `null` explicitly will clear the database value (using double option pattern)
- The `updated_at` timestamp is automatically updated on successful modification
- Changes take effect immediately but do not retroactively affect existing credit grants
- The merged state is validated: currency required with price, rollover timeframe fields together, price required for overage

## Request

```rust
use dodopayments_rust::{
    models::PatchCreditEntitlementRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

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
        .update()
        .body(PatchCreditEntitlementRequest {
            name: Some("Updated Credits".to_string()),
            description: Some("Updated credit allocation".to_string()),
            unit: Some("credits".to_string()),
            price_per_unit: Some("1.00".to_string()),
            currency: None,
            expires_after_days: None,
            max_rollover_count: None,
            overage_behavior: None,
            overage_enabled: None,
            overage_limit: None,
            rollover_enabled: None,
            rollover_percentage: None,
            rollover_timeframe_count: None,
            rollover_timeframe_interval: None,
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
| `id` | `string` | `Credit Entitlement ID` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `currency` | `object` |  |
| `description` | `object` | Optional description of the credit entitlement |
| `expires_after_days` | `object` | Number of days after which credits expire |
| `max_rollover_count` | `object` | Maximum number of times credits can be rolled over |
| `name` | `object` | Name of the credit entitlement |
| `overage_behavior` | `object` |  |
| `overage_enabled` | `object` | Whether overage charges are enabled when credits run out |
| `overage_limit` | `object` | Maximum overage units allowed |
| `price_per_unit` | `object` | Price per credit unit |
| `rollover_enabled` | `object` | Whether rollover is enabled for unused credits |
| `rollover_percentage` | `object` | Percentage of unused credits that can rollover (0-100) |
| `rollover_timeframe_count` | `object` | Count of timeframe periods for rollover limit |
| `rollover_timeframe_interval` | `object` |  |
| `unit` | `object` | Unit of measurement for the credit (e.g., "API Calls", "Tokens", "Credits") |
## Responses

### 200 Status

Credit entitlement updated successfully

### 404 Status

Credit entitlement not found

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(