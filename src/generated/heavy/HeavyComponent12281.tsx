'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12281<T> = T extends (infer U)[]
  ? DeepReadonlyArray12281<U>
  : T extends object
  ? DeepReadonlyObject12281<T>
  : T;

interface DeepReadonlyArray12281<T> extends ReadonlyArray<DeepReadonly12281<T>> {}

type DeepReadonlyObject12281<T> = {
  readonly [P in keyof T]: DeepReadonly12281<T[P]>;
};

type UnionToIntersection12281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12281<T> = UnionToIntersection12281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12281<T extends unknown[], V> = [...T, V];

type TuplifyUnion12281<T, L = LastOf12281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12281<TuplifyUnion12281<Exclude<T, L>>, L>;

type DeepPartial12281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12281<T[P]> }
  : T;

type Paths12281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12281<K, Paths12281<T[K], Prev12281[D]>> : never }[keyof T]
  : never;

type Prev12281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12281 {
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

type ConfigPaths12281 = Paths12281<NestedConfig12281>;

interface HeavyProps12281 {
  config: DeepPartial12281<NestedConfig12281>;
  path?: ConfigPaths12281;
}

const HeavyComponent12281 = memo(function HeavyComponent12281({ config }: HeavyProps12281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12281.displayName = 'HeavyComponent12281';
export default HeavyComponent12281;
