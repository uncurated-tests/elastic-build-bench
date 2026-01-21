'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12557<T> = T extends (infer U)[]
  ? DeepReadonlyArray12557<U>
  : T extends object
  ? DeepReadonlyObject12557<T>
  : T;

interface DeepReadonlyArray12557<T> extends ReadonlyArray<DeepReadonly12557<T>> {}

type DeepReadonlyObject12557<T> = {
  readonly [P in keyof T]: DeepReadonly12557<T[P]>;
};

type UnionToIntersection12557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12557<T> = UnionToIntersection12557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12557<T extends unknown[], V> = [...T, V];

type TuplifyUnion12557<T, L = LastOf12557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12557<TuplifyUnion12557<Exclude<T, L>>, L>;

type DeepPartial12557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12557<T[P]> }
  : T;

type Paths12557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12557<K, Paths12557<T[K], Prev12557[D]>> : never }[keyof T]
  : never;

type Prev12557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12557 {
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

type ConfigPaths12557 = Paths12557<NestedConfig12557>;

interface HeavyProps12557 {
  config: DeepPartial12557<NestedConfig12557>;
  path?: ConfigPaths12557;
}

const HeavyComponent12557 = memo(function HeavyComponent12557({ config }: HeavyProps12557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12557.displayName = 'HeavyComponent12557';
export default HeavyComponent12557;
