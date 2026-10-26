// ==UserScript==
// @name         ENK - Nested Setlist Killer
// @description  Removes inner scrollbars and container height locks on neurokaraoke.com for natural page scrolling.
// @author       PixelSpark987 - https://is.gd/PS987
// @version      1.5
// @namespace    http://tampermonkey.net/
// @downloadURL  https://raw.githubusercontent.com/PixelSpark987/ENK-Nested-Setlist-Killer/refs/heads/main/ENK%20-%20Nested%20Setlist%20Killer.js
// @updateURL    https://raw.githubusercontent.com/PixelSpark987/ENK-Nested-Setlist-Killer/refs/heads/main/ENK%20-%20Nested%20Setlist%20Killer.js
// 
// @match        *://evilkaraoke.com/*
// @match        *://*.evilkaraoke.com/*
// @match        *://neurokaraoke.com/*
// @match        *://*.neurokaraoke.com/*
// @match        *://twinskaraoke.com/*
// @match        *://*.twinskaraoke.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .queue-section, .queue-list, .covers-list {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
            overflow-y: visible !important;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    const observer = new MutationObserver(() => {
        const elements = document.querySelectorAll('.queue-section, .queue-list, .covers-list');
        elements.forEach(el => {
            el.style.setProperty('height', 'auto', 'important');
            el.style.setProperty('max-height', 'none', 'important');
            el.style.setProperty('overflow', 'visible', 'important');
            el.style.setProperty('overflow-y', 'visible', 'important');
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style']
    });
})();
