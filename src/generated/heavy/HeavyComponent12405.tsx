'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12405<T> = T extends (infer U)[]
  ? DeepReadonlyArray12405<U>
  : T extends object
  ? DeepReadonlyObject12405<T>
  : T;

interface DeepReadonlyArray12405<T> extends ReadonlyArray<DeepReadonly12405<T>> {}

type DeepReadonlyObject12405<T> = {
  readonly [P in keyof T]: DeepReadonly12405<T[P]>;
};

type UnionToIntersection12405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12405<T> = UnionToIntersection12405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12405<T extends unknown[], V> = [...T, V];

type TuplifyUnion12405<T, L = LastOf12405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12405<TuplifyUnion12405<Exclude<T, L>>, L>;

type DeepPartial12405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12405<T[P]> }
  : T;

type Paths12405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12405<K, Paths12405<T[K], Prev12405[D]>> : never }[keyof T]
  : never;

type Prev12405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12405 {
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

type ConfigPaths12405 = Paths12405<NestedConfig12405>;

interface HeavyProps12405 {
  config: DeepPartial12405<NestedConfig12405>;
  path?: ConfigPaths12405;
}

const HeavyComponent12405 = memo(function HeavyComponent12405({ config }: HeavyProps12405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12405.displayName = 'HeavyComponent12405';
export default HeavyComponent12405;
