// ==UserScript==
// @name         Remove Dynamic Elements
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @IamNinjaCoder (Search on Github) 
// @match        https://learn.codehelp.in/s/courses/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
/*
 * DISCLAIMER:
 * This script is shared for educational purposes only. Users are responsible for ensuring their use of the script complies with all applicable laws and website terms of service.
 * The author disclaims any liability for misuse of this script or any illegal activities carried out by anyone using this script. Users should not use this script to distribute or access copyrighted content without authorization.
 */

(function() {
    'use strict';

    // Function to check if an element should be removed
    function shouldRemoveElement(element) {
        // Adjust these checks based on the specific elements you want to target
        return element.style.opacity === "0.7" &&
               element.style.position === "absolute" &&
               (element.innerHTML.includes('YourNumber') || element.innerHTML.includes('learn.codehelp.in'));
    }

    // Observer for detecting node insertions
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && shouldRemoveElement(node)) { // Check if it's an element node
                    node.parentNode.removeChild(node); // Remove the element
                }
            });
        });
    });

    // Start observing the body for added nodes
    observer.observe(document.body, { childList: true, subtree: true });
})();
