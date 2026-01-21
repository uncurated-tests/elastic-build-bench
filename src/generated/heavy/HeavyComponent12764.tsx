'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12764<T> = T extends (infer U)[]
  ? DeepReadonlyArray12764<U>
  : T extends object
  ? DeepReadonlyObject12764<T>
  : T;

interface DeepReadonlyArray12764<T> extends ReadonlyArray<DeepReadonly12764<T>> {}

type DeepReadonlyObject12764<T> = {
  readonly [P in keyof T]: DeepReadonly12764<T[P]>;
};

type UnionToIntersection12764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12764<T> = UnionToIntersection12764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12764<T extends unknown[], V> = [...T, V];

type TuplifyUnion12764<T, L = LastOf12764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12764<TuplifyUnion12764<Exclude<T, L>>, L>;

type DeepPartial12764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12764<T[P]> }
  : T;

type Paths12764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12764<K, Paths12764<T[K], Prev12764[D]>> : never }[keyof T]
  : never;

type Prev12764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12764 {
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

type ConfigPaths12764 = Paths12764<NestedConfig12764>;

interface HeavyProps12764 {
  config: DeepPartial12764<NestedConfig12764>;
  path?: ConfigPaths12764;
}

const HeavyComponent12764 = memo(function HeavyComponent12764({ config }: HeavyProps12764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12764.displayName = 'HeavyComponent12764';
export default HeavyComponent12764;
