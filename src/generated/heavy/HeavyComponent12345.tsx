'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12345<T> = T extends (infer U)[]
  ? DeepReadonlyArray12345<U>
  : T extends object
  ? DeepReadonlyObject12345<T>
  : T;

interface DeepReadonlyArray12345<T> extends ReadonlyArray<DeepReadonly12345<T>> {}

type DeepReadonlyObject12345<T> = {
  readonly [P in keyof T]: DeepReadonly12345<T[P]>;
};

type UnionToIntersection12345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12345<T> = UnionToIntersection12345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12345<T extends unknown[], V> = [...T, V];

type TuplifyUnion12345<T, L = LastOf12345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12345<TuplifyUnion12345<Exclude<T, L>>, L>;

type DeepPartial12345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12345<T[P]> }
  : T;

type Paths12345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12345<K, Paths12345<T[K], Prev12345[D]>> : never }[keyof T]
  : never;

type Prev12345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12345 {
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

type ConfigPaths12345 = Paths12345<NestedConfig12345>;

interface HeavyProps12345 {
  config: DeepPartial12345<NestedConfig12345>;
  path?: ConfigPaths12345;
}

const HeavyComponent12345 = memo(function HeavyComponent12345({ config }: HeavyProps12345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12345.displayName = 'HeavyComponent12345';
export default HeavyComponent12345;
