'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12421<T> = T extends (infer U)[]
  ? DeepReadonlyArray12421<U>
  : T extends object
  ? DeepReadonlyObject12421<T>
  : T;

interface DeepReadonlyArray12421<T> extends ReadonlyArray<DeepReadonly12421<T>> {}

type DeepReadonlyObject12421<T> = {
  readonly [P in keyof T]: DeepReadonly12421<T[P]>;
};

type UnionToIntersection12421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12421<T> = UnionToIntersection12421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12421<T extends unknown[], V> = [...T, V];

type TuplifyUnion12421<T, L = LastOf12421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12421<TuplifyUnion12421<Exclude<T, L>>, L>;

type DeepPartial12421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12421<T[P]> }
  : T;

type Paths12421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12421<K, Paths12421<T[K], Prev12421[D]>> : never }[keyof T]
  : never;

type Prev12421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12421 {
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

type ConfigPaths12421 = Paths12421<NestedConfig12421>;

interface HeavyProps12421 {
  config: DeepPartial12421<NestedConfig12421>;
  path?: ConfigPaths12421;
}

const HeavyComponent12421 = memo(function HeavyComponent12421({ config }: HeavyProps12421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12421.displayName = 'HeavyComponent12421';
export default HeavyComponent12421;
