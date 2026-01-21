'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3047<T> = T extends (infer U)[]
  ? DeepReadonlyArray3047<U>
  : T extends object
  ? DeepReadonlyObject3047<T>
  : T;

interface DeepReadonlyArray3047<T> extends ReadonlyArray<DeepReadonly3047<T>> {}

type DeepReadonlyObject3047<T> = {
  readonly [P in keyof T]: DeepReadonly3047<T[P]>;
};

type UnionToIntersection3047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3047<T> = UnionToIntersection3047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3047<T extends unknown[], V> = [...T, V];

type TuplifyUnion3047<T, L = LastOf3047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3047<TuplifyUnion3047<Exclude<T, L>>, L>;

type DeepPartial3047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3047<T[P]> }
  : T;

type Paths3047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3047<K, Paths3047<T[K], Prev3047[D]>> : never }[keyof T]
  : never;

type Prev3047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3047 {
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

type ConfigPaths3047 = Paths3047<NestedConfig3047>;

interface HeavyProps3047 {
  config: DeepPartial3047<NestedConfig3047>;
  path?: ConfigPaths3047;
}

const HeavyComponent3047 = memo(function HeavyComponent3047({ config }: HeavyProps3047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3047.displayName = 'HeavyComponent3047';
export default HeavyComponent3047;
