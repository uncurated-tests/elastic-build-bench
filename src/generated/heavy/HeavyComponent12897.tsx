'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12897<T> = T extends (infer U)[]
  ? DeepReadonlyArray12897<U>
  : T extends object
  ? DeepReadonlyObject12897<T>
  : T;

interface DeepReadonlyArray12897<T> extends ReadonlyArray<DeepReadonly12897<T>> {}

type DeepReadonlyObject12897<T> = {
  readonly [P in keyof T]: DeepReadonly12897<T[P]>;
};

type UnionToIntersection12897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12897<T> = UnionToIntersection12897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12897<T extends unknown[], V> = [...T, V];

type TuplifyUnion12897<T, L = LastOf12897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12897<TuplifyUnion12897<Exclude<T, L>>, L>;

type DeepPartial12897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12897<T[P]> }
  : T;

type Paths12897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12897<K, Paths12897<T[K], Prev12897[D]>> : never }[keyof T]
  : never;

type Prev12897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12897 {
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

type ConfigPaths12897 = Paths12897<NestedConfig12897>;

interface HeavyProps12897 {
  config: DeepPartial12897<NestedConfig12897>;
  path?: ConfigPaths12897;
}

const HeavyComponent12897 = memo(function HeavyComponent12897({ config }: HeavyProps12897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12897.displayName = 'HeavyComponent12897';
export default HeavyComponent12897;
