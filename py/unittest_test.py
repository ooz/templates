# -*- coding: utf-8 -*-

import unittest

from .context import oz_project

class TestOZ(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        pass

    def setUp(self):
        pass

    def test_foobar(self):
        self.assertTrue(False)
        self.assertFalse(True, u"Object should have property")
        self.assertEqual(u"actual", u"expected")
        with self.assertRaises(TypeError):
            foobar()

    def tearDown(self):
        pass

    @classmethod
    def tearDownClass(cls):
        pass

if __name__ == '__main__':
    unittest.main()
