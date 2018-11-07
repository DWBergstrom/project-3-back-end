#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}/${ORDER_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "products": "'"${P_ID}"'",
      "total": "'"${TOTAL}"'",
      "purchased": "'"${PURCHASED}"'",
      "action": "'"${ACTION}"'"
    }
  }'

echo