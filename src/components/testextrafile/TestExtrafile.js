import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classnames from "classnames";
import './testextrafile.css'

export default class TestExtrafile extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    render() {
        return (
            <>
            <nav
            className={classnames("navbar", {
            "navbar--hidden": !this.state.visible
            })}
        >
            <Link to="/">
                Link 1
            </Link>
            <Link to="/">
                Link 2
            </Link>
            <Link to="/">
                Link 3
            </Link>
        </nav>
            <div>
                <h2>Test Extra File</h2>
                <h2>Test Extra File 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quam vitae perferendis. Provident, inventore deserunt perspiciatis velit impedit cumque culpa facere quibusdam dolorem obcaecati nostrum aspernatur eaque nisi ad beatae minus iste optio illo atque a sapiente modi dolorum? Distinctio ipsum est labore sapiente dolores beatae quo expedita! Repellat dolorum mollitia deserunt, quaerat ratione nulla molestias et, expedita optio aut possimus quisquam illo reprehenderit cum iure fuga omnis neque aspernatur, fugit voluptates quas repellendus quod esse temporibus? Magnam, assumenda. Atque excepturi eum corrupti consequatur similique fugiat quibusdam accusamus tempora, dolores iste placeat, temporibus nostrum, aperiam veniam quae vero autem possimus sed a velit nisi? Optio soluta nesciunt veniam ut. Voluptas, totam magni illum maiores saepe dolorem. Maiores temporibus voluptate id similique quo nulla distinctio magnam obcaecati optio! Explicabo consectetur, mollitia ullam ut temporibus quam aspernatur ea quibusdam autem ad beatae quos in, earum, unde dolor facilis veniam et assumenda dolore obcaecati dignissimos. Optio asperiores magni ea cupiditate a impedit quos quae dolores, distinctio odit totam, pariatur itaque voluptatibus vero aliquid assumenda nam velit fuga esse, dolorum obcaecati laboriosam. Vel deleniti harum in exercitationem voluptatum esse sed repudiandae, mollitia tempore nemo, reprehenderit fugiat cumque ab ipsum fugit sunt eaque totam facere porro, vero itaque quia debitis? Id omnis perferendis cum voluptas debitis suscipit atque illo, sequi, minima, ea officiis voluptates. Voluptate numquam id, sunt nobis ducimus repellendus quaerat dolore maxime a tempore, dolor provident ea laborum optio temporibus quo ad? Perspiciatis eveniet sit placeat eaque explicabo minima, qui aliquam, distinctio alias, sint nobis. Cum odio architecto sapiente numquam. Enim, perferendis. Praesentium commodi aspernatur vel dolor ullam impedit ea expedita necessitatibus nesciunt perspiciatis ducimus beatae possimus mollitia, soluta ad quisquam rerum corporis quae sed quas velit nemo quia laborum voluptatem? Error quaerat tenetur, corporis maiores officia consequuntur quos veritatis perferendis consequatur reiciendis vitae quo non necessitatibus praesentium eius debitis pariatur inventore vel? Aliquid, illo repellendus dolores qui suscipit excepturi, magnam quas eveniet necessitatibus dolor perferendis et fugit distinctio veniam modi vel! Fugit iure eligendi quis voluptas laborum necessitatibus molestiae voluptates at error dolores! Sit, hic corporis ea illo ad dignissimos, sint autem similique, eos dolor quo! Aut natus dicta ducimus. Voluptatibus sunt nam laboriosam qui optio, incidunt cumque aspernatur, ex, nostrum placeat veniam facere corrupti. Inventore ab ratione esse debitis similique maiores, necessitatibus nesciunt officia placeat voluptas quod culpa sunt sint, consequuntur quidem ex atque error ea mollitia neque explicabo. Illo nemo fugiat sit maxime maiores vitae vero voluptatem, omnis, magni ab quas praesentium. Eum reiciendis dolores deserunt consequatur quibusdam, dicta, voluptatem sequi recusandae facere magnam ipsum? Quidem nam eaque, consectetur repellendus ratione in assumenda, minima expedita non incidunt repellat magnam, molestiae quaerat. Eligendi numquam sapiente nihil illo inventore ad et ullam dicta maxime debitis laboriosam quaerat, quod error delectus optio ratione eum repellat fuga placeat vero eaque expedita veritatis vel voluptatem? Aut sequi, quos modi accusamus fugiat dignissimos perspiciatis nihil eveniet eos labore doloremque quas, placeat adipisci. Sapiente, earum vel ducimus accusantium expedita mollitia maxime possimus adipisci consectetur harum in necessitatibus.</p>
            </div>
            </>
        )
    }
}
