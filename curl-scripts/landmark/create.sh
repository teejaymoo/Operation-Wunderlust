#!/bin/bash

API="https://wunderlust-api-626.herokuapp.com"
URL_PATH="/landmarks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "landmark": {
      "name": "'"${NAME}"'",
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'",
      "likeIt": "'"${LIKEIT}"'",
      "comment": "'"${COMMENT}"'"
    }
  }'

echo
