'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12596<T> = T extends (infer U)[]
  ? DeepReadonlyArray12596<U>
  : T extends object
  ? DeepReadonlyObject12596<T>
  : T;

interface DeepReadonlyArray12596<T> extends ReadonlyArray<DeepReadonly12596<T>> {}

type DeepReadonlyObject12596<T> = {
  readonly [P in keyof T]: DeepReadonly12596<T[P]>;
};

type UnionToIntersection12596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12596<T> = UnionToIntersection12596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12596<T extends unknown[], V> = [...T, V];

type TuplifyUnion12596<T, L = LastOf12596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12596<TuplifyUnion12596<Exclude<T, L>>, L>;

type DeepPartial12596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12596<T[P]> }
  : T;

type Paths12596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12596<K, Paths12596<T[K], Prev12596[D]>> : never }[keyof T]
  : never;

type Prev12596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12596 {
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

type ConfigPaths12596 = Paths12596<NestedConfig12596>;

interface HeavyProps12596 {
  config: DeepPartial12596<NestedConfig12596>;
  path?: ConfigPaths12596;
}

const HeavyComponent12596 = memo(function HeavyComponent12596({ config }: HeavyProps12596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12596.displayName = 'HeavyComponent12596';
export default HeavyComponent12596;
