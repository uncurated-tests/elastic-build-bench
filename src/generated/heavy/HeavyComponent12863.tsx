'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12863<T> = T extends (infer U)[]
  ? DeepReadonlyArray12863<U>
  : T extends object
  ? DeepReadonlyObject12863<T>
  : T;

interface DeepReadonlyArray12863<T> extends ReadonlyArray<DeepReadonly12863<T>> {}

type DeepReadonlyObject12863<T> = {
  readonly [P in keyof T]: DeepReadonly12863<T[P]>;
};

type UnionToIntersection12863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12863<T> = UnionToIntersection12863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12863<T extends unknown[], V> = [...T, V];

type TuplifyUnion12863<T, L = LastOf12863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12863<TuplifyUnion12863<Exclude<T, L>>, L>;

type DeepPartial12863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12863<T[P]> }
  : T;

type Paths12863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12863<K, Paths12863<T[K], Prev12863[D]>> : never }[keyof T]
  : never;

type Prev12863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12863 {
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

type ConfigPaths12863 = Paths12863<NestedConfig12863>;

interface HeavyProps12863 {
  config: DeepPartial12863<NestedConfig12863>;
  path?: ConfigPaths12863;
}

const HeavyComponent12863 = memo(function HeavyComponent12863({ config }: HeavyProps12863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12863.displayName = 'HeavyComponent12863';
export default HeavyComponent12863;
