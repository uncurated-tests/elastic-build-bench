'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14630<T> = T extends (infer U)[]
  ? DeepReadonlyArray14630<U>
  : T extends object
  ? DeepReadonlyObject14630<T>
  : T;

interface DeepReadonlyArray14630<T> extends ReadonlyArray<DeepReadonly14630<T>> {}

type DeepReadonlyObject14630<T> = {
  readonly [P in keyof T]: DeepReadonly14630<T[P]>;
};

type UnionToIntersection14630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14630<T> = UnionToIntersection14630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14630<T extends unknown[], V> = [...T, V];

type TuplifyUnion14630<T, L = LastOf14630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14630<TuplifyUnion14630<Exclude<T, L>>, L>;

type DeepPartial14630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14630<T[P]> }
  : T;

type Paths14630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14630<K, Paths14630<T[K], Prev14630[D]>> : never }[keyof T]
  : never;

type Prev14630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14630 {
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

type ConfigPaths14630 = Paths14630<NestedConfig14630>;

interface HeavyProps14630 {
  config: DeepPartial14630<NestedConfig14630>;
  path?: ConfigPaths14630;
}

const HeavyComponent14630 = memo(function HeavyComponent14630({ config }: HeavyProps14630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14630.displayName = 'HeavyComponent14630';
export default HeavyComponent14630;
