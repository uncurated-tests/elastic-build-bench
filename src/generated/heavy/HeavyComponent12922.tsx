'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12922<T> = T extends (infer U)[]
  ? DeepReadonlyArray12922<U>
  : T extends object
  ? DeepReadonlyObject12922<T>
  : T;

interface DeepReadonlyArray12922<T> extends ReadonlyArray<DeepReadonly12922<T>> {}

type DeepReadonlyObject12922<T> = {
  readonly [P in keyof T]: DeepReadonly12922<T[P]>;
};

type UnionToIntersection12922<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12922<T> = UnionToIntersection12922<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12922<T extends unknown[], V> = [...T, V];

type TuplifyUnion12922<T, L = LastOf12922<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12922<TuplifyUnion12922<Exclude<T, L>>, L>;

type DeepPartial12922<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12922<T[P]> }
  : T;

type Paths12922<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12922<K, Paths12922<T[K], Prev12922[D]>> : never }[keyof T]
  : never;

type Prev12922 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12922<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12922 {
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

type ConfigPaths12922 = Paths12922<NestedConfig12922>;

interface HeavyProps12922 {
  config: DeepPartial12922<NestedConfig12922>;
  path?: ConfigPaths12922;
}

const HeavyComponent12922 = memo(function HeavyComponent12922({ config }: HeavyProps12922) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12922) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12922 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12922: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12922.displayName = 'HeavyComponent12922';
export default HeavyComponent12922;
