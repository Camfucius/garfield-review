require "rails_helper"

feature "User views the index page" do
  scenario "sees a list of products" do
    Product.create(name: "Garfield Mmm lasagna teeshirt", url: "https://www.amazon.com/Garfield-Mmm-Lasagna/dp/B07KWRXSLC/ref=sr_1_6_sspa?dchild=1&keywords=garfield&qid=1595352489&sr=8-6-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRVo3MFkyNEkwWFo1JmVuY3J5cHRlZElkPUEwNDEzNzI3R1o4QlQ1VzBNNVhZJmVuY3J5cHRlZEFkSWQ9QTAxMzM1MjIyTzdFWUM0SUZEVlpDJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)", description: "100% fun with a cotton backing", image_url: "https://m.media-amazon.com/images/I/B1DnWZEQ8ES._AC_CLa%7C2140%2C2000%7C91oOwyHsCDL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX679_.png")

    visit products_path

    expect(page).to have_content "Garfield Mmm lasagna teeshirt"
    expect(page).to have_link "Buy Garfield Mmm lasagna teeshirt here!"
    expect(page).to have_content "100% fun with a cotton backing"
    find("img[src*='https://m.media-amazon.com/images/I/B1DnWZEQ8ES._AC_CLa%7C2140%2C2000%7C91oOwyHsCDL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX679_.png']")
  end
end