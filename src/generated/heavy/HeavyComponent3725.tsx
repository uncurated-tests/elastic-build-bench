'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3725<T> = T extends (infer U)[]
  ? DeepReadonlyArray3725<U>
  : T extends object
  ? DeepReadonlyObject3725<T>
  : T;

interface DeepReadonlyArray3725<T> extends ReadonlyArray<DeepReadonly3725<T>> {}

type DeepReadonlyObject3725<T> = {
  readonly [P in keyof T]: DeepReadonly3725<T[P]>;
};

type UnionToIntersection3725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3725<T> = UnionToIntersection3725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3725<T extends unknown[], V> = [...T, V];

type TuplifyUnion3725<T, L = LastOf3725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3725<TuplifyUnion3725<Exclude<T, L>>, L>;

type DeepPartial3725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3725<T[P]> }
  : T;

type Paths3725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3725<K, Paths3725<T[K], Prev3725[D]>> : never }[keyof T]
  : never;

type Prev3725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3725 {
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

type ConfigPaths3725 = Paths3725<NestedConfig3725>;

interface HeavyProps3725 {
  config: DeepPartial3725<NestedConfig3725>;
  path?: ConfigPaths3725;
}

const HeavyComponent3725 = memo(function HeavyComponent3725({ config }: HeavyProps3725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3725.displayName = 'HeavyComponent3725';
export default HeavyComponent3725;
