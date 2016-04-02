#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
Author: Oliver Zscheyge
Description:
    Greeter program.
'''

import argparse as AP


def main(args):
    if args.verbose:
        print "Hello %s! What a wonderful day! I feel so verbose!" % args.name
    else:
        print "Hello %s!" % args.name


if __name__ == "__main__":
    parser = AP.ArgumentParser(description="Greeter program.")
    parser.add_argument("-v", "--verbose",
                        action="store_true", default=False,
                        help="Verbose output.")
    parser.add_argument("-n", "--name",
                        type=str, default="World",
                        help="Greets a specific name.")
    args = parser.parse_args()
    main(args)
