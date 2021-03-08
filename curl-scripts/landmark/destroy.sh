#!/bin/bash

API="https://wunderlust-api-626.herokuapp.com"
URL_PATH="/landmarks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
