'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12151<T> = T extends (infer U)[]
  ? DeepReadonlyArray12151<U>
  : T extends object
  ? DeepReadonlyObject12151<T>
  : T;

interface DeepReadonlyArray12151<T> extends ReadonlyArray<DeepReadonly12151<T>> {}

type DeepReadonlyObject12151<T> = {
  readonly [P in keyof T]: DeepReadonly12151<T[P]>;
};

type UnionToIntersection12151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12151<T> = UnionToIntersection12151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12151<T extends unknown[], V> = [...T, V];

type TuplifyUnion12151<T, L = LastOf12151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12151<TuplifyUnion12151<Exclude<T, L>>, L>;

type DeepPartial12151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12151<T[P]> }
  : T;

type Paths12151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12151<K, Paths12151<T[K], Prev12151[D]>> : never }[keyof T]
  : never;

type Prev12151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12151 {
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

type ConfigPaths12151 = Paths12151<NestedConfig12151>;

interface HeavyProps12151 {
  config: DeepPartial12151<NestedConfig12151>;
  path?: ConfigPaths12151;
}

const HeavyComponent12151 = memo(function HeavyComponent12151({ config }: HeavyProps12151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12151.displayName = 'HeavyComponent12151';
export default HeavyComponent12151;
