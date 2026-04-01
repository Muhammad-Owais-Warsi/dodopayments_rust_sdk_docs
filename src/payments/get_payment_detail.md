# Get Payment Detail

Get detailed information about a specific payment.

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

    let payment_id = "pay_xxxxxxxxxx";

    let resp = client.payments().id(payment_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payment_id` | `string` | `Payment Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `billing` | `BillingAddress` | Billing address details for payments |
| `brand_id` | `string` | brand id this payment belongs to |
| `business_id` | `string` | Identifier of the business associated with the payment |
| `card_holder_name` | `object` | Cardholder name |
| `card_issuing_country` | `object` |  |
| `card_last_four` | `object` | The last four digits of the card |
| `card_network` | `object` | Card network like VISA, MASTERCARD etc. |
| `card_type` | `object` | The type of card DEBIT or CREDIT |
| `checkout_session_id` | `object` | If payment is made using a checkout session, this field is set to the id of the session. |
| `created_at` | `string` | Timestamp when the payment was created |
| `currency` | `Currency` | Currency used for the payment |
| `custom_field_responses` | `object` | Customer's responses to custom fields collected during checkout |
| `customer` | `CustomerLimitedDetailsResponse` | Details about the customer who made the payment |
| `digital_products_delivered` | `boolean` | brand id this payment belongs to |
| `discount_id` | `object` | The discount id if discount is applied |
| `disputes` | `array<DisputeResponse>` | List of disputes associated with this payment |
| `error_code` | `object` | An error code if the payment failed |
| `error_message` | `object` | An error message if the payment failed |
| `invoice_id` | `object` | Invoice ID for this payment. Uses India-specific invoice ID if available. |
| `invoice_url` | `object` | URL to download the invoice PDF for this payment. |
| `metadata` | `Metadata` | Additional custom data associated with the payment |
| `payment_id` | `string` | Unique identifier for the payment |
| `payment_link` | `object` | Checkout URL |
| `payment_method` | `object` | Payment method used by customer (e.g. "card", "bank_transfer") |
| `payment_method_type` | `object` | Specific type of payment method (e.g. "visa", "mastercard") |
| `product_cart` | `object` | List of products purchased in a one-time payment |
| `refund_status` | `object` |  |
| `refunds` | `array<RefundListItem>` | List of refunds issued for this payment |
| `settlement_amount` | `integer` | The amount that will be credited to your Dodo balance after currency conversion and processing. Especially relevant for adaptive pricing where the customer's payment currency differs from your settlement currency. |
| `settlement_currency` | `Currency` | The currency in which the settlement_amount will be credited to your Dodo balance. This may differ from the customer's payment currency in adaptive pricing scenarios. |
| `settlement_tax` | `object` | This represents the portion of settlement_amount that corresponds to taxes collected. Especially relevant for adaptive pricing where the tax component must be tracked separately in your Dodo balance. |
| `status` | `object` |  |
| `subscription_id` | `object` | Identifier of the subscription if payment is part of a subscription |
| `tax` | `object` | Amount of tax collected in smallest currency unit (e.g. cents) |
| `total_amount` | `integer` | Total amount charged to the customer including tax, in smallest currency unit (e.g. cents) |
| `updated_at` | `object` | Timestamp when the payment was last updated |

Especially relevant for adaptive pricing where the tax component must be tracked separately

Especially relevant for adaptive pricing where the tax component must be tracked separately

Especially relevant for adaptive pricing where the tax component must be tracked separately

Especially relevant for adaptive pricing where the tax component must be tracked separately

### 500 Status

Something went wrong :(