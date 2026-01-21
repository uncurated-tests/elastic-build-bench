'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3338<T> = T extends (infer U)[]
  ? DeepReadonlyArray3338<U>
  : T extends object
  ? DeepReadonlyObject3338<T>
  : T;

interface DeepReadonlyArray3338<T> extends ReadonlyArray<DeepReadonly3338<T>> {}

type DeepReadonlyObject3338<T> = {
  readonly [P in keyof T]: DeepReadonly3338<T[P]>;
};

type UnionToIntersection3338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3338<T> = UnionToIntersection3338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3338<T extends unknown[], V> = [...T, V];

type TuplifyUnion3338<T, L = LastOf3338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3338<TuplifyUnion3338<Exclude<T, L>>, L>;

type DeepPartial3338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3338<T[P]> }
  : T;

type Paths3338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3338<K, Paths3338<T[K], Prev3338[D]>> : never }[keyof T]
  : never;

type Prev3338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3338 {
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

type ConfigPaths3338 = Paths3338<NestedConfig3338>;

interface HeavyProps3338 {
  config: DeepPartial3338<NestedConfig3338>;
  path?: ConfigPaths3338;
}

const HeavyComponent3338 = memo(function HeavyComponent3338({ config }: HeavyProps3338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3338.displayName = 'HeavyComponent3338';
export default HeavyComponent3338;
