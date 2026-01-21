'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12453<T> = T extends (infer U)[]
  ? DeepReadonlyArray12453<U>
  : T extends object
  ? DeepReadonlyObject12453<T>
  : T;

interface DeepReadonlyArray12453<T> extends ReadonlyArray<DeepReadonly12453<T>> {}

type DeepReadonlyObject12453<T> = {
  readonly [P in keyof T]: DeepReadonly12453<T[P]>;
};

type UnionToIntersection12453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12453<T> = UnionToIntersection12453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12453<T extends unknown[], V> = [...T, V];

type TuplifyUnion12453<T, L = LastOf12453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12453<TuplifyUnion12453<Exclude<T, L>>, L>;

type DeepPartial12453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12453<T[P]> }
  : T;

type Paths12453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12453<K, Paths12453<T[K], Prev12453[D]>> : never }[keyof T]
  : never;

type Prev12453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12453 {
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

type ConfigPaths12453 = Paths12453<NestedConfig12453>;

interface HeavyProps12453 {
  config: DeepPartial12453<NestedConfig12453>;
  path?: ConfigPaths12453;
}

const HeavyComponent12453 = memo(function HeavyComponent12453({ config }: HeavyProps12453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12453.displayName = 'HeavyComponent12453';
export default HeavyComponent12453;
