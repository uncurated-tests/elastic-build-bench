'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12926<T> = T extends (infer U)[]
  ? DeepReadonlyArray12926<U>
  : T extends object
  ? DeepReadonlyObject12926<T>
  : T;

interface DeepReadonlyArray12926<T> extends ReadonlyArray<DeepReadonly12926<T>> {}

type DeepReadonlyObject12926<T> = {
  readonly [P in keyof T]: DeepReadonly12926<T[P]>;
};

type UnionToIntersection12926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12926<T> = UnionToIntersection12926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12926<T extends unknown[], V> = [...T, V];

type TuplifyUnion12926<T, L = LastOf12926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12926<TuplifyUnion12926<Exclude<T, L>>, L>;

type DeepPartial12926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12926<T[P]> }
  : T;

type Paths12926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12926<K, Paths12926<T[K], Prev12926[D]>> : never }[keyof T]
  : never;

type Prev12926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12926 {
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

type ConfigPaths12926 = Paths12926<NestedConfig12926>;

interface HeavyProps12926 {
  config: DeepPartial12926<NestedConfig12926>;
  path?: ConfigPaths12926;
}

const HeavyComponent12926 = memo(function HeavyComponent12926({ config }: HeavyProps12926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12926.displayName = 'HeavyComponent12926';
export default HeavyComponent12926;
