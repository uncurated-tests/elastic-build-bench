'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12952<T> = T extends (infer U)[]
  ? DeepReadonlyArray12952<U>
  : T extends object
  ? DeepReadonlyObject12952<T>
  : T;

interface DeepReadonlyArray12952<T> extends ReadonlyArray<DeepReadonly12952<T>> {}

type DeepReadonlyObject12952<T> = {
  readonly [P in keyof T]: DeepReadonly12952<T[P]>;
};

type UnionToIntersection12952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12952<T> = UnionToIntersection12952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12952<T extends unknown[], V> = [...T, V];

type TuplifyUnion12952<T, L = LastOf12952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12952<TuplifyUnion12952<Exclude<T, L>>, L>;

type DeepPartial12952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12952<T[P]> }
  : T;

type Paths12952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12952<K, Paths12952<T[K], Prev12952[D]>> : never }[keyof T]
  : never;

type Prev12952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12952 {
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

type ConfigPaths12952 = Paths12952<NestedConfig12952>;

interface HeavyProps12952 {
  config: DeepPartial12952<NestedConfig12952>;
  path?: ConfigPaths12952;
}

const HeavyComponent12952 = memo(function HeavyComponent12952({ config }: HeavyProps12952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12952.displayName = 'HeavyComponent12952';
export default HeavyComponent12952;
