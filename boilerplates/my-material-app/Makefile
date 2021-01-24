PROJECT_NAME := my-react-app
REGISTRY := ???
TS = $(shell date +%Y%m%d%H%M%S)

docker-build:
	$(eval FULL_NAME = $(REGISTRY)/$(PROJECT_NAME):$(TS))
	$(info $(FULL_NAME))
	DOCKER_BUILDKIT=1 docker build --no-cache -t $(PROJECT_NAME):latest .

docker-push: docker-build
	docker tag $(PROJECT_NAME):latest $(FULL_NAME)
	docker push $(FULL_NAME)
