'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12061<T> = T extends (infer U)[]
  ? DeepReadonlyArray12061<U>
  : T extends object
  ? DeepReadonlyObject12061<T>
  : T;

interface DeepReadonlyArray12061<T> extends ReadonlyArray<DeepReadonly12061<T>> {}

type DeepReadonlyObject12061<T> = {
  readonly [P in keyof T]: DeepReadonly12061<T[P]>;
};

type UnionToIntersection12061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12061<T> = UnionToIntersection12061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12061<T extends unknown[], V> = [...T, V];

type TuplifyUnion12061<T, L = LastOf12061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12061<TuplifyUnion12061<Exclude<T, L>>, L>;

type DeepPartial12061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12061<T[P]> }
  : T;

type Paths12061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12061<K, Paths12061<T[K], Prev12061[D]>> : never }[keyof T]
  : never;

type Prev12061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12061 {
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

type ConfigPaths12061 = Paths12061<NestedConfig12061>;

interface HeavyProps12061 {
  config: DeepPartial12061<NestedConfig12061>;
  path?: ConfigPaths12061;
}

const HeavyComponent12061 = memo(function HeavyComponent12061({ config }: HeavyProps12061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12061.displayName = 'HeavyComponent12061';
export default HeavyComponent12061;
