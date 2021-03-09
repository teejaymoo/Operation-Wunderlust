#!/bin/sh

curl "http://localhost:4741/landmarks" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
