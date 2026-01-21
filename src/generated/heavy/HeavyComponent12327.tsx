'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12327<T> = T extends (infer U)[]
  ? DeepReadonlyArray12327<U>
  : T extends object
  ? DeepReadonlyObject12327<T>
  : T;

interface DeepReadonlyArray12327<T> extends ReadonlyArray<DeepReadonly12327<T>> {}

type DeepReadonlyObject12327<T> = {
  readonly [P in keyof T]: DeepReadonly12327<T[P]>;
};

type UnionToIntersection12327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12327<T> = UnionToIntersection12327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12327<T extends unknown[], V> = [...T, V];

type TuplifyUnion12327<T, L = LastOf12327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12327<TuplifyUnion12327<Exclude<T, L>>, L>;

type DeepPartial12327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12327<T[P]> }
  : T;

type Paths12327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12327<K, Paths12327<T[K], Prev12327[D]>> : never }[keyof T]
  : never;

type Prev12327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12327 {
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

type ConfigPaths12327 = Paths12327<NestedConfig12327>;

interface HeavyProps12327 {
  config: DeepPartial12327<NestedConfig12327>;
  path?: ConfigPaths12327;
}

const HeavyComponent12327 = memo(function HeavyComponent12327({ config }: HeavyProps12327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12327.displayName = 'HeavyComponent12327';
export default HeavyComponent12327;
