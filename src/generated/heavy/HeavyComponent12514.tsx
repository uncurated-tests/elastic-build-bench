'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12514<T> = T extends (infer U)[]
  ? DeepReadonlyArray12514<U>
  : T extends object
  ? DeepReadonlyObject12514<T>
  : T;

interface DeepReadonlyArray12514<T> extends ReadonlyArray<DeepReadonly12514<T>> {}

type DeepReadonlyObject12514<T> = {
  readonly [P in keyof T]: DeepReadonly12514<T[P]>;
};

type UnionToIntersection12514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12514<T> = UnionToIntersection12514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12514<T extends unknown[], V> = [...T, V];

type TuplifyUnion12514<T, L = LastOf12514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12514<TuplifyUnion12514<Exclude<T, L>>, L>;

type DeepPartial12514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12514<T[P]> }
  : T;

type Paths12514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12514<K, Paths12514<T[K], Prev12514[D]>> : never }[keyof T]
  : never;

type Prev12514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12514 {
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

type ConfigPaths12514 = Paths12514<NestedConfig12514>;

interface HeavyProps12514 {
  config: DeepPartial12514<NestedConfig12514>;
  path?: ConfigPaths12514;
}

const HeavyComponent12514 = memo(function HeavyComponent12514({ config }: HeavyProps12514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12514.displayName = 'HeavyComponent12514';
export default HeavyComponent12514;
