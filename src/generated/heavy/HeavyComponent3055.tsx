'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3055<T> = T extends (infer U)[]
  ? DeepReadonlyArray3055<U>
  : T extends object
  ? DeepReadonlyObject3055<T>
  : T;

interface DeepReadonlyArray3055<T> extends ReadonlyArray<DeepReadonly3055<T>> {}

type DeepReadonlyObject3055<T> = {
  readonly [P in keyof T]: DeepReadonly3055<T[P]>;
};

type UnionToIntersection3055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3055<T> = UnionToIntersection3055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3055<T extends unknown[], V> = [...T, V];

type TuplifyUnion3055<T, L = LastOf3055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3055<TuplifyUnion3055<Exclude<T, L>>, L>;

type DeepPartial3055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3055<T[P]> }
  : T;

type Paths3055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3055<K, Paths3055<T[K], Prev3055[D]>> : never }[keyof T]
  : never;

type Prev3055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3055 {
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

type ConfigPaths3055 = Paths3055<NestedConfig3055>;

interface HeavyProps3055 {
  config: DeepPartial3055<NestedConfig3055>;
  path?: ConfigPaths3055;
}

const HeavyComponent3055 = memo(function HeavyComponent3055({ config }: HeavyProps3055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3055.displayName = 'HeavyComponent3055';
export default HeavyComponent3055;
