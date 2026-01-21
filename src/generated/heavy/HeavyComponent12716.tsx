'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12716<T> = T extends (infer U)[]
  ? DeepReadonlyArray12716<U>
  : T extends object
  ? DeepReadonlyObject12716<T>
  : T;

interface DeepReadonlyArray12716<T> extends ReadonlyArray<DeepReadonly12716<T>> {}

type DeepReadonlyObject12716<T> = {
  readonly [P in keyof T]: DeepReadonly12716<T[P]>;
};

type UnionToIntersection12716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12716<T> = UnionToIntersection12716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12716<T extends unknown[], V> = [...T, V];

type TuplifyUnion12716<T, L = LastOf12716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12716<TuplifyUnion12716<Exclude<T, L>>, L>;

type DeepPartial12716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12716<T[P]> }
  : T;

type Paths12716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12716<K, Paths12716<T[K], Prev12716[D]>> : never }[keyof T]
  : never;

type Prev12716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12716 {
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

type ConfigPaths12716 = Paths12716<NestedConfig12716>;

interface HeavyProps12716 {
  config: DeepPartial12716<NestedConfig12716>;
  path?: ConfigPaths12716;
}

const HeavyComponent12716 = memo(function HeavyComponent12716({ config }: HeavyProps12716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12716.displayName = 'HeavyComponent12716';
export default HeavyComponent12716;
