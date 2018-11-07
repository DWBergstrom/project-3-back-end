#!/bin/sh

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}/${ORDER_ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
