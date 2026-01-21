'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12603<T> = T extends (infer U)[]
  ? DeepReadonlyArray12603<U>
  : T extends object
  ? DeepReadonlyObject12603<T>
  : T;

interface DeepReadonlyArray12603<T> extends ReadonlyArray<DeepReadonly12603<T>> {}

type DeepReadonlyObject12603<T> = {
  readonly [P in keyof T]: DeepReadonly12603<T[P]>;
};

type UnionToIntersection12603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12603<T> = UnionToIntersection12603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12603<T extends unknown[], V> = [...T, V];

type TuplifyUnion12603<T, L = LastOf12603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12603<TuplifyUnion12603<Exclude<T, L>>, L>;

type DeepPartial12603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12603<T[P]> }
  : T;

type Paths12603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12603<K, Paths12603<T[K], Prev12603[D]>> : never }[keyof T]
  : never;

type Prev12603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12603 {
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

type ConfigPaths12603 = Paths12603<NestedConfig12603>;

interface HeavyProps12603 {
  config: DeepPartial12603<NestedConfig12603>;
  path?: ConfigPaths12603;
}

const HeavyComponent12603 = memo(function HeavyComponent12603({ config }: HeavyProps12603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12603.displayName = 'HeavyComponent12603';
export default HeavyComponent12603;
