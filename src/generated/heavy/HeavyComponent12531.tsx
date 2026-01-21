'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12531<T> = T extends (infer U)[]
  ? DeepReadonlyArray12531<U>
  : T extends object
  ? DeepReadonlyObject12531<T>
  : T;

interface DeepReadonlyArray12531<T> extends ReadonlyArray<DeepReadonly12531<T>> {}

type DeepReadonlyObject12531<T> = {
  readonly [P in keyof T]: DeepReadonly12531<T[P]>;
};

type UnionToIntersection12531<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12531<T> = UnionToIntersection12531<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12531<T extends unknown[], V> = [...T, V];

type TuplifyUnion12531<T, L = LastOf12531<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12531<TuplifyUnion12531<Exclude<T, L>>, L>;

type DeepPartial12531<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12531<T[P]> }
  : T;

type Paths12531<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12531<K, Paths12531<T[K], Prev12531[D]>> : never }[keyof T]
  : never;

type Prev12531 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12531<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12531 {
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

type ConfigPaths12531 = Paths12531<NestedConfig12531>;

interface HeavyProps12531 {
  config: DeepPartial12531<NestedConfig12531>;
  path?: ConfigPaths12531;
}

const HeavyComponent12531 = memo(function HeavyComponent12531({ config }: HeavyProps12531) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12531) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12531 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12531: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12531.displayName = 'HeavyComponent12531';
export default HeavyComponent12531;
