'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12166<T> = T extends (infer U)[]
  ? DeepReadonlyArray12166<U>
  : T extends object
  ? DeepReadonlyObject12166<T>
  : T;

interface DeepReadonlyArray12166<T> extends ReadonlyArray<DeepReadonly12166<T>> {}

type DeepReadonlyObject12166<T> = {
  readonly [P in keyof T]: DeepReadonly12166<T[P]>;
};

type UnionToIntersection12166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12166<T> = UnionToIntersection12166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12166<T extends unknown[], V> = [...T, V];

type TuplifyUnion12166<T, L = LastOf12166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12166<TuplifyUnion12166<Exclude<T, L>>, L>;

type DeepPartial12166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12166<T[P]> }
  : T;

type Paths12166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12166<K, Paths12166<T[K], Prev12166[D]>> : never }[keyof T]
  : never;

type Prev12166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12166 {
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

type ConfigPaths12166 = Paths12166<NestedConfig12166>;

interface HeavyProps12166 {
  config: DeepPartial12166<NestedConfig12166>;
  path?: ConfigPaths12166;
}

const HeavyComponent12166 = memo(function HeavyComponent12166({ config }: HeavyProps12166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12166.displayName = 'HeavyComponent12166';
export default HeavyComponent12166;
