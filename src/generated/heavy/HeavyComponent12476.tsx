'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12476<T> = T extends (infer U)[]
  ? DeepReadonlyArray12476<U>
  : T extends object
  ? DeepReadonlyObject12476<T>
  : T;

interface DeepReadonlyArray12476<T> extends ReadonlyArray<DeepReadonly12476<T>> {}

type DeepReadonlyObject12476<T> = {
  readonly [P in keyof T]: DeepReadonly12476<T[P]>;
};

type UnionToIntersection12476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12476<T> = UnionToIntersection12476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12476<T extends unknown[], V> = [...T, V];

type TuplifyUnion12476<T, L = LastOf12476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12476<TuplifyUnion12476<Exclude<T, L>>, L>;

type DeepPartial12476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12476<T[P]> }
  : T;

type Paths12476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12476<K, Paths12476<T[K], Prev12476[D]>> : never }[keyof T]
  : never;

type Prev12476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12476 {
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

type ConfigPaths12476 = Paths12476<NestedConfig12476>;

interface HeavyProps12476 {
  config: DeepPartial12476<NestedConfig12476>;
  path?: ConfigPaths12476;
}

const HeavyComponent12476 = memo(function HeavyComponent12476({ config }: HeavyProps12476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12476.displayName = 'HeavyComponent12476';
export default HeavyComponent12476;
