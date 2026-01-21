'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12076<T> = T extends (infer U)[]
  ? DeepReadonlyArray12076<U>
  : T extends object
  ? DeepReadonlyObject12076<T>
  : T;

interface DeepReadonlyArray12076<T> extends ReadonlyArray<DeepReadonly12076<T>> {}

type DeepReadonlyObject12076<T> = {
  readonly [P in keyof T]: DeepReadonly12076<T[P]>;
};

type UnionToIntersection12076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12076<T> = UnionToIntersection12076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12076<T extends unknown[], V> = [...T, V];

type TuplifyUnion12076<T, L = LastOf12076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12076<TuplifyUnion12076<Exclude<T, L>>, L>;

type DeepPartial12076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12076<T[P]> }
  : T;

type Paths12076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12076<K, Paths12076<T[K], Prev12076[D]>> : never }[keyof T]
  : never;

type Prev12076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12076 {
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

type ConfigPaths12076 = Paths12076<NestedConfig12076>;

interface HeavyProps12076 {
  config: DeepPartial12076<NestedConfig12076>;
  path?: ConfigPaths12076;
}

const HeavyComponent12076 = memo(function HeavyComponent12076({ config }: HeavyProps12076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12076.displayName = 'HeavyComponent12076';
export default HeavyComponent12076;
