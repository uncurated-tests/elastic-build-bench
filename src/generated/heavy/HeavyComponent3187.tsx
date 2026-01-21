'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3187<T> = T extends (infer U)[]
  ? DeepReadonlyArray3187<U>
  : T extends object
  ? DeepReadonlyObject3187<T>
  : T;

interface DeepReadonlyArray3187<T> extends ReadonlyArray<DeepReadonly3187<T>> {}

type DeepReadonlyObject3187<T> = {
  readonly [P in keyof T]: DeepReadonly3187<T[P]>;
};

type UnionToIntersection3187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3187<T> = UnionToIntersection3187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3187<T extends unknown[], V> = [...T, V];

type TuplifyUnion3187<T, L = LastOf3187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3187<TuplifyUnion3187<Exclude<T, L>>, L>;

type DeepPartial3187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3187<T[P]> }
  : T;

type Paths3187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3187<K, Paths3187<T[K], Prev3187[D]>> : never }[keyof T]
  : never;

type Prev3187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3187 {
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

type ConfigPaths3187 = Paths3187<NestedConfig3187>;

interface HeavyProps3187 {
  config: DeepPartial3187<NestedConfig3187>;
  path?: ConfigPaths3187;
}

const HeavyComponent3187 = memo(function HeavyComponent3187({ config }: HeavyProps3187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3187.displayName = 'HeavyComponent3187';
export default HeavyComponent3187;
