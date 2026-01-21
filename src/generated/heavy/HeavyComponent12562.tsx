'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12562<T> = T extends (infer U)[]
  ? DeepReadonlyArray12562<U>
  : T extends object
  ? DeepReadonlyObject12562<T>
  : T;

interface DeepReadonlyArray12562<T> extends ReadonlyArray<DeepReadonly12562<T>> {}

type DeepReadonlyObject12562<T> = {
  readonly [P in keyof T]: DeepReadonly12562<T[P]>;
};

type UnionToIntersection12562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12562<T> = UnionToIntersection12562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12562<T extends unknown[], V> = [...T, V];

type TuplifyUnion12562<T, L = LastOf12562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12562<TuplifyUnion12562<Exclude<T, L>>, L>;

type DeepPartial12562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12562<T[P]> }
  : T;

type Paths12562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12562<K, Paths12562<T[K], Prev12562[D]>> : never }[keyof T]
  : never;

type Prev12562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12562 {
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

type ConfigPaths12562 = Paths12562<NestedConfig12562>;

interface HeavyProps12562 {
  config: DeepPartial12562<NestedConfig12562>;
  path?: ConfigPaths12562;
}

const HeavyComponent12562 = memo(function HeavyComponent12562({ config }: HeavyProps12562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12562.displayName = 'HeavyComponent12562';
export default HeavyComponent12562;
