'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12913<T> = T extends (infer U)[]
  ? DeepReadonlyArray12913<U>
  : T extends object
  ? DeepReadonlyObject12913<T>
  : T;

interface DeepReadonlyArray12913<T> extends ReadonlyArray<DeepReadonly12913<T>> {}

type DeepReadonlyObject12913<T> = {
  readonly [P in keyof T]: DeepReadonly12913<T[P]>;
};

type UnionToIntersection12913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12913<T> = UnionToIntersection12913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12913<T extends unknown[], V> = [...T, V];

type TuplifyUnion12913<T, L = LastOf12913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12913<TuplifyUnion12913<Exclude<T, L>>, L>;

type DeepPartial12913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12913<T[P]> }
  : T;

type Paths12913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12913<K, Paths12913<T[K], Prev12913[D]>> : never }[keyof T]
  : never;

type Prev12913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12913 {
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

type ConfigPaths12913 = Paths12913<NestedConfig12913>;

interface HeavyProps12913 {
  config: DeepPartial12913<NestedConfig12913>;
  path?: ConfigPaths12913;
}

const HeavyComponent12913 = memo(function HeavyComponent12913({ config }: HeavyProps12913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12913.displayName = 'HeavyComponent12913';
export default HeavyComponent12913;
