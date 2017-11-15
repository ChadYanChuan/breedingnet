/**
 * [BinaryTree description]
 * 二叉树 根节点
 * 二叉树的高 = 二叉树的层数
 * 二叉树叶子节点 = 二叉树最高一层的叶子数
 */
var BinaryTree = function (){
	
	function BinaryTree () {
		this.root = null;
	}
	//定义节点
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
		this.selected = false;
	}
	
	//插入节点
	var insertNode = function (node,newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}
	
	BinaryTree.prototype.insert = function(key){
		var newNode = new Node(key);
		if(this.root === null){
			this.root = newNode;
		}else{
			insertNode(this.root,newNode);
		}
	}
	//中序遍历
	var inOrderTraverseNode = function (node,callback) {
		if(node !== null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	}
	
	BinaryTree.prototype.inOrderTraverse = function (callback){
		inOrderTraverseNode(this.root,callback);
	}
	
	//前序遍历
	var preOrderTraverseNode = function(node,callback){
		if(node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	}
	BinaryTree.prototype.preOrderTraverse = function(callback){
		preOrderTraverseNode(this.root,callback);
	}
	
	//后序遍历
	var postOrderTraverseNode = function(node,callback){
		if(node !== null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	}
	BinaryTree.prototype.postOrderTraverse = function(callback){
		postOrderTraverseNode(this.root,callback);
	}
	
	//查找最小值节点  在左子树是否存在左子节点
	var minNode = function (node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}

	}
	BinaryTree.prototype.min = function(){
		return minNode(this.root);
	}
	//查找最大值
	var maxNode = function(node){
		if(node) {
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
	}
	BinaryTree.prototype.max = function(){
		return maxNode(this.root);
	}
	//查找具体节点
	var searchNode = function(node,key){
		if(node === null){
			return null;
		}
		if(key < node.key){
			return searchNode(node.left,key);
		}else if(key > node.key){
			return searchNode(node.right,key);
		}else {
			return node;
		}
	}
	
	BinaryTree.prototype.search = function(key){
		return searchNode(this.root,key);
	}
	var findMinNode = function(node){
		if(node) {
			while(node && node.left !== null){
				node = node.left;
			}
			return node;
		}
		return null;
	}
	//删除节点
	var removeNode = function(node,key){
		if(node === null){
			return null;
		}
		if(key < node.key){
			node.left = removeNode(node.left,key);
			return node;
		}else if(key > node.key){
			node.right = removeNode(node.right,key);
			return node;
		}else {
			//删除叶子节点
			if(node.left === null && node.right === null){
				node = null;
				return node;
			}
			//删除子节点 且只有左子树或者右子树
			if(node.left === null){
				node = node.right;
				return node;
			}else if(node.right === null){
				node = node.left;
				return node;
			}
			
			//删除同事含有左右子树的节点
			var aux = findMinNode(node.right);
			node.key = aux.key;
			
			node.right = removeNode(node.right,aux.key);
			return node;
		}
	}
	
	BinaryTree.prototype.remove = function(key){
		return removeNode(this.root,key);
	}
	//更新节点
	BinaryTree.prototype.updateSelected = function(key,selected){
		var node = this.search(key);
		if(node === null) return;
		node.selected = selected ? true : false;
	}
	return BinaryTree;
}();
	
	
	var arr = [10,3,4,5,6,7,12,13,11,9];
	var binaryTree = new BinaryTree();
	arr.forEach(function(key){
		binaryTree.insert(key);
	});
//	中序
//	binaryTree.inOrderTraverse(function(key){
//		console.log(key);
//	});
//前序
//	binaryTree.preOrderTraverse(function(key){
//		console.log(key);
//	});
//	后序
//	binaryTree.postOrderTraverse(function(key){
//		console.log(key);
//	})
	
	var min = binaryTree.min();
	var max = binaryTree.max();
	var fd = binaryTree.search(5);
	console.log("二叉树最小值为："+min+",,,,,,最大值为"+max);
	var remove = binaryTree.remove(13);
	console.log(remove);
