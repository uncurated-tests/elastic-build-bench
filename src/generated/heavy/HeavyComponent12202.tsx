'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12202<T> = T extends (infer U)[]
  ? DeepReadonlyArray12202<U>
  : T extends object
  ? DeepReadonlyObject12202<T>
  : T;

interface DeepReadonlyArray12202<T> extends ReadonlyArray<DeepReadonly12202<T>> {}

type DeepReadonlyObject12202<T> = {
  readonly [P in keyof T]: DeepReadonly12202<T[P]>;
};

type UnionToIntersection12202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12202<T> = UnionToIntersection12202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12202<T extends unknown[], V> = [...T, V];

type TuplifyUnion12202<T, L = LastOf12202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12202<TuplifyUnion12202<Exclude<T, L>>, L>;

type DeepPartial12202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12202<T[P]> }
  : T;

type Paths12202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12202<K, Paths12202<T[K], Prev12202[D]>> : never }[keyof T]
  : never;

type Prev12202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12202 {
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

type ConfigPaths12202 = Paths12202<NestedConfig12202>;

interface HeavyProps12202 {
  config: DeepPartial12202<NestedConfig12202>;
  path?: ConfigPaths12202;
}

const HeavyComponent12202 = memo(function HeavyComponent12202({ config }: HeavyProps12202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12202.displayName = 'HeavyComponent12202';
export default HeavyComponent12202;
