'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12631<T> = T extends (infer U)[]
  ? DeepReadonlyArray12631<U>
  : T extends object
  ? DeepReadonlyObject12631<T>
  : T;

interface DeepReadonlyArray12631<T> extends ReadonlyArray<DeepReadonly12631<T>> {}

type DeepReadonlyObject12631<T> = {
  readonly [P in keyof T]: DeepReadonly12631<T[P]>;
};

type UnionToIntersection12631<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12631<T> = UnionToIntersection12631<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12631<T extends unknown[], V> = [...T, V];

type TuplifyUnion12631<T, L = LastOf12631<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12631<TuplifyUnion12631<Exclude<T, L>>, L>;

type DeepPartial12631<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12631<T[P]> }
  : T;

type Paths12631<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12631<K, Paths12631<T[K], Prev12631[D]>> : never }[keyof T]
  : never;

type Prev12631 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12631<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12631 {
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

type ConfigPaths12631 = Paths12631<NestedConfig12631>;

interface HeavyProps12631 {
  config: DeepPartial12631<NestedConfig12631>;
  path?: ConfigPaths12631;
}

const HeavyComponent12631 = memo(function HeavyComponent12631({ config }: HeavyProps12631) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12631) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12631 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12631: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12631.displayName = 'HeavyComponent12631';
export default HeavyComponent12631;
