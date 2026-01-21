'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12949<T> = T extends (infer U)[]
  ? DeepReadonlyArray12949<U>
  : T extends object
  ? DeepReadonlyObject12949<T>
  : T;

interface DeepReadonlyArray12949<T> extends ReadonlyArray<DeepReadonly12949<T>> {}

type DeepReadonlyObject12949<T> = {
  readonly [P in keyof T]: DeepReadonly12949<T[P]>;
};

type UnionToIntersection12949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12949<T> = UnionToIntersection12949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12949<T extends unknown[], V> = [...T, V];

type TuplifyUnion12949<T, L = LastOf12949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12949<TuplifyUnion12949<Exclude<T, L>>, L>;

type DeepPartial12949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12949<T[P]> }
  : T;

type Paths12949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12949<K, Paths12949<T[K], Prev12949[D]>> : never }[keyof T]
  : never;

type Prev12949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12949 {
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

type ConfigPaths12949 = Paths12949<NestedConfig12949>;

interface HeavyProps12949 {
  config: DeepPartial12949<NestedConfig12949>;
  path?: ConfigPaths12949;
}

const HeavyComponent12949 = memo(function HeavyComponent12949({ config }: HeavyProps12949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12949.displayName = 'HeavyComponent12949';
export default HeavyComponent12949;
