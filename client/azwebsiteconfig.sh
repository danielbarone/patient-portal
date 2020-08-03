BASENAME=$1
RESOURCE_GROUP="$BASENAME"rg
DOCKER_IMAGE="$BASENAME"di
AZ_CONTAINER_REGISTRY="$BASENAME"acr
WEBAPP="$BASENAME"wa
SERVICE_PLAN="$BASENAME"sp

docker build --tag $DOCKER_IMAGE .

az group create --name $RESOURCE_GROUP --location "West Europe"

az acr create --name $AZ_CONTAINER_REGISTRY --resource-group $RESOURCE_GROUP --sku Basic --admin-enabled true

ACR_PASSWORD=$(az acr credential show --name $AZ_CONTAINER_REGISTRY | jq -r '.passwords[0] .value')

echo "Password: $ACR_PASSWORD"

docker login $AZ_CONTAINER_REGISTRY.azurecr.io --username $AZ_CONTAINER_REGISTRY

docker tag $DOCKER_IMAGE $AZ_CONTAINER_REGISTRY.azurecr.io/$DOCKER_IMAGE:v1.0.0

docker push $AZ_CONTAINER_REGISTRY.azurecr.io/$DOCKER_IMAGE:v1.0.0

az acr repository list -n $AZ_CONTAINER_REGISTRY

az appservice plan create --name $SERVICE_PLAN --resource-group $RESOURCE_GROUP --sku F1 --is-linux

az webapp create --resource-group $RESOURCE_GROUP --plan $SERVICE_PLAN --name $WEBAPP --deployment-container-image-name $AZ_CONTAINER_REGISTRY.azurecr.io/$DOCKER_IMAGE:v1.0.0

az webapp config container set --name $WEBAPP --resource-group $RESOURCE_GROUP --docker-custom-image-name $AZ_CONTAINER_REGISTRY.azurecr.io/$DOCKER_IMAGE:v1.0.0 --docker-registry-server-url https://$AZ_CONTAINER_REGISTRY.azurecr.io --docker-registry-server-user $AZ_CONTAINER_REGISTRY --docker-registry-server-password $ACR_PASSWORD

az webapp config appsettings set --resource-group $RESOURCE_GROUP --name $WEBAPP --settings WEBSITES_PORT=8000

az webapp log config --name $WEBAPP --resource-group $RESOURCE_GROUP --docker-container-logging filesystem

docker push $AZ_CONTAINER_REGISTRY.azurecr.io/$DOCKER_IMAGE:v1.0.0