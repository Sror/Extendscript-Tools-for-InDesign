﻿#target InDesign#include "tools.jsx"Doc.open("test.indd");Doc.appendXML("test.xml", "xml");var price = Doc.xmlRootNode("price");Doc.tf("price").contents = Txt.currencyFormatted(price.contents);var user = Doc.xmlRoot().xmlElements.item("user");var recieptUser = Doc.copyXML(user, "reciept");var recieptElements = [    {'xmlElement': recieptUser.xmlElements.item("firstname"), 'after': " ", 'paragraphStyleName': "CyanParagraph"},    {'xmlElement': recieptUser.xmlElements.item("lastname"), 'after': "\r"},    {'xmlElement': recieptUser.xmlElements.item("email"), 'before': "\t", 'after': "\r"},    {'xmlElement': recieptUser.xmlElements.item("phone"), 'before': "\t", 'after': "\r"},    {'xmlElement': recieptUser.xmlElements.item("mobile"), 'before': "\t", 'after': "\r"},    {'xmlElement': recieptUser.xmlElements.item("team"), 'before': "\t", 'after': "\r"},    {'xmlElement': recieptUser.xmlElements.item("company"), 'before': "\t"}];Doc.combineXMLtoTextframe(recieptElements, Doc.tf("reciept"));var billingUser = Doc.copyXML(user, "billing");var billingElements = [    {'xmlElement': billingUser.xmlElements.item("firstname"), 'after': " ", 'paragraphStyleName': "MagentaParagraph"},    {'xmlElement': billingUser.xmlElements.item("lastname"), 'after': "\r"},    {'xmlElement': billingUser.xmlElements.item("email"), 'before': "\t", 'after': "\r"},    {'xmlElement': billingUser.xmlElements.item("phone"), 'before': "\t", 'after': "\r"},    {'xmlElement': billingUser.xmlElements.item("mobile"), 'before': "\t", 'after': "\r"},    {'xmlElement': billingUser.xmlElements.item("team"), 'before': "\t", 'after': "\r"},    {'xmlElement': billingUser.xmlElements.item("company"), 'before': "\t"}];Doc.combineXMLtoTextframe(billingElements, Doc.tf("billing"));Doc.exportToPDF("test.pdf", "pdf");Doc.close();