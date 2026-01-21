'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14078<T> = T extends (infer U)[]
  ? DeepReadonlyArray14078<U>
  : T extends object
  ? DeepReadonlyObject14078<T>
  : T;

interface DeepReadonlyArray14078<T> extends ReadonlyArray<DeepReadonly14078<T>> {}

type DeepReadonlyObject14078<T> = {
  readonly [P in keyof T]: DeepReadonly14078<T[P]>;
};

type UnionToIntersection14078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14078<T> = UnionToIntersection14078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14078<T extends unknown[], V> = [...T, V];

type TuplifyUnion14078<T, L = LastOf14078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14078<TuplifyUnion14078<Exclude<T, L>>, L>;

type DeepPartial14078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14078<T[P]> }
  : T;

type Paths14078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14078<K, Paths14078<T[K], Prev14078[D]>> : never }[keyof T]
  : never;

type Prev14078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14078 {
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

type ConfigPaths14078 = Paths14078<NestedConfig14078>;

interface HeavyProps14078 {
  config: DeepPartial14078<NestedConfig14078>;
  path?: ConfigPaths14078;
}

const HeavyComponent14078 = memo(function HeavyComponent14078({ config }: HeavyProps14078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14078.displayName = 'HeavyComponent14078';
export default HeavyComponent14078;
