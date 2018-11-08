API="http://localhost:4741"
URL_PATH="/charges"

curl "${API}${URL_PATH}" \
  -u sk_test_k5orqmsiNDI5QaGeGGGzhVmq: \
  -d amount=1 \
  -d currency=usd \
  -d description="example charge" \
  -d source="tok_visa"

echo
