# Cleanup
clean:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +
	rm -rf .cache

clean_vscode:
	rm -rf .vscode

clean_all: clean clean_vscode docker_clean

# Docker
docker_build:
	docker build -t oozz/jstemplate:latest .

docker_run:
	docker run --env-file ./env.list -p 8080:80 oozz/jstemplate:latest

docker_run_d:
	docker run --env-file ./env.list -p 8080:80 -d oozz/jstemplate:latest

docker_buildrun: docker_build docker_run

docker_clean:
	docker system prune --all

# Pwny
.PHONY: clean clean_vscode clean_all \
docker_build docker_run docker_run_d docker_buildrun docker_clean \
