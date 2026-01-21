'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12245<T> = T extends (infer U)[]
  ? DeepReadonlyArray12245<U>
  : T extends object
  ? DeepReadonlyObject12245<T>
  : T;

interface DeepReadonlyArray12245<T> extends ReadonlyArray<DeepReadonly12245<T>> {}

type DeepReadonlyObject12245<T> = {
  readonly [P in keyof T]: DeepReadonly12245<T[P]>;
};

type UnionToIntersection12245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12245<T> = UnionToIntersection12245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12245<T extends unknown[], V> = [...T, V];

type TuplifyUnion12245<T, L = LastOf12245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12245<TuplifyUnion12245<Exclude<T, L>>, L>;

type DeepPartial12245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12245<T[P]> }
  : T;

type Paths12245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12245<K, Paths12245<T[K], Prev12245[D]>> : never }[keyof T]
  : never;

type Prev12245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12245 {
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

type ConfigPaths12245 = Paths12245<NestedConfig12245>;

interface HeavyProps12245 {
  config: DeepPartial12245<NestedConfig12245>;
  path?: ConfigPaths12245;
}

const HeavyComponent12245 = memo(function HeavyComponent12245({ config }: HeavyProps12245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12245.displayName = 'HeavyComponent12245';
export default HeavyComponent12245;
