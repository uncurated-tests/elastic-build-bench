'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3960<T> = T extends (infer U)[]
  ? DeepReadonlyArray3960<U>
  : T extends object
  ? DeepReadonlyObject3960<T>
  : T;

interface DeepReadonlyArray3960<T> extends ReadonlyArray<DeepReadonly3960<T>> {}

type DeepReadonlyObject3960<T> = {
  readonly [P in keyof T]: DeepReadonly3960<T[P]>;
};

type UnionToIntersection3960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3960<T> = UnionToIntersection3960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3960<T extends unknown[], V> = [...T, V];

type TuplifyUnion3960<T, L = LastOf3960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3960<TuplifyUnion3960<Exclude<T, L>>, L>;

type DeepPartial3960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3960<T[P]> }
  : T;

type Paths3960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3960<K, Paths3960<T[K], Prev3960[D]>> : never }[keyof T]
  : never;

type Prev3960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3960 {
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

type ConfigPaths3960 = Paths3960<NestedConfig3960>;

interface HeavyProps3960 {
  config: DeepPartial3960<NestedConfig3960>;
  path?: ConfigPaths3960;
}

const HeavyComponent3960 = memo(function HeavyComponent3960({ config }: HeavyProps3960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3960.displayName = 'HeavyComponent3960';
export default HeavyComponent3960;
