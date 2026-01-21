'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3644<T> = T extends (infer U)[]
  ? DeepReadonlyArray3644<U>
  : T extends object
  ? DeepReadonlyObject3644<T>
  : T;

interface DeepReadonlyArray3644<T> extends ReadonlyArray<DeepReadonly3644<T>> {}

type DeepReadonlyObject3644<T> = {
  readonly [P in keyof T]: DeepReadonly3644<T[P]>;
};

type UnionToIntersection3644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3644<T> = UnionToIntersection3644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3644<T extends unknown[], V> = [...T, V];

type TuplifyUnion3644<T, L = LastOf3644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3644<TuplifyUnion3644<Exclude<T, L>>, L>;

type DeepPartial3644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3644<T[P]> }
  : T;

type Paths3644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3644<K, Paths3644<T[K], Prev3644[D]>> : never }[keyof T]
  : never;

type Prev3644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3644 {
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

type ConfigPaths3644 = Paths3644<NestedConfig3644>;

interface HeavyProps3644 {
  config: DeepPartial3644<NestedConfig3644>;
  path?: ConfigPaths3644;
}

const HeavyComponent3644 = memo(function HeavyComponent3644({ config }: HeavyProps3644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3644.displayName = 'HeavyComponent3644';
export default HeavyComponent3644;
