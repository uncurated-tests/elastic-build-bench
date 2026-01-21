'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12004<T> = T extends (infer U)[]
  ? DeepReadonlyArray12004<U>
  : T extends object
  ? DeepReadonlyObject12004<T>
  : T;

interface DeepReadonlyArray12004<T> extends ReadonlyArray<DeepReadonly12004<T>> {}

type DeepReadonlyObject12004<T> = {
  readonly [P in keyof T]: DeepReadonly12004<T[P]>;
};

type UnionToIntersection12004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12004<T> = UnionToIntersection12004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12004<T extends unknown[], V> = [...T, V];

type TuplifyUnion12004<T, L = LastOf12004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12004<TuplifyUnion12004<Exclude<T, L>>, L>;

type DeepPartial12004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12004<T[P]> }
  : T;

type Paths12004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12004<K, Paths12004<T[K], Prev12004[D]>> : never }[keyof T]
  : never;

type Prev12004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12004 {
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

type ConfigPaths12004 = Paths12004<NestedConfig12004>;

interface HeavyProps12004 {
  config: DeepPartial12004<NestedConfig12004>;
  path?: ConfigPaths12004;
}

const HeavyComponent12004 = memo(function HeavyComponent12004({ config }: HeavyProps12004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12004.displayName = 'HeavyComponent12004';
export default HeavyComponent12004;
