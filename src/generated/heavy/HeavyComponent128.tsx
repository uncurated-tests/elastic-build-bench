'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly128<T> = T extends (infer U)[]
  ? DeepReadonlyArray128<U>
  : T extends object
  ? DeepReadonlyObject128<T>
  : T;

interface DeepReadonlyArray128<T> extends ReadonlyArray<DeepReadonly128<T>> {}

type DeepReadonlyObject128<T> = {
  readonly [P in keyof T]: DeepReadonly128<T[P]>;
};

type UnionToIntersection128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf128<T> = UnionToIntersection128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push128<T extends unknown[], V> = [...T, V];

type TuplifyUnion128<T, L = LastOf128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push128<TuplifyUnion128<Exclude<T, L>>, L>;

type DeepPartial128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial128<T[P]> }
  : T;

type Paths128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join128<K, Paths128<T[K], Prev128[D]>> : never }[keyof T]
  : never;

type Prev128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig128 {
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

type ConfigPaths128 = Paths128<NestedConfig128>;

interface HeavyProps128 {
  config: DeepPartial128<NestedConfig128>;
  path?: ConfigPaths128;
}

const HeavyComponent128 = memo(function HeavyComponent128({ config }: HeavyProps128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent128.displayName = 'HeavyComponent128';
export default HeavyComponent128;
