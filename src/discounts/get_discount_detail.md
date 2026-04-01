# Get Discount Detail

Validate a discount code to check if it is valid and can be applied.

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

    let discount_id = "dis_xxxxxxxxxx";

    let resp = client.discounts().id(discount_id).validate().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `discount_id` | `string` | `Discount Id` |
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

Fetched discount by ID

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

### 404 Status

Not found / or soft-deleted

### 500 Status

Something went wrong :(