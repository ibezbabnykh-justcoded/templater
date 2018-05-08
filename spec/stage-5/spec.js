describe("Stage 5", function() {
  it("must create method `templater` for `jQuery.fn`", function() {
    (typeof jQuery.fn.templater).should.equals('function');
  });
  
  it("must replace element with tag `panel` to element with tag `div`, class 'panel', and innerHtml with `div` class 'panel-heading' and `div` class 'panel-body' inside with text 'Some outer content'", function() {
    $('panel').length.should.equals(2);
        $(document).templater({
            tags: {
              'panel': `<div class='panel'><div class='panel-heading'>{{heading}}</div><div class='panel-body'>{{html}}</div></div>`
            }
        });

        var replaced = $('.panel');
        replaced.length.should.equals(2, 'Element with `div` tag was not created. Amount of `div` elements in DOM');
        replaced.attr('class').should.equals('panel', 'Element with `div` tag has wrong class. It has class');
        replaced.html().replace(/\n/g, '').replace(/  /g, '').should.equals(`<div class="panel-heading">Outer Panel</div><div class="panel-body"><div>Some outer content</div><div class="panel"><div class="panel-heading">Inner Panel</div><div class="panel-body"><div>Some Inner content</div></div></div></div>`, 'Element with `div` tag innerHTML');
    });

});