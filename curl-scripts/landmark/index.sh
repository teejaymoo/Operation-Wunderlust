#!/bin/sh

curl "https://wunderlust-api-626.herokuapp.com/landmarks" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
