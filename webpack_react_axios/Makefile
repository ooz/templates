# Cleanup
clean:
	rm -rf node_modules
	rm -rf dist

clean_vscode:
	rm -rf .vscode

clean_all: clean clean_vscode docker_clean

# npm
init:
	npm init

install_dependencies:
	npm i webpack -S
	npm i webpack-cli -D
	npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -S
	npm i react react-dom -S
	npm i axios -S

install:
	npm install

build_dev: install
	./node_modules/.bin/webpack -d --watch

# Docker
docker_build:
	docker build -t oozz/webpacktemplate:latest .

docker_run:
	docker run --env-file ./env.list -p 8080:80 oozz/webpacktemplate:latest

docker_run_d:
	docker run --env-file ./env.list -p 8080:80 -d oozz/webpacktemplate:latest

docker_buildrun: docker_build docker_run

docker_clean:
	docker system prune --all

# Pwny
.PHONY: clean clean_vscode clean_all \
init install_dependencies build_dev \
docker_build docker_run docker_run_d docker_buildrun docker_clean \
