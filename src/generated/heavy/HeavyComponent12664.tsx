'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12664<T> = T extends (infer U)[]
  ? DeepReadonlyArray12664<U>
  : T extends object
  ? DeepReadonlyObject12664<T>
  : T;

interface DeepReadonlyArray12664<T> extends ReadonlyArray<DeepReadonly12664<T>> {}

type DeepReadonlyObject12664<T> = {
  readonly [P in keyof T]: DeepReadonly12664<T[P]>;
};

type UnionToIntersection12664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12664<T> = UnionToIntersection12664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12664<T extends unknown[], V> = [...T, V];

type TuplifyUnion12664<T, L = LastOf12664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12664<TuplifyUnion12664<Exclude<T, L>>, L>;

type DeepPartial12664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12664<T[P]> }
  : T;

type Paths12664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12664<K, Paths12664<T[K], Prev12664[D]>> : never }[keyof T]
  : never;

type Prev12664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12664 {
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

type ConfigPaths12664 = Paths12664<NestedConfig12664>;

interface HeavyProps12664 {
  config: DeepPartial12664<NestedConfig12664>;
  path?: ConfigPaths12664;
}

const HeavyComponent12664 = memo(function HeavyComponent12664({ config }: HeavyProps12664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12664.displayName = 'HeavyComponent12664';
export default HeavyComponent12664;
