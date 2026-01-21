'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14122<T> = T extends (infer U)[]
  ? DeepReadonlyArray14122<U>
  : T extends object
  ? DeepReadonlyObject14122<T>
  : T;

interface DeepReadonlyArray14122<T> extends ReadonlyArray<DeepReadonly14122<T>> {}

type DeepReadonlyObject14122<T> = {
  readonly [P in keyof T]: DeepReadonly14122<T[P]>;
};

type UnionToIntersection14122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14122<T> = UnionToIntersection14122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14122<T extends unknown[], V> = [...T, V];

type TuplifyUnion14122<T, L = LastOf14122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14122<TuplifyUnion14122<Exclude<T, L>>, L>;

type DeepPartial14122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14122<T[P]> }
  : T;

type Paths14122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14122<K, Paths14122<T[K], Prev14122[D]>> : never }[keyof T]
  : never;

type Prev14122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14122 {
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

type ConfigPaths14122 = Paths14122<NestedConfig14122>;

interface HeavyProps14122 {
  config: DeepPartial14122<NestedConfig14122>;
  path?: ConfigPaths14122;
}

const HeavyComponent14122 = memo(function HeavyComponent14122({ config }: HeavyProps14122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14122.displayName = 'HeavyComponent14122';
export default HeavyComponent14122;
