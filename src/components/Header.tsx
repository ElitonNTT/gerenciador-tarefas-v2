/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div>Logo</div>
      <div className="flex items-center gap-4 ">
        {!session ? (
          <></>
        ) : (
          <>
            <div>{session?.user?.name}</div>
            <img
              src={`${session?.user?.image}`}
              alt="Avatar"
              width={36}
              height={36}
              className="rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="bg-red-700 rounded-md px-4 py-2"
            >
              sair
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
