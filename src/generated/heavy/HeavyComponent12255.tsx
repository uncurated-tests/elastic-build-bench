'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12255<T> = T extends (infer U)[]
  ? DeepReadonlyArray12255<U>
  : T extends object
  ? DeepReadonlyObject12255<T>
  : T;

interface DeepReadonlyArray12255<T> extends ReadonlyArray<DeepReadonly12255<T>> {}

type DeepReadonlyObject12255<T> = {
  readonly [P in keyof T]: DeepReadonly12255<T[P]>;
};

type UnionToIntersection12255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12255<T> = UnionToIntersection12255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12255<T extends unknown[], V> = [...T, V];

type TuplifyUnion12255<T, L = LastOf12255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12255<TuplifyUnion12255<Exclude<T, L>>, L>;

type DeepPartial12255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12255<T[P]> }
  : T;

type Paths12255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12255<K, Paths12255<T[K], Prev12255[D]>> : never }[keyof T]
  : never;

type Prev12255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12255 {
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

type ConfigPaths12255 = Paths12255<NestedConfig12255>;

interface HeavyProps12255 {
  config: DeepPartial12255<NestedConfig12255>;
  path?: ConfigPaths12255;
}

const HeavyComponent12255 = memo(function HeavyComponent12255({ config }: HeavyProps12255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12255.displayName = 'HeavyComponent12255';
export default HeavyComponent12255;
