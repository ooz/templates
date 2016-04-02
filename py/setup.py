# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


with open('README.rst') as f:
    readme = f.read()

with open('LICENSE') as f:
    license = f.read()

setup(
    name='template',
    version='0.0.1',
    description='Template setup.py',
    long_description=readme,
    author='Oliver Zscheyge',
    author_email='oliverzscheyge@gmail.com',
    url='https://github.com/ooz',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)
