'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14483<T> = T extends (infer U)[]
  ? DeepReadonlyArray14483<U>
  : T extends object
  ? DeepReadonlyObject14483<T>
  : T;

interface DeepReadonlyArray14483<T> extends ReadonlyArray<DeepReadonly14483<T>> {}

type DeepReadonlyObject14483<T> = {
  readonly [P in keyof T]: DeepReadonly14483<T[P]>;
};

type UnionToIntersection14483<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14483<T> = UnionToIntersection14483<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14483<T extends unknown[], V> = [...T, V];

type TuplifyUnion14483<T, L = LastOf14483<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14483<TuplifyUnion14483<Exclude<T, L>>, L>;

type DeepPartial14483<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14483<T[P]> }
  : T;

type Paths14483<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14483<K, Paths14483<T[K], Prev14483[D]>> : never }[keyof T]
  : never;

type Prev14483 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14483<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14483 {
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

type ConfigPaths14483 = Paths14483<NestedConfig14483>;

interface HeavyProps14483 {
  config: DeepPartial14483<NestedConfig14483>;
  path?: ConfigPaths14483;
}

const HeavyComponent14483 = memo(function HeavyComponent14483({ config }: HeavyProps14483) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14483) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14483 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14483: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14483.displayName = 'HeavyComponent14483';
export default HeavyComponent14483;
