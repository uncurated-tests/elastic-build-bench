'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3161<T> = T extends (infer U)[]
  ? DeepReadonlyArray3161<U>
  : T extends object
  ? DeepReadonlyObject3161<T>
  : T;

interface DeepReadonlyArray3161<T> extends ReadonlyArray<DeepReadonly3161<T>> {}

type DeepReadonlyObject3161<T> = {
  readonly [P in keyof T]: DeepReadonly3161<T[P]>;
};

type UnionToIntersection3161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3161<T> = UnionToIntersection3161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3161<T extends unknown[], V> = [...T, V];

type TuplifyUnion3161<T, L = LastOf3161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3161<TuplifyUnion3161<Exclude<T, L>>, L>;

type DeepPartial3161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3161<T[P]> }
  : T;

type Paths3161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3161<K, Paths3161<T[K], Prev3161[D]>> : never }[keyof T]
  : never;

type Prev3161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3161 {
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

type ConfigPaths3161 = Paths3161<NestedConfig3161>;

interface HeavyProps3161 {
  config: DeepPartial3161<NestedConfig3161>;
  path?: ConfigPaths3161;
}

const HeavyComponent3161 = memo(function HeavyComponent3161({ config }: HeavyProps3161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3161.displayName = 'HeavyComponent3161';
export default HeavyComponent3161;
