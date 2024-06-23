'use client';

import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { useTransition, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export function Search(props: { firstName?: string, lastName?: string, unmask?: number }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (firstName && firstName !== undefined) {
      params.set('firstName', firstName);
    } else {
      params.delete('firstName');
    }

    if (lastName && lastName !== undefined) {
      params.set('lastName', lastName);
    } else {
      params.delete('lastName');
    }

    startTransition(() => {
      // All navigation is transitions automatically
      // But wrapping this allow us to observe the pending state
      router.replace(`/?${params.toString()}`);
    });
  }, [router, firstName, lastName]);

  function onUnmask() {
    const params = new URLSearchParams(window.location.search);
    params.set('unmask', "1");
    router.replace(`/?${params.toString()}`);
  }

  function onRevertUnmask() {
    const params = new URLSearchParams(window.location.search);
    params.delete('unmask');
    router.replace(`/?${params.toString()}`);
  }

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <Input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            type="text" 
            placeholder="Starts with.." 
            ref={inputRef}
            value={firstName ?? ''}
            onInput={(e) => {
              setFirstName(e.currentTarget.value);
            }}
            spellCheck={false}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <Input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
            type="text" 
            placeholder="Ends with.."
            ref={inputRef}
            value={lastName ?? ''}
            onInput={(e) => {
              setLastName(e.currentTarget.value);
            }}
            spellCheck={false}
          />
        </div>
        { !props.unmask?
          <Button
            className="mt-4 w-40"
            variant="outline"
            onClick={() => onUnmask()}
          >
            Unmask
          </Button>:
          <Button
              className="mt-4 w-40"
              variant="outline"
              onClick={() => onRevertUnmask()}
            >
            Revert unmask
          </Button>
        }
        {isPending && <Spinner />}
      </div>
    </>
  );
}
