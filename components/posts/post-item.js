import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";
function PostItem(props) {
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image />
          </div>
          <div className={classes.content}>
            <h3>TITLE</h3>
            <time>July 13th 2022</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
