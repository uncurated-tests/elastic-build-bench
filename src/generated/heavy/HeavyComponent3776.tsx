'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3776<T> = T extends (infer U)[]
  ? DeepReadonlyArray3776<U>
  : T extends object
  ? DeepReadonlyObject3776<T>
  : T;

interface DeepReadonlyArray3776<T> extends ReadonlyArray<DeepReadonly3776<T>> {}

type DeepReadonlyObject3776<T> = {
  readonly [P in keyof T]: DeepReadonly3776<T[P]>;
};

type UnionToIntersection3776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3776<T> = UnionToIntersection3776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3776<T extends unknown[], V> = [...T, V];

type TuplifyUnion3776<T, L = LastOf3776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3776<TuplifyUnion3776<Exclude<T, L>>, L>;

type DeepPartial3776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3776<T[P]> }
  : T;

type Paths3776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3776<K, Paths3776<T[K], Prev3776[D]>> : never }[keyof T]
  : never;

type Prev3776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3776 {
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

type ConfigPaths3776 = Paths3776<NestedConfig3776>;

interface HeavyProps3776 {
  config: DeepPartial3776<NestedConfig3776>;
  path?: ConfigPaths3776;
}

const HeavyComponent3776 = memo(function HeavyComponent3776({ config }: HeavyProps3776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3776.displayName = 'HeavyComponent3776';
export default HeavyComponent3776;
