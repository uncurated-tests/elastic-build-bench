'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12825<T> = T extends (infer U)[]
  ? DeepReadonlyArray12825<U>
  : T extends object
  ? DeepReadonlyObject12825<T>
  : T;

interface DeepReadonlyArray12825<T> extends ReadonlyArray<DeepReadonly12825<T>> {}

type DeepReadonlyObject12825<T> = {
  readonly [P in keyof T]: DeepReadonly12825<T[P]>;
};

type UnionToIntersection12825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12825<T> = UnionToIntersection12825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12825<T extends unknown[], V> = [...T, V];

type TuplifyUnion12825<T, L = LastOf12825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12825<TuplifyUnion12825<Exclude<T, L>>, L>;

type DeepPartial12825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12825<T[P]> }
  : T;

type Paths12825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12825<K, Paths12825<T[K], Prev12825[D]>> : never }[keyof T]
  : never;

type Prev12825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12825 {
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

type ConfigPaths12825 = Paths12825<NestedConfig12825>;

interface HeavyProps12825 {
  config: DeepPartial12825<NestedConfig12825>;
  path?: ConfigPaths12825;
}

const HeavyComponent12825 = memo(function HeavyComponent12825({ config }: HeavyProps12825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12825.displayName = 'HeavyComponent12825';
export default HeavyComponent12825;
