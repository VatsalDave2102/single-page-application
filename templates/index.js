let index = `<!--Sections-->
<section
  class="bg-light text-dark p-md-5 py-3 p-lg-0 pt-lg-5 text-center text-sm-start"
>
  <div class="container">
    <div class="d-sm-flex align-items-center justify-content-center">
      <div class="mb-3">
        <h1>
          Welcome to
          <span class="text" style="color: var(--purple)">flipkart</span>
        </h1>
        <p class="lead my-4">
          Discover a large range of products. From outdoor equipments to home
          appliances. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore ipsam dicta cum minima, molestiae iusto officiis alias
          necessitatibus, quia quasi, beatae obcaecati culpa dolore tempora
          saepe id soluta eveniet enim!
        </p>
        <a href="/categories" class="btn custom-btn text-light btn-lg">Shop now</a>
      </div>
      <img
        class="img-fluid w-50 d-none d-sm-block mb-5"
        src="/assets/on-the-office-s29.jpg"
        alt=""
      />
    </div>
  </div>
</section>

<!--Carousel-->
<section class="p-5 carousel d-none d-md-block">
  <div class="container">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/assets/carousel/1f5e4b03346c32f7.webp"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/assets/carousel/download.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/assets/carousel/download (1).jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

 <!--Offers-->
 <section class="newsletter text-light p-5">
    <div class="container">
      <div class="d-flex justify-content-between align-itmes-center">
        <h3 class="mb-3 mb-md-0">Sign up for our newsletter and exciting offers</h3>
        <div class="input-group news-input d-flex justify-content-end">
          <button class="btn btn-lg custom-btm text-light border" data-bs-toggle="modal" data-bs-target="#news" type="button" id="button-addon2">Sign up</button>
        </div>
      </div>
    </div>
  </section>

<!--modal-->
<div class="modal fade" id="news" tabindex="-1" aria-labelledby="newsLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newsLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="lead">Fill this form out</p>
          <form action="">
            <div class="mb-3">
              <label for="first-name" class="col-form-label">First Name: </label>
              <input type="text" class="form-control" id="first-name">
            </div>
            <div class="mb-3">
              <label for="last-name" class="col-form-label">Last Name: </label>
              <input type="text" class="form-control" id="Last-name">
            </div>
            <div class="mb-3">
              <label for="email" class="col-form-label">Email: </label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
              <label for="mobile" class="col-form-label">Mobile number: </label>
              <input type="number" class="form-control" id="moblie">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn custom-btn text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <!--Accordion-->
  <section class="p-md-5 py-3" id="FAQ">
    <div class="container">
      <h2 class="text-center mb-4">
        Help Center
      </h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <!--FAQ 1-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
              What is our return policy?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, vitae! Recusandae sunt ipsa dicta mollitia ea earum, consequatur inventore totam culpa placeat temporibus dolor. Eligendi obcaecati illo impedit earum a voluptates, tempora aliquam numquam autem dignissimos sequi, consequuntur temporibus, delectus voluptatum esse consequatur veniam tempore rerum ducimus cum dolorum. Temporibus.</div>
          </div>
        </div>
         <!--FAQ 2-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
              Where are our offline stores?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias quibusdam ullam facere, nesciunt exercitationem numquam dicta vitae laudantium ipsa consequatur praesentium quod ratione harum reiciendis dolorum facilis ipsum veritatis?</div>
          </div>
        </div>
         <!--FAQ 3-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
              What are the benefits of being a premium user?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio vitae, recusandae natus, deleniti nisi magni eos qui at quidem minima praesentium? Officia omnis eveniet mollitia repudiandae quas itaque consequatur fuga odio impedit. Repellat vero autem, obcaecati perspiciatis praesentium repellendus modi dolore id rerum ratione eligendi ab doloremque quae sapiente cumque voluptatibus voluptates voluptatum consequuntur molestiae corporis porro aliquid ut!</div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  export {index}