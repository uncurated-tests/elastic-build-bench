'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14183<T> = T extends (infer U)[]
  ? DeepReadonlyArray14183<U>
  : T extends object
  ? DeepReadonlyObject14183<T>
  : T;

interface DeepReadonlyArray14183<T> extends ReadonlyArray<DeepReadonly14183<T>> {}

type DeepReadonlyObject14183<T> = {
  readonly [P in keyof T]: DeepReadonly14183<T[P]>;
};

type UnionToIntersection14183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14183<T> = UnionToIntersection14183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14183<T extends unknown[], V> = [...T, V];

type TuplifyUnion14183<T, L = LastOf14183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14183<TuplifyUnion14183<Exclude<T, L>>, L>;

type DeepPartial14183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14183<T[P]> }
  : T;

type Paths14183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14183<K, Paths14183<T[K], Prev14183[D]>> : never }[keyof T]
  : never;

type Prev14183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14183 {
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

type ConfigPaths14183 = Paths14183<NestedConfig14183>;

interface HeavyProps14183 {
  config: DeepPartial14183<NestedConfig14183>;
  path?: ConfigPaths14183;
}

const HeavyComponent14183 = memo(function HeavyComponent14183({ config }: HeavyProps14183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14183.displayName = 'HeavyComponent14183';
export default HeavyComponent14183;
