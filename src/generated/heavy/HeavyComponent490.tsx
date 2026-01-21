'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly490<T> = T extends (infer U)[]
  ? DeepReadonlyArray490<U>
  : T extends object
  ? DeepReadonlyObject490<T>
  : T;

interface DeepReadonlyArray490<T> extends ReadonlyArray<DeepReadonly490<T>> {}

type DeepReadonlyObject490<T> = {
  readonly [P in keyof T]: DeepReadonly490<T[P]>;
};

type UnionToIntersection490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf490<T> = UnionToIntersection490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push490<T extends unknown[], V> = [...T, V];

type TuplifyUnion490<T, L = LastOf490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push490<TuplifyUnion490<Exclude<T, L>>, L>;

type DeepPartial490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial490<T[P]> }
  : T;

type Paths490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join490<K, Paths490<T[K], Prev490[D]>> : never }[keyof T]
  : never;

type Prev490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig490 {
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

type ConfigPaths490 = Paths490<NestedConfig490>;

interface HeavyProps490 {
  config: DeepPartial490<NestedConfig490>;
  path?: ConfigPaths490;
}

const HeavyComponent490 = memo(function HeavyComponent490({ config }: HeavyProps490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent490.displayName = 'HeavyComponent490';
export default HeavyComponent490;
