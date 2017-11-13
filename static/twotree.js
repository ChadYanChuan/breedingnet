
var BinaryTree = function (){
	
	function BinaryTree () {
		this.root = null;
	}
	//定义节点
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
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
	
	return BinaryTree;
}();
	
	
	var arr = [10,3,4,5,6,7,12,13,11,9];
	var binaryTree = new BinaryTree();
	arr.forEach(function(key){
		binaryTree.insert(key);
	});
//	binaryTree.inOrderTraverse(function(key){
//		console.log(key);
//	});
//	binaryTree.preOrderTraverse(function(key){
//		console.log(key);
//	});
	
	binaryTree.postOrderTraverse(function(key){
		console.log(key);
	})