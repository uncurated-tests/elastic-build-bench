'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12696<T> = T extends (infer U)[]
  ? DeepReadonlyArray12696<U>
  : T extends object
  ? DeepReadonlyObject12696<T>
  : T;

interface DeepReadonlyArray12696<T> extends ReadonlyArray<DeepReadonly12696<T>> {}

type DeepReadonlyObject12696<T> = {
  readonly [P in keyof T]: DeepReadonly12696<T[P]>;
};

type UnionToIntersection12696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12696<T> = UnionToIntersection12696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12696<T extends unknown[], V> = [...T, V];

type TuplifyUnion12696<T, L = LastOf12696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12696<TuplifyUnion12696<Exclude<T, L>>, L>;

type DeepPartial12696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12696<T[P]> }
  : T;

type Paths12696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12696<K, Paths12696<T[K], Prev12696[D]>> : never }[keyof T]
  : never;

type Prev12696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12696 {
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

type ConfigPaths12696 = Paths12696<NestedConfig12696>;

interface HeavyProps12696 {
  config: DeepPartial12696<NestedConfig12696>;
  path?: ConfigPaths12696;
}

const HeavyComponent12696 = memo(function HeavyComponent12696({ config }: HeavyProps12696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12696.displayName = 'HeavyComponent12696';
export default HeavyComponent12696;
