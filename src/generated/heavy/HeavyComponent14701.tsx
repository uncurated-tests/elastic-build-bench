'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14701<T> = T extends (infer U)[]
  ? DeepReadonlyArray14701<U>
  : T extends object
  ? DeepReadonlyObject14701<T>
  : T;

interface DeepReadonlyArray14701<T> extends ReadonlyArray<DeepReadonly14701<T>> {}

type DeepReadonlyObject14701<T> = {
  readonly [P in keyof T]: DeepReadonly14701<T[P]>;
};

type UnionToIntersection14701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14701<T> = UnionToIntersection14701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14701<T extends unknown[], V> = [...T, V];

type TuplifyUnion14701<T, L = LastOf14701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14701<TuplifyUnion14701<Exclude<T, L>>, L>;

type DeepPartial14701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14701<T[P]> }
  : T;

type Paths14701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14701<K, Paths14701<T[K], Prev14701[D]>> : never }[keyof T]
  : never;

type Prev14701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14701 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14701 = Paths14701<NestedConfig14701>;

interface HeavyProps14701 {
  config: DeepPartial14701<NestedConfig14701>;
  path?: ConfigPaths14701;
}

const HeavyComponent14701 = memo(function HeavyComponent14701({ config }: HeavyProps14701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14701.displayName = 'HeavyComponent14701';
export default HeavyComponent14701;
