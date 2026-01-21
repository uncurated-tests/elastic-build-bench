'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3515<T> = T extends (infer U)[]
  ? DeepReadonlyArray3515<U>
  : T extends object
  ? DeepReadonlyObject3515<T>
  : T;

interface DeepReadonlyArray3515<T> extends ReadonlyArray<DeepReadonly3515<T>> {}

type DeepReadonlyObject3515<T> = {
  readonly [P in keyof T]: DeepReadonly3515<T[P]>;
};

type UnionToIntersection3515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3515<T> = UnionToIntersection3515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3515<T extends unknown[], V> = [...T, V];

type TuplifyUnion3515<T, L = LastOf3515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3515<TuplifyUnion3515<Exclude<T, L>>, L>;

type DeepPartial3515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3515<T[P]> }
  : T;

type Paths3515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3515<K, Paths3515<T[K], Prev3515[D]>> : never }[keyof T]
  : never;

type Prev3515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3515 {
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

type ConfigPaths3515 = Paths3515<NestedConfig3515>;

interface HeavyProps3515 {
  config: DeepPartial3515<NestedConfig3515>;
  path?: ConfigPaths3515;
}

const HeavyComponent3515 = memo(function HeavyComponent3515({ config }: HeavyProps3515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3515.displayName = 'HeavyComponent3515';
export default HeavyComponent3515;
