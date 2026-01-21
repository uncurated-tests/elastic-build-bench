'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12801<T> = T extends (infer U)[]
  ? DeepReadonlyArray12801<U>
  : T extends object
  ? DeepReadonlyObject12801<T>
  : T;

interface DeepReadonlyArray12801<T> extends ReadonlyArray<DeepReadonly12801<T>> {}

type DeepReadonlyObject12801<T> = {
  readonly [P in keyof T]: DeepReadonly12801<T[P]>;
};

type UnionToIntersection12801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12801<T> = UnionToIntersection12801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12801<T extends unknown[], V> = [...T, V];

type TuplifyUnion12801<T, L = LastOf12801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12801<TuplifyUnion12801<Exclude<T, L>>, L>;

type DeepPartial12801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12801<T[P]> }
  : T;

type Paths12801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12801<K, Paths12801<T[K], Prev12801[D]>> : never }[keyof T]
  : never;

type Prev12801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12801 {
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

type ConfigPaths12801 = Paths12801<NestedConfig12801>;

interface HeavyProps12801 {
  config: DeepPartial12801<NestedConfig12801>;
  path?: ConfigPaths12801;
}

const HeavyComponent12801 = memo(function HeavyComponent12801({ config }: HeavyProps12801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12801.displayName = 'HeavyComponent12801';
export default HeavyComponent12801;
