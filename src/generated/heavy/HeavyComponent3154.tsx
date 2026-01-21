'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3154<T> = T extends (infer U)[]
  ? DeepReadonlyArray3154<U>
  : T extends object
  ? DeepReadonlyObject3154<T>
  : T;

interface DeepReadonlyArray3154<T> extends ReadonlyArray<DeepReadonly3154<T>> {}

type DeepReadonlyObject3154<T> = {
  readonly [P in keyof T]: DeepReadonly3154<T[P]>;
};

type UnionToIntersection3154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3154<T> = UnionToIntersection3154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3154<T extends unknown[], V> = [...T, V];

type TuplifyUnion3154<T, L = LastOf3154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3154<TuplifyUnion3154<Exclude<T, L>>, L>;

type DeepPartial3154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3154<T[P]> }
  : T;

type Paths3154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3154<K, Paths3154<T[K], Prev3154[D]>> : never }[keyof T]
  : never;

type Prev3154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3154 {
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

type ConfigPaths3154 = Paths3154<NestedConfig3154>;

interface HeavyProps3154 {
  config: DeepPartial3154<NestedConfig3154>;
  path?: ConfigPaths3154;
}

const HeavyComponent3154 = memo(function HeavyComponent3154({ config }: HeavyProps3154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3154.displayName = 'HeavyComponent3154';
export default HeavyComponent3154;
