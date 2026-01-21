'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12466<T> = T extends (infer U)[]
  ? DeepReadonlyArray12466<U>
  : T extends object
  ? DeepReadonlyObject12466<T>
  : T;

interface DeepReadonlyArray12466<T> extends ReadonlyArray<DeepReadonly12466<T>> {}

type DeepReadonlyObject12466<T> = {
  readonly [P in keyof T]: DeepReadonly12466<T[P]>;
};

type UnionToIntersection12466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12466<T> = UnionToIntersection12466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12466<T extends unknown[], V> = [...T, V];

type TuplifyUnion12466<T, L = LastOf12466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12466<TuplifyUnion12466<Exclude<T, L>>, L>;

type DeepPartial12466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12466<T[P]> }
  : T;

type Paths12466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12466<K, Paths12466<T[K], Prev12466[D]>> : never }[keyof T]
  : never;

type Prev12466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12466 {
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

type ConfigPaths12466 = Paths12466<NestedConfig12466>;

interface HeavyProps12466 {
  config: DeepPartial12466<NestedConfig12466>;
  path?: ConfigPaths12466;
}

const HeavyComponent12466 = memo(function HeavyComponent12466({ config }: HeavyProps12466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12466.displayName = 'HeavyComponent12466';
export default HeavyComponent12466;
