'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12285<T> = T extends (infer U)[]
  ? DeepReadonlyArray12285<U>
  : T extends object
  ? DeepReadonlyObject12285<T>
  : T;

interface DeepReadonlyArray12285<T> extends ReadonlyArray<DeepReadonly12285<T>> {}

type DeepReadonlyObject12285<T> = {
  readonly [P in keyof T]: DeepReadonly12285<T[P]>;
};

type UnionToIntersection12285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12285<T> = UnionToIntersection12285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12285<T extends unknown[], V> = [...T, V];

type TuplifyUnion12285<T, L = LastOf12285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12285<TuplifyUnion12285<Exclude<T, L>>, L>;

type DeepPartial12285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12285<T[P]> }
  : T;

type Paths12285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12285<K, Paths12285<T[K], Prev12285[D]>> : never }[keyof T]
  : never;

type Prev12285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12285 {
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

type ConfigPaths12285 = Paths12285<NestedConfig12285>;

interface HeavyProps12285 {
  config: DeepPartial12285<NestedConfig12285>;
  path?: ConfigPaths12285;
}

const HeavyComponent12285 = memo(function HeavyComponent12285({ config }: HeavyProps12285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12285.displayName = 'HeavyComponent12285';
export default HeavyComponent12285;
