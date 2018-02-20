# Cleanup
clean:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +
	rm -rf .cache

clean_vscode:
	rm -rf .vscode

clean_pypi:
	rm -rf dist
	rm -f *.egg-info

clean_all: clean clean_vscode clean_pypi

# Setup / dependencies
install_pipenv:
	pip install pipenv

install_dependencies:
	pipenv install requests
	pipenv install six
	pipenv install --dev pytest

init: install_pipenv
	pipenv --three
	make install_dependencies

init2: install_pipenv
	pipenv --two
	make install_dependencies

# Testing
test:
	pipenv run pytest

# Docker
docker_clean:
	docker system prune --all

# Publishing to pypi
publish:
	python setup.py publish

# Pwny
.PHONY: clean clean_vscode clean_pypi clean_all \
install_pipenv install_dependencies init init2 \
test \
docker_clean \
publish
