'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3064<T> = T extends (infer U)[]
  ? DeepReadonlyArray3064<U>
  : T extends object
  ? DeepReadonlyObject3064<T>
  : T;

interface DeepReadonlyArray3064<T> extends ReadonlyArray<DeepReadonly3064<T>> {}

type DeepReadonlyObject3064<T> = {
  readonly [P in keyof T]: DeepReadonly3064<T[P]>;
};

type UnionToIntersection3064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3064<T> = UnionToIntersection3064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3064<T extends unknown[], V> = [...T, V];

type TuplifyUnion3064<T, L = LastOf3064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3064<TuplifyUnion3064<Exclude<T, L>>, L>;

type DeepPartial3064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3064<T[P]> }
  : T;

type Paths3064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3064<K, Paths3064<T[K], Prev3064[D]>> : never }[keyof T]
  : never;

type Prev3064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3064 {
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

type ConfigPaths3064 = Paths3064<NestedConfig3064>;

interface HeavyProps3064 {
  config: DeepPartial3064<NestedConfig3064>;
  path?: ConfigPaths3064;
}

const HeavyComponent3064 = memo(function HeavyComponent3064({ config }: HeavyProps3064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3064.displayName = 'HeavyComponent3064';
export default HeavyComponent3064;
