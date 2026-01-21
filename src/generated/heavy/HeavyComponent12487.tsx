'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12487<T> = T extends (infer U)[]
  ? DeepReadonlyArray12487<U>
  : T extends object
  ? DeepReadonlyObject12487<T>
  : T;

interface DeepReadonlyArray12487<T> extends ReadonlyArray<DeepReadonly12487<T>> {}

type DeepReadonlyObject12487<T> = {
  readonly [P in keyof T]: DeepReadonly12487<T[P]>;
};

type UnionToIntersection12487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12487<T> = UnionToIntersection12487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12487<T extends unknown[], V> = [...T, V];

type TuplifyUnion12487<T, L = LastOf12487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12487<TuplifyUnion12487<Exclude<T, L>>, L>;

type DeepPartial12487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12487<T[P]> }
  : T;

type Paths12487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12487<K, Paths12487<T[K], Prev12487[D]>> : never }[keyof T]
  : never;

type Prev12487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12487 {
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

type ConfigPaths12487 = Paths12487<NestedConfig12487>;

interface HeavyProps12487 {
  config: DeepPartial12487<NestedConfig12487>;
  path?: ConfigPaths12487;
}

const HeavyComponent12487 = memo(function HeavyComponent12487({ config }: HeavyProps12487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12487.displayName = 'HeavyComponent12487';
export default HeavyComponent12487;
