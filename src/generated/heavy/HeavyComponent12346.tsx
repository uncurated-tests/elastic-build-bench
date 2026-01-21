'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12346<T> = T extends (infer U)[]
  ? DeepReadonlyArray12346<U>
  : T extends object
  ? DeepReadonlyObject12346<T>
  : T;

interface DeepReadonlyArray12346<T> extends ReadonlyArray<DeepReadonly12346<T>> {}

type DeepReadonlyObject12346<T> = {
  readonly [P in keyof T]: DeepReadonly12346<T[P]>;
};

type UnionToIntersection12346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12346<T> = UnionToIntersection12346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12346<T extends unknown[], V> = [...T, V];

type TuplifyUnion12346<T, L = LastOf12346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12346<TuplifyUnion12346<Exclude<T, L>>, L>;

type DeepPartial12346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12346<T[P]> }
  : T;

type Paths12346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12346<K, Paths12346<T[K], Prev12346[D]>> : never }[keyof T]
  : never;

type Prev12346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12346 {
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

type ConfigPaths12346 = Paths12346<NestedConfig12346>;

interface HeavyProps12346 {
  config: DeepPartial12346<NestedConfig12346>;
  path?: ConfigPaths12346;
}

const HeavyComponent12346 = memo(function HeavyComponent12346({ config }: HeavyProps12346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12346.displayName = 'HeavyComponent12346';
export default HeavyComponent12346;
