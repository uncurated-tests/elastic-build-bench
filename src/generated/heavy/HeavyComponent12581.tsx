'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12581<T> = T extends (infer U)[]
  ? DeepReadonlyArray12581<U>
  : T extends object
  ? DeepReadonlyObject12581<T>
  : T;

interface DeepReadonlyArray12581<T> extends ReadonlyArray<DeepReadonly12581<T>> {}

type DeepReadonlyObject12581<T> = {
  readonly [P in keyof T]: DeepReadonly12581<T[P]>;
};

type UnionToIntersection12581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12581<T> = UnionToIntersection12581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12581<T extends unknown[], V> = [...T, V];

type TuplifyUnion12581<T, L = LastOf12581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12581<TuplifyUnion12581<Exclude<T, L>>, L>;

type DeepPartial12581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12581<T[P]> }
  : T;

type Paths12581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12581<K, Paths12581<T[K], Prev12581[D]>> : never }[keyof T]
  : never;

type Prev12581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12581 {
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

type ConfigPaths12581 = Paths12581<NestedConfig12581>;

interface HeavyProps12581 {
  config: DeepPartial12581<NestedConfig12581>;
  path?: ConfigPaths12581;
}

const HeavyComponent12581 = memo(function HeavyComponent12581({ config }: HeavyProps12581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12581.displayName = 'HeavyComponent12581';
export default HeavyComponent12581;
