'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12287<T> = T extends (infer U)[]
  ? DeepReadonlyArray12287<U>
  : T extends object
  ? DeepReadonlyObject12287<T>
  : T;

interface DeepReadonlyArray12287<T> extends ReadonlyArray<DeepReadonly12287<T>> {}

type DeepReadonlyObject12287<T> = {
  readonly [P in keyof T]: DeepReadonly12287<T[P]>;
};

type UnionToIntersection12287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12287<T> = UnionToIntersection12287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12287<T extends unknown[], V> = [...T, V];

type TuplifyUnion12287<T, L = LastOf12287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12287<TuplifyUnion12287<Exclude<T, L>>, L>;

type DeepPartial12287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12287<T[P]> }
  : T;

type Paths12287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12287<K, Paths12287<T[K], Prev12287[D]>> : never }[keyof T]
  : never;

type Prev12287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12287 {
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

type ConfigPaths12287 = Paths12287<NestedConfig12287>;

interface HeavyProps12287 {
  config: DeepPartial12287<NestedConfig12287>;
  path?: ConfigPaths12287;
}

const HeavyComponent12287 = memo(function HeavyComponent12287({ config }: HeavyProps12287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12287.displayName = 'HeavyComponent12287';
export default HeavyComponent12287;
