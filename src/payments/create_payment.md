# Create Payment

Create a one-time payment for a customer.

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

    println!("Note: create payment API is deprecated. Use checkout sessions instead.");
    println!("See create_checkout.rs example");

    Ok(())
}

```

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `allowed_payment_method_types` | `object` | List of payment methods allowed during checkout. Customers will **never** see payment methods that are **not** in this list. However, adding a method here **does not guarantee** customers will see it. Availability still depends on other factors (e.g., customer location, merchant settings). |
| `billing` | `BillingAddress` | Billing address details for the payment |
| `billing_currency` | `object` |  |
| `customer` | `CustomerRequest` | Customer information for the payment |
| `discount_code` | `object` | Discount Code to apply to the transaction |
| `force_3ds` | `object` | Override merchant default 3DS behaviour for this payment |
| `metadata` | `Metadata` | Additional metadata associated with the payment. Defaults to empty if not provided. |
| `payment_link` | `object` | Whether to generate a payment link. Defaults to false if not specified. |
| `payment_method_id` | `object` | Optional payment method ID to use for this payment. If provided, customer_id must also be provided. The payment method will be validated for eligibility with the payment's currency. |
| `product_cart` | `array<OneTimeProductCartItemReq>` | List of products in the cart. Must contain at least 1 and at most 100 items. |
| `redirect_immediately` | `boolean` | If true, redirects the customer immediately after payment completion False by default |
| `return_url` | `object` | Optional URL to redirect the customer after payment. Must be a valid URL if provided. |
| `short_link` | `object` | If true, returns a shortened payment link. Defaults to false if not specified. |
| `show_saved_payment_methods` | `boolean` | Display saved payment methods of a returning customer False by default |
| `tax_id` | `object` | Tax ID in case the payment is B2B. If tax id validation fails the payment creation will fail |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `client_secret` | `string` | Client secret used to load Dodo checkout SDK NOTE : Dodo checkout SDK will be coming soon |
| `customer` | `CustomerLimitedDetailsResponse` | Limited details about the customer making the payment |
| `discount_id` | `object` | The discount id if discount is applied |
| `expires_on` | `object` | Expiry timestamp of the payment link |
| `metadata` | `Metadata` | Additional metadata associated with the payment |
| `payment_id` | `string` | Unique identifier for the payment |
| `payment_link` | `object` | Optional URL to a hosted payment page |
| `product_cart` | `object` | Optional list of products included in the payment |
| `total_amount` | `integer` | Total amount of the payment in smallest currency unit (e.g. cents) |

One Time payment successfully initiated

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(