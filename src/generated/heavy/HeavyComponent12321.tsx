'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12321<T> = T extends (infer U)[]
  ? DeepReadonlyArray12321<U>
  : T extends object
  ? DeepReadonlyObject12321<T>
  : T;

interface DeepReadonlyArray12321<T> extends ReadonlyArray<DeepReadonly12321<T>> {}

type DeepReadonlyObject12321<T> = {
  readonly [P in keyof T]: DeepReadonly12321<T[P]>;
};

type UnionToIntersection12321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12321<T> = UnionToIntersection12321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12321<T extends unknown[], V> = [...T, V];

type TuplifyUnion12321<T, L = LastOf12321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12321<TuplifyUnion12321<Exclude<T, L>>, L>;

type DeepPartial12321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12321<T[P]> }
  : T;

type Paths12321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12321<K, Paths12321<T[K], Prev12321[D]>> : never }[keyof T]
  : never;

type Prev12321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12321 {
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

type ConfigPaths12321 = Paths12321<NestedConfig12321>;

interface HeavyProps12321 {
  config: DeepPartial12321<NestedConfig12321>;
  path?: ConfigPaths12321;
}

const HeavyComponent12321 = memo(function HeavyComponent12321({ config }: HeavyProps12321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12321.displayName = 'HeavyComponent12321';
export default HeavyComponent12321;
