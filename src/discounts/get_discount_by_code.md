# Get Discount By Code

Validate and retrieve a discount by its code name (e.g. 'SAVE20') instead of using the internal discount ID.

This allows real-time validation directly against the API using the
human-readable discount code instead of requiring the internal discount_id.

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

    let discount_code = "";

    let resp = client
        .discounts()
        .code(discount_code)
        .retrieve_by_code()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `code` | `string` | `The discount code (e.g., 'SAVE20')` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `amount` | `integer` | The discount amount. - If `discount_type` is `percentage`, this is in **basis points** (e.g., 540 => 5.4%). - Otherwise, this is **USD cents** (e.g., 100 => `$1.00`). |
| `business_id` | `string` | The business this discount belongs to. |
| `code` | `string` | The discount code (up to 16 chars). |
| `created_at` | `string` | Timestamp when the discount is created |
| `discount_id` | `string` | The unique discount ID |
| `expires_at` | `object` | Optional date/time after which discount is expired. |
| `name` | `object` | Name for the Discount |
| `preserve_on_plan_change` | `boolean` | Whether this discount should be preserved when a subscription changes plans. Default: false (discount is removed on plan change) |
| `restricted_to` | `array<string>` | List of product IDs to which this discount is restricted. |
| `subscription_cycles` | `object` | Number of subscription billing cycles this discount is valid for. If not provided, the discount will be applied indefinitely to all recurring payments related to the subscription. |
| `times_used` | `integer` | How many times this discount has been used. |
| `type` | `DiscountType` | The type of discount, e.g. `percentage`, `flat`, or `flat_per_unit`. |
| `usage_limit` | `object` | Usage limit for this discount, if any. |

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

Fetched discount by code

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

### 404 Status

Discount code not found or soft-deleted

### 422 Status

Discount code expired or usage limit exceeded

### 500 Status

Something went wrong :(