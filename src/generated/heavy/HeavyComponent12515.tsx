'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12515<T> = T extends (infer U)[]
  ? DeepReadonlyArray12515<U>
  : T extends object
  ? DeepReadonlyObject12515<T>
  : T;

interface DeepReadonlyArray12515<T> extends ReadonlyArray<DeepReadonly12515<T>> {}

type DeepReadonlyObject12515<T> = {
  readonly [P in keyof T]: DeepReadonly12515<T[P]>;
};

type UnionToIntersection12515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12515<T> = UnionToIntersection12515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12515<T extends unknown[], V> = [...T, V];

type TuplifyUnion12515<T, L = LastOf12515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12515<TuplifyUnion12515<Exclude<T, L>>, L>;

type DeepPartial12515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12515<T[P]> }
  : T;

type Paths12515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12515<K, Paths12515<T[K], Prev12515[D]>> : never }[keyof T]
  : never;

type Prev12515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12515 {
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

type ConfigPaths12515 = Paths12515<NestedConfig12515>;

interface HeavyProps12515 {
  config: DeepPartial12515<NestedConfig12515>;
  path?: ConfigPaths12515;
}

const HeavyComponent12515 = memo(function HeavyComponent12515({ config }: HeavyProps12515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12515.displayName = 'HeavyComponent12515';
export default HeavyComponent12515;
