# Create Discount

Create a discount for your account.

## Request

```rust
use dodopayments_rust::{
    models::{CreateDiscountRequest, DiscountType},
    to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .discounts()
        .create()
        .body(CreateDiscountRequest {
            amount: 10,
            r#type: DiscountType::Percentage,
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
| `amount` | `integer` | The discount amount. - If `discount_type` is **not** `percentage`, `amount` is in **USD cents**. For example, `100` means `$1.00`. Only USD is allowed. - If `discount_type` **is** `percentage`, `amount` is in **basis points**. For example, `540` means `5.4%`. Must be at least 1. |
| `code` | `object` | Optionally supply a code (will be uppercased). - Must be at least 3 characters if provided. - If omitted, a random 16-character code is generated. |
| `expires_at` | `object` | When the discount expires, if ever. |
| `name` | `object` |  |
| `preserve_on_plan_change` | `boolean` | Whether this discount should be preserved when a subscription changes plans. Default: false (discount is removed on plan change) |
| `restricted_to` | `object` | List of product IDs to restrict usage (if any). |
| `subscription_cycles` | `object` | Number of subscription billing cycles this discount is valid for. If not provided, the discount will be applied indefinitely to all recurring payments related to the subscription. |
| `type` | `DiscountType` | The discount type (e.g. `percentage`, `flat`, or `flat_per_unit`). |
| `usage_limit` | `object` | How many times this discount can be used (if any). Must be >= 1 if provided. |
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

Created discount

- If `discount_type` is `percentage`, this is in **basis points**
  (e.g., 540 => 5.4%).
If not provided, the discount will be applied indefinitely to

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(