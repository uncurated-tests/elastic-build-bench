'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3273<T> = T extends (infer U)[]
  ? DeepReadonlyArray3273<U>
  : T extends object
  ? DeepReadonlyObject3273<T>
  : T;

interface DeepReadonlyArray3273<T> extends ReadonlyArray<DeepReadonly3273<T>> {}

type DeepReadonlyObject3273<T> = {
  readonly [P in keyof T]: DeepReadonly3273<T[P]>;
};

type UnionToIntersection3273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3273<T> = UnionToIntersection3273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3273<T extends unknown[], V> = [...T, V];

type TuplifyUnion3273<T, L = LastOf3273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3273<TuplifyUnion3273<Exclude<T, L>>, L>;

type DeepPartial3273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3273<T[P]> }
  : T;

type Paths3273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3273<K, Paths3273<T[K], Prev3273[D]>> : never }[keyof T]
  : never;

type Prev3273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3273 {
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

type ConfigPaths3273 = Paths3273<NestedConfig3273>;

interface HeavyProps3273 {
  config: DeepPartial3273<NestedConfig3273>;
  path?: ConfigPaths3273;
}

const HeavyComponent3273 = memo(function HeavyComponent3273({ config }: HeavyProps3273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3273.displayName = 'HeavyComponent3273';
export default HeavyComponent3273;
