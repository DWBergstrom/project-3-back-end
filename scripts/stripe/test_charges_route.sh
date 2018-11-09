API="http://localhost:4741"
URL_PATH="/charges"

curl "${API}${URL_PATH}" \
  -H "Authorization: Bearer sk_test_k5orqmsiNDI5QaGeGGGzhVmq" \
  -d email="dwb@example.com" \
  -d source=tok_1DUK73DdM0iinGDarmvB3ll9 \
  -d amount=1 \
  -d currency=usd \
  -d description="example charge" \

echo
