walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bArtificial Intelligence\b/g, "Methamphetamine");
	v = v.replace(/\bArtificial intelligence\b/g, "Methamphetamine");
	v = v.replace(/\bartificial intelligence\b/g, "methamphetamine");
	v = v.replace(/\bartificial Intelligence\b/g, "methamphEtamine");
	v = v.replace(/\bAI\b/g, "Meth");
	v = v.replace(/\bai\b/g, "meth");
	v = v.replace(/\baI\b/g, "mEth");
	
	textNode.nodeValue = v;
}


