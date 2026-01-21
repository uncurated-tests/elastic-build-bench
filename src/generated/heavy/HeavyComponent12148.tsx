'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12148<T> = T extends (infer U)[]
  ? DeepReadonlyArray12148<U>
  : T extends object
  ? DeepReadonlyObject12148<T>
  : T;

interface DeepReadonlyArray12148<T> extends ReadonlyArray<DeepReadonly12148<T>> {}

type DeepReadonlyObject12148<T> = {
  readonly [P in keyof T]: DeepReadonly12148<T[P]>;
};

type UnionToIntersection12148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12148<T> = UnionToIntersection12148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12148<T extends unknown[], V> = [...T, V];

type TuplifyUnion12148<T, L = LastOf12148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12148<TuplifyUnion12148<Exclude<T, L>>, L>;

type DeepPartial12148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12148<T[P]> }
  : T;

type Paths12148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12148<K, Paths12148<T[K], Prev12148[D]>> : never }[keyof T]
  : never;

type Prev12148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12148 {
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

type ConfigPaths12148 = Paths12148<NestedConfig12148>;

interface HeavyProps12148 {
  config: DeepPartial12148<NestedConfig12148>;
  path?: ConfigPaths12148;
}

const HeavyComponent12148 = memo(function HeavyComponent12148({ config }: HeavyProps12148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12148.displayName = 'HeavyComponent12148';
export default HeavyComponent12148;
