'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3381<T> = T extends (infer U)[]
  ? DeepReadonlyArray3381<U>
  : T extends object
  ? DeepReadonlyObject3381<T>
  : T;

interface DeepReadonlyArray3381<T> extends ReadonlyArray<DeepReadonly3381<T>> {}

type DeepReadonlyObject3381<T> = {
  readonly [P in keyof T]: DeepReadonly3381<T[P]>;
};

type UnionToIntersection3381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3381<T> = UnionToIntersection3381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3381<T extends unknown[], V> = [...T, V];

type TuplifyUnion3381<T, L = LastOf3381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3381<TuplifyUnion3381<Exclude<T, L>>, L>;

type DeepPartial3381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3381<T[P]> }
  : T;

type Paths3381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3381<K, Paths3381<T[K], Prev3381[D]>> : never }[keyof T]
  : never;

type Prev3381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3381 {
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

type ConfigPaths3381 = Paths3381<NestedConfig3381>;

interface HeavyProps3381 {
  config: DeepPartial3381<NestedConfig3381>;
  path?: ConfigPaths3381;
}

const HeavyComponent3381 = memo(function HeavyComponent3381({ config }: HeavyProps3381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3381.displayName = 'HeavyComponent3381';
export default HeavyComponent3381;
