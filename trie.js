class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(const char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word) {
        let node = this.root
        for(const char of word) {
            if(!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix) {
        let node = this.root
        for(const char of prefix) {
            if(!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }

    countWords() {
        return this.countWordsHelper(this.root);
    }
    
    countWordsHelper(node) {
        if (!node) {
            return 0;
        }
    
        let count = node.isEndOfWord ? 1 : 0;
        for (const child in node.children) {
            count += this.countWordsHelper(node.children[child]);
        }
    
        return count;
    }

    autoComplete(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return []; // Prefix not found
            }
            node = node.children[char];
        }
    
        return this.autoCompleteHelper(node, prefix);
    }
    
    autoCompleteHelper(node, prefix) {
        let result = [];
    
        if (node.isEndOfWord) {
            result.push(prefix);
        }
    
        for (const char in node.children) {
            result = result.concat(this.autoCompleteHelper(node.children[char], prefix + char));
        }
    
        return result;
    }
    
    
}

const trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('apricot')
trie.insert('banana')
console.log(trie.countWords())
console.log(trie.startsWith('appp'))