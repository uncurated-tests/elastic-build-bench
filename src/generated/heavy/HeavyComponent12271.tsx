'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12271<T> = T extends (infer U)[]
  ? DeepReadonlyArray12271<U>
  : T extends object
  ? DeepReadonlyObject12271<T>
  : T;

interface DeepReadonlyArray12271<T> extends ReadonlyArray<DeepReadonly12271<T>> {}

type DeepReadonlyObject12271<T> = {
  readonly [P in keyof T]: DeepReadonly12271<T[P]>;
};

type UnionToIntersection12271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12271<T> = UnionToIntersection12271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12271<T extends unknown[], V> = [...T, V];

type TuplifyUnion12271<T, L = LastOf12271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12271<TuplifyUnion12271<Exclude<T, L>>, L>;

type DeepPartial12271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12271<T[P]> }
  : T;

type Paths12271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12271<K, Paths12271<T[K], Prev12271[D]>> : never }[keyof T]
  : never;

type Prev12271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12271 {
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

type ConfigPaths12271 = Paths12271<NestedConfig12271>;

interface HeavyProps12271 {
  config: DeepPartial12271<NestedConfig12271>;
  path?: ConfigPaths12271;
}

const HeavyComponent12271 = memo(function HeavyComponent12271({ config }: HeavyProps12271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12271.displayName = 'HeavyComponent12271';
export default HeavyComponent12271;
