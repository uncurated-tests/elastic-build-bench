'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3701<T> = T extends (infer U)[]
  ? DeepReadonlyArray3701<U>
  : T extends object
  ? DeepReadonlyObject3701<T>
  : T;

interface DeepReadonlyArray3701<T> extends ReadonlyArray<DeepReadonly3701<T>> {}

type DeepReadonlyObject3701<T> = {
  readonly [P in keyof T]: DeepReadonly3701<T[P]>;
};

type UnionToIntersection3701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3701<T> = UnionToIntersection3701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3701<T extends unknown[], V> = [...T, V];

type TuplifyUnion3701<T, L = LastOf3701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3701<TuplifyUnion3701<Exclude<T, L>>, L>;

type DeepPartial3701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3701<T[P]> }
  : T;

type Paths3701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3701<K, Paths3701<T[K], Prev3701[D]>> : never }[keyof T]
  : never;

type Prev3701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3701 {
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

type ConfigPaths3701 = Paths3701<NestedConfig3701>;

interface HeavyProps3701 {
  config: DeepPartial3701<NestedConfig3701>;
  path?: ConfigPaths3701;
}

const HeavyComponent3701 = memo(function HeavyComponent3701({ config }: HeavyProps3701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3701.displayName = 'HeavyComponent3701';
export default HeavyComponent3701;
