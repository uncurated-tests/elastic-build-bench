'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12480<T> = T extends (infer U)[]
  ? DeepReadonlyArray12480<U>
  : T extends object
  ? DeepReadonlyObject12480<T>
  : T;

interface DeepReadonlyArray12480<T> extends ReadonlyArray<DeepReadonly12480<T>> {}

type DeepReadonlyObject12480<T> = {
  readonly [P in keyof T]: DeepReadonly12480<T[P]>;
};

type UnionToIntersection12480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12480<T> = UnionToIntersection12480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12480<T extends unknown[], V> = [...T, V];

type TuplifyUnion12480<T, L = LastOf12480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12480<TuplifyUnion12480<Exclude<T, L>>, L>;

type DeepPartial12480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12480<T[P]> }
  : T;

type Paths12480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12480<K, Paths12480<T[K], Prev12480[D]>> : never }[keyof T]
  : never;

type Prev12480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12480 {
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

type ConfigPaths12480 = Paths12480<NestedConfig12480>;

interface HeavyProps12480 {
  config: DeepPartial12480<NestedConfig12480>;
  path?: ConfigPaths12480;
}

const HeavyComponent12480 = memo(function HeavyComponent12480({ config }: HeavyProps12480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12480.displayName = 'HeavyComponent12480';
export default HeavyComponent12480;
