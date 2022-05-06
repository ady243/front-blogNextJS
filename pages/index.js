import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Navbar from "../src/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="mx-auto col-md-8">
          <h3 className="border-dotted text-primary">
            <i>Lorem Ipsun Post</i>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum
            leo, tristique eu tristique non, volutpat id eros. Suspendisse
            finibus gravida dolor, sit amet faucibus dui tempus tincidunt. Etiam
            venenatis congue diam, a varius justo vehicula sit amet. Donec sed
            pulvinar libero. Etiam nisl dolor, gravida non dolor nec, dignissim
            efficitur mi. Integer nisl tortor, semper at orci at, iaculis
            molestie ante. Praesent a gravida est. Praesent non sapien molestie
            ex fermentum vestibulum. Cras molestie sem libero, et efficitur eros
            blandit vitae. Vestibulum vel bibendum risus, eu sodales justo.
            Nullam tempor sit amet tellus ac imperdiet. Donec eget tempus mi.
            Phasellus finibus purus aliquam cursus rhoncus. Praesent aliquet
            venenatis fringilla. Nam et quam at tortor volutpat accumsan ac eu
            neque. Integer sed felis hendrerit, lacinia sapien vel, aliquet
            ligula. Integer tincidunt diam magna, sit amet varius velit commodo
            et. Phasellus a metus eleifend, condimentum est quis, auctor augue.
            Quisque ut sem nisl. Proin viverra, diam ac rhoncus bibendum, lorem
            magna scelerisque metus, a posuere augue arcu et dolor. Quisque
            tincidunt magna in consequat aliquam. Nunc eu suscipit tortor.
            Aliquam erat volutpat. Donec massa mauris, suscipit bibendum gravida
            id, dapibus ac libero. Nulla pharetra velit eget erat semper
            condimentum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum
            leo, tristique eu tristique non, volutpat id eros. Suspendisse
            finibus gravida dolor, sit amet faucibus dui tempus tincidunt. Etiam
            venenatis congue diam, a varius justo vehicula sit amet. Donec sed
            pulvinar libero. Etiam nisl dolor, gravida non dolor nec, dignissim
            efficitur mi. Integer nisl tortor, semper at orci at, iaculis
            molestie ante. Praesent a gravida est. Praesent non sapien molestie
            ex fermentum vestibulum. Cras molestie sem libero, et efficitur eros
            blandit vitae. Vestibulum vel bibendum risus, eu sodales justo.
            Nullam tempor sit amet tellus ac imperdiet. Donec eget tempus mi.
            Phasellus finibus purus aliquam cursus rhoncus. Praesent aliquet
            venenatis fringilla. Nam et quam at tortor volutpat accumsan ac eu
            neque. Integer sed felis hendrerit, lacinia sapien vel, aliquet
            ligula. Integer tincidunt diam magna, sit amet varius velit commodo
            et. Phasellus a metus eleifend, condimentum est quis, auctor augue.
            Quisque ut sem nisl. Proin viverra, diam ac rhoncus bibendum, lorem
            magna scelerisque metus, a posuere augue arcu et dolor. Quisque
            tincidunt magna in consequat aliquam. Nunc eu suscipit tortor.
            Aliquam erat volutpat. Donec massa mauris, suscipit bibendum gravida
            id, dapibus ac libero. Nulla pharetra velit eget erat semper
            condimentum.
          </p>

          <Link href="/signIn">
            <a className="btn btn-lg btn-primary" role="button">
              Comment
            </a>
          </Link>
        </div>
      </div>
      <br></br>
      <div className="mx-auto col-md-8">
        <h3 className="text-primary">
          <i>Lorem Ipsun Post II</i>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum
          leo, tristique eu tristique non, volutpat id eros. Suspendisse finibus
          gravida dolor, sit amet faucibus dui tempus tincidunt. Etiam venenatis
          congue diam, a varius justo vehicula sit amet. Donec sed pulvinar
          libero. Etiam nisl dolor, gravida non dolor nec, dignissim efficitur
          mi. Integer nisl tortor, semper at orci at, iaculis molestie ante.
          Praesent a gravida est. Praesent non sapien molestie ex fermentum
          vestibulum. Cras molestie sem libero, et efficitur eros blandit vitae.
          Vestibulum vel bibendum risus, eu sodales justo. Nullam tempor sit
          amet tellus ac imperdiet. Donec eget tempus mi. Phasellus finibus
          purus aliquam cursus rhoncus. Praesent aliquet venenatis fringilla.
          Nam et quam at tortor volutpat accumsan ac eu neque. Integer sed felis
          hendrerit, lacinia sapien vel, aliquet ligula. Integer tincidunt diam
          magna, sit amet varius velit commodo et. Phasellus a metus eleifend,
          condimentum est quis, auctor augue. Quisque ut sem nisl. Proin
          viverra, diam ac rhoncus bibendum, lorem magna scelerisque metus, a
          posuere augue arcu et dolor. Quisque tincidunt magna in consequat
          aliquam. Nunc eu suscipit tortor. Aliquam erat volutpat. Donec massa
          mauris, suscipit bibendum gravida id, dapibus ac libero. Nulla
          pharetra velit eget erat semper condimentum.
        </p>

        <Link href="/signIn">
          <a className="btn btn-lg btn-primary" role="button">
            Comment
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
