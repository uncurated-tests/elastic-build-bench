'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12822<T> = T extends (infer U)[]
  ? DeepReadonlyArray12822<U>
  : T extends object
  ? DeepReadonlyObject12822<T>
  : T;

interface DeepReadonlyArray12822<T> extends ReadonlyArray<DeepReadonly12822<T>> {}

type DeepReadonlyObject12822<T> = {
  readonly [P in keyof T]: DeepReadonly12822<T[P]>;
};

type UnionToIntersection12822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12822<T> = UnionToIntersection12822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12822<T extends unknown[], V> = [...T, V];

type TuplifyUnion12822<T, L = LastOf12822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12822<TuplifyUnion12822<Exclude<T, L>>, L>;

type DeepPartial12822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12822<T[P]> }
  : T;

type Paths12822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12822<K, Paths12822<T[K], Prev12822[D]>> : never }[keyof T]
  : never;

type Prev12822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12822 {
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

type ConfigPaths12822 = Paths12822<NestedConfig12822>;

interface HeavyProps12822 {
  config: DeepPartial12822<NestedConfig12822>;
  path?: ConfigPaths12822;
}

const HeavyComponent12822 = memo(function HeavyComponent12822({ config }: HeavyProps12822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12822.displayName = 'HeavyComponent12822';
export default HeavyComponent12822;
