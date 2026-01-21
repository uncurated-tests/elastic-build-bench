'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12120<T> = T extends (infer U)[]
  ? DeepReadonlyArray12120<U>
  : T extends object
  ? DeepReadonlyObject12120<T>
  : T;

interface DeepReadonlyArray12120<T> extends ReadonlyArray<DeepReadonly12120<T>> {}

type DeepReadonlyObject12120<T> = {
  readonly [P in keyof T]: DeepReadonly12120<T[P]>;
};

type UnionToIntersection12120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12120<T> = UnionToIntersection12120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12120<T extends unknown[], V> = [...T, V];

type TuplifyUnion12120<T, L = LastOf12120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12120<TuplifyUnion12120<Exclude<T, L>>, L>;

type DeepPartial12120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12120<T[P]> }
  : T;

type Paths12120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12120<K, Paths12120<T[K], Prev12120[D]>> : never }[keyof T]
  : never;

type Prev12120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12120 {
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

type ConfigPaths12120 = Paths12120<NestedConfig12120>;

interface HeavyProps12120 {
  config: DeepPartial12120<NestedConfig12120>;
  path?: ConfigPaths12120;
}

const HeavyComponent12120 = memo(function HeavyComponent12120({ config }: HeavyProps12120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12120.displayName = 'HeavyComponent12120';
export default HeavyComponent12120;
