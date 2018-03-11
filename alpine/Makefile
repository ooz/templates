all: build
	docker run -it oozz/alpinesh:latest sh

build:
	docker build . -t oozz/alpinesh:latest

clean:
	docker system prune --all

.PHONY: clean \
build
