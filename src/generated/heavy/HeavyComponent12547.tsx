'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12547<T> = T extends (infer U)[]
  ? DeepReadonlyArray12547<U>
  : T extends object
  ? DeepReadonlyObject12547<T>
  : T;

interface DeepReadonlyArray12547<T> extends ReadonlyArray<DeepReadonly12547<T>> {}

type DeepReadonlyObject12547<T> = {
  readonly [P in keyof T]: DeepReadonly12547<T[P]>;
};

type UnionToIntersection12547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12547<T> = UnionToIntersection12547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12547<T extends unknown[], V> = [...T, V];

type TuplifyUnion12547<T, L = LastOf12547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12547<TuplifyUnion12547<Exclude<T, L>>, L>;

type DeepPartial12547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12547<T[P]> }
  : T;

type Paths12547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12547<K, Paths12547<T[K], Prev12547[D]>> : never }[keyof T]
  : never;

type Prev12547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12547 {
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

type ConfigPaths12547 = Paths12547<NestedConfig12547>;

interface HeavyProps12547 {
  config: DeepPartial12547<NestedConfig12547>;
  path?: ConfigPaths12547;
}

const HeavyComponent12547 = memo(function HeavyComponent12547({ config }: HeavyProps12547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12547.displayName = 'HeavyComponent12547';
export default HeavyComponent12547;
