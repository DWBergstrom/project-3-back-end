API="http://localhost:4741"
URL_PATH="/charges"

curl https://api.stripe.com/v1/charges \
  -u sk_test_k5orqmsiNDI5QaGeGGGzhVmq: \
  -d amount=50 \
  -d currency=usd \
  -d description="example charge" \
  -d source="tok_visa"

echo
