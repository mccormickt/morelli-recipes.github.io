// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="prefix.html">Index</a></li><li class="chapter-item expanded affix "><a href="dedication.html">Dedication</a></li><li class="chapter-item expanded affix "><a href="growing_up_italian.html">Growing Up Italian</a></li><li class="chapter-item expanded affix "><li class="part-title">Christmas &amp; Sunday Dinners</li><li class="chapter-item expanded "><a href="recipes/xmas/intro.html"><strong aria-hidden="true">1.</strong> Intro</a></li><li class="chapter-item expanded "><a href="recipes/xmas/xmas.html"><strong aria-hidden="true">2.</strong> Christmas</a></li><li class="chapter-item expanded "><a href="recipes/xmas/xmas_eve.html"><strong aria-hidden="true">3.</strong> Christmas Eve</a></li><li class="chapter-item expanded "><a href="recipes/xmas/sunday.html"><strong aria-hidden="true">4.</strong> Sunday Dinners</a></li><li class="chapter-item expanded affix "><li class="part-title">Pasta</li><li class="chapter-item expanded "><a href="recipes/pasta/intro.html"><strong aria-hidden="true">5.</strong> Intro</a></li><li class="chapter-item expanded "><a href="recipes/pasta/basic_pasta.html"><strong aria-hidden="true">6.</strong> Basic Pasta Recipe</a></li><li class="chapter-item expanded "><a href="recipes/pasta/spaghetti.html"><strong aria-hidden="true">7.</strong> Spaghetti</a></li><li class="chapter-item expanded "><a href="recipes/pasta/raviola.html"><strong aria-hidden="true">8.</strong> Raviola</a></li><li class="chapter-item expanded "><a href="recipes/pasta/cavatelli.html"><strong aria-hidden="true">9.</strong> Cavatelli</a></li><li class="chapter-item expanded "><a href="recipes/pasta/manicotti.html"><strong aria-hidden="true">10.</strong> Manicotti</a></li><li class="chapter-item expanded "><a href="recipes/pasta/lasagna.html"><strong aria-hidden="true">11.</strong> Lasagna</a></li><li class="chapter-item expanded "><a href="recipes/pasta/faccioli.html"><strong aria-hidden="true">12.</strong> Pasta Faccioli</a></li><li class="chapter-item expanded affix "><li class="part-title">Sauces</li><li class="chapter-item expanded "><a href="recipes/sauces/spaghetti.html"><strong aria-hidden="true">13.</strong> Spaghetti</a></li><li class="chapter-item expanded "><a href="recipes/sauces/marinara.html"><strong aria-hidden="true">14.</strong> Marinara</a></li><li class="chapter-item expanded "><a href="recipes/sauces/red_clam.html"><strong aria-hidden="true">15.</strong> Red Clam Sauce</a></li><li class="chapter-item expanded "><a href="recipes/sauces/white_clam.html"><strong aria-hidden="true">16.</strong> White Clam Sauce</a></li><li class="chapter-item expanded "><a href="recipes/sauces/alege.html"><strong aria-hidden="true">17.</strong> Anchovie Sauce</a></li><li class="chapter-item expanded affix "><li class="part-title">Meats</li><li class="chapter-item expanded "><a href="recipes/meats/meatballs.html"><strong aria-hidden="true">18.</strong> Meatballs</a></li><li class="chapter-item expanded "><a href="recipes/meats/braciola.html"><strong aria-hidden="true">19.</strong> Braciola</a></li><li class="chapter-item expanded "><a href="recipes/meats/roast_chicken.html"><strong aria-hidden="true">20.</strong> Roast Chicken Pieces w/ Potatoes</a></li><li class="chapter-item expanded "><a href="recipes/meats/chambaut.html"><strong aria-hidden="true">21.</strong> Chicken Chambaut</a></li><li class="chapter-item expanded "><a href="recipes/meats/wings.html"><strong aria-hidden="true">22.</strong> Wings, Peas, &amp; Potatoes</a></li><li class="chapter-item expanded "><a href="recipes/meats/pork.html"><strong aria-hidden="true">23.</strong> Pork Roast</a></li><li class="chapter-item expanded "><a href="recipes/meats/punset.html"><strong aria-hidden="true">24.</strong> Veal Punset</a></li><li class="chapter-item expanded "><a href="recipes/meats/scalloppini.html"><strong aria-hidden="true">25.</strong> Veal Scalloppini</a></li><li class="chapter-item expanded "><a href="recipes/meats/eggplant.html"><strong aria-hidden="true">26.</strong> Stuffed Eggplant</a></li><li class="chapter-item expanded "><a href="recipes/meats/bread_peppers.html"><strong aria-hidden="true">27.</strong> Italian Bread Stuffed Peppers</a></li><li class="chapter-item expanded "><a href="recipes/meats/meat_peppers.html"><strong aria-hidden="true">28.</strong> Meat Stuffed Peppers</a></li><li class="chapter-item expanded affix "><li class="part-title">Seafood</li><li class="chapter-item expanded "><a href="recipes/seafood/antipasto.html"><strong aria-hidden="true">29.</strong> Antipasto</a></li><li class="chapter-item expanded "><a href="recipes/seafood/red_baccala.html"><strong aria-hidden="true">30.</strong> Red Baccala</a></li><li class="chapter-item expanded "><a href="recipes/seafood/white_baccala.html"><strong aria-hidden="true">31.</strong> White Baccala</a></li><li class="chapter-item expanded "><a href="recipes/seafood/smelts.html"><strong aria-hidden="true">32.</strong> Fried Smelts</a></li><li class="chapter-item expanded "><a href="recipes/seafood/crabs.html"><strong aria-hidden="true">33.</strong> Garlic Crabs &amp; Spaghetti</a></li><li class="chapter-item expanded "><a href="recipes/seafood/rockfish.html"><strong aria-hidden="true">34.</strong> Baked Rockfish</a></li><li class="chapter-item expanded affix "><li class="part-title">Soup</li><li class="chapter-item expanded "><a href="recipes/soup/wedding.html"><strong aria-hidden="true">35.</strong> Wedding Soup</a></li><li class="chapter-item expanded affix "><li class="part-title">Vegetables</li><li class="chapter-item expanded "><a href="recipes/soup/chambaut.html"><strong aria-hidden="true">36.</strong> Chambaut</a></li><li class="chapter-item expanded "><a href="recipes/soup/escarole.html"><strong aria-hidden="true">37.</strong> Escarole w/ Oil &amp; Garlic</a></li><li class="chapter-item expanded "><a href="recipes/soup/greens.html"><strong aria-hidden="true">38.</strong> Greens &amp; Beans</a></li><li class="chapter-item expanded "><a href="recipes/soup/spinach.html"><strong aria-hidden="true">39.</strong> Spinach, Egg, &amp; Cheese</a></li><li class="chapter-item expanded "><a href="recipes/soup/cabbage.html"><strong aria-hidden="true">40.</strong> Savoy Cabbage</a></li><li class="chapter-item expanded "><a href="recipes/soup/tomato.html"><strong aria-hidden="true">41.</strong> Tomato Salad</a></li><li class="chapter-item expanded "><a href="recipes/soup/zuccini.html"><strong aria-hidden="true">42.</strong> Zuccini w/ Tomatoes</a></li><li class="chapter-item expanded "><a href="recipes/soup/olives.html"><strong aria-hidden="true">43.</strong> Dried Black Olives</a></li><li class="chapter-item expanded "><a href="recipes/soup/celery.html"><strong aria-hidden="true">44.</strong> Celery w/ Oil, Salt, &amp; Pepper</a></li><li class="chapter-item expanded affix "><li class="part-title">Pizza</li><li class="chapter-item expanded "><a href="recipes/pizza/dough.html"><strong aria-hidden="true">45.</strong> Pizza Dough</a></li><li class="chapter-item expanded "><a href="recipes/pizza/pizza.html"><strong aria-hidden="true">46.</strong> Cheese Pizza</a></li><li class="chapter-item expanded affix "><li class="part-title">Cookies</li><li class="chapter-item expanded "><a href="recipes/cookies/pizzelles.html"><strong aria-hidden="true">47.</strong> Pizzelles</a></li><li class="chapter-item expanded "><a href="recipes/cookies/biscuit.html"><strong aria-hidden="true">48.</strong> Biscuit Cookies</a></li><li class="chapter-item expanded "><a href="recipes/cookies/biscott.html"><strong aria-hidden="true">49.</strong> Biscott</a></li><li class="chapter-item expanded affix "><li class="part-title">Just Desserts</li><li class="chapter-item expanded "><a href="recipes/closing/closing.html"><strong aria-hidden="true">50.</strong> Closing</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
