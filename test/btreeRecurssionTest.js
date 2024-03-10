"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/btreeRecurssion");

let node1 = new Node(10);
let node2 = new Node();

describe("#tests on node1", function () {
  it("should add nodes to left to node1", function () {
    node1.addLink(node1, 8);
    expect(node1.addLink(node1, 4)).to.eql({
      left: {
        left: { left: null, data: 4, right: null },
        data: 8,
        right: null,
      },
      data: 10,
      right: null,
    });
  });

  it("should add nodes to right of 8 in node1", function () {
    expect(node1.addLink(node1, 9)).to.eql({
      left: {
        left: { left: null, data: 4, right: null },
        data: 8,
        right: { left: null, data: 9, right: null },
      },
      data: 10,
      right: null,
    });
  });

  it("should add nodes to right of root in node1", function () {
    expect(node1.addLink(node1, 15)).to.eql({
      left: {
        left: { left: null, data: 4, right: null },
        data: 8,
        right: { left: null, data: 9, right: null },
      },
      data: 10,
      right: { left: null, data: 15, right: null },
    });
  });

  it("should add nodes to right in node1", function () {
    expect(node1.addLink(node1, 20)).to.eql({
      left: {
        left: { left: null, data: 4, right: null },
        data: 8,
        right: { left: null, data: 9, right: null },
      },
      data: 10,
      right: {
        left: null,
        data: 15,
        right: { left: null, data: 20, right: null },
      },
    });
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, 9)).to.equal("value exists");
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, 20)).to.equal("value exists");
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, 88)).to.equal("value does not exist");
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, 10)).to.equal("value exists");
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, -10)).to.equal("value does not exist");
  });

  it("should search through the tree to find the data", function () {
    expect(node1.searchTree(node1, 4)).to.equal("value exists");
  });
});

describe("#tests on node2", function () {
  it("should not find value in empty node", function () {
    expect(node2.searchTree(node2, 10)).to.equal("value does not exist");
  });
  it("should add root node", function () {
    expect(node2.addLink(node2, 15)).to.eql({
      left: null,
      data: 15,
      right: null,
    });
  });
});
