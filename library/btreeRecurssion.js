"use strict";

class Node {
  /**
   * creating a node for binary tree.
   * @param {any} data
   * @return {node}
   */
  constructor(data) {
    this.right = null;
    this.data = data;
    this.left = null;
  }

  addLink(nextNode, data) {
    /**
     * Searching through the tree till a nul space is found and adding a new node at that position.
     * @param {any} data
     * @return {node}
     */
    if (!nextNode.data) {
      nextNode.data = data;
      return this;
    } else if (nextNode.data > data) {
      if (nextNode.left === null) {
        nextNode.left = new Node(data);
        return this;
      } else {
        nextNode = nextNode.left;
        return this.addLink(nextNode, data);
      }
    } else {
      if (nextNode.right === null) {
        nextNode.right = new Node(data);
        return this;
      } else {
        nextNode = nextNode.right;
        return this.addLink(nextNode, data);
      }
    }
  }

  searchTree(nextNode, data) {
    /**
     * Searching through the tree to find the value.
     * @param {any} data
     * @return {string}
     */
    if (!nextNode.data) {
      return "value does not exist";
    } else if (nextNode.data === data) {
      return "value exists";
    } else if (nextNode.data > data) {
      if (nextNode.left != null) {
        nextNode = nextNode.left;
        return this.searchTree(nextNode, data);
      } else {
        return "value does not exist";
      }
    } else if (nextNode.data < data) {
      if (nextNode.right != null) {
        nextNode = nextNode.right;
        return this.searchTree(nextNode, data);
      } else {
        return "value does not exist";
      }
    }
  }
}

module.exports = { Node };
