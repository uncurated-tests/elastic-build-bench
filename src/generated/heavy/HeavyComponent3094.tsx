'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3094<T> = T extends (infer U)[]
  ? DeepReadonlyArray3094<U>
  : T extends object
  ? DeepReadonlyObject3094<T>
  : T;

interface DeepReadonlyArray3094<T> extends ReadonlyArray<DeepReadonly3094<T>> {}

type DeepReadonlyObject3094<T> = {
  readonly [P in keyof T]: DeepReadonly3094<T[P]>;
};

type UnionToIntersection3094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3094<T> = UnionToIntersection3094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3094<T extends unknown[], V> = [...T, V];

type TuplifyUnion3094<T, L = LastOf3094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3094<TuplifyUnion3094<Exclude<T, L>>, L>;

type DeepPartial3094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3094<T[P]> }
  : T;

type Paths3094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3094<K, Paths3094<T[K], Prev3094[D]>> : never }[keyof T]
  : never;

type Prev3094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3094 {
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

type ConfigPaths3094 = Paths3094<NestedConfig3094>;

interface HeavyProps3094 {
  config: DeepPartial3094<NestedConfig3094>;
  path?: ConfigPaths3094;
}

const HeavyComponent3094 = memo(function HeavyComponent3094({ config }: HeavyProps3094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3094.displayName = 'HeavyComponent3094';
export default HeavyComponent3094;
