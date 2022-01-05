import Image from "next/image";
import Link from "next/link";
function PostItem() {
  return (
    <li>
      <Link>
        <a>
          <div>
            <Image />
          </div>
          <div>
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
