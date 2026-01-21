'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12258<T> = T extends (infer U)[]
  ? DeepReadonlyArray12258<U>
  : T extends object
  ? DeepReadonlyObject12258<T>
  : T;

interface DeepReadonlyArray12258<T> extends ReadonlyArray<DeepReadonly12258<T>> {}

type DeepReadonlyObject12258<T> = {
  readonly [P in keyof T]: DeepReadonly12258<T[P]>;
};

type UnionToIntersection12258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12258<T> = UnionToIntersection12258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12258<T extends unknown[], V> = [...T, V];

type TuplifyUnion12258<T, L = LastOf12258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12258<TuplifyUnion12258<Exclude<T, L>>, L>;

type DeepPartial12258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12258<T[P]> }
  : T;

type Paths12258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12258<K, Paths12258<T[K], Prev12258[D]>> : never }[keyof T]
  : never;

type Prev12258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12258 {
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

type ConfigPaths12258 = Paths12258<NestedConfig12258>;

interface HeavyProps12258 {
  config: DeepPartial12258<NestedConfig12258>;
  path?: ConfigPaths12258;
}

const HeavyComponent12258 = memo(function HeavyComponent12258({ config }: HeavyProps12258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12258.displayName = 'HeavyComponent12258';
export default HeavyComponent12258;
