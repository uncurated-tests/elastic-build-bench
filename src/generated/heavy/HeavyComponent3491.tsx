'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3491<T> = T extends (infer U)[]
  ? DeepReadonlyArray3491<U>
  : T extends object
  ? DeepReadonlyObject3491<T>
  : T;

interface DeepReadonlyArray3491<T> extends ReadonlyArray<DeepReadonly3491<T>> {}

type DeepReadonlyObject3491<T> = {
  readonly [P in keyof T]: DeepReadonly3491<T[P]>;
};

type UnionToIntersection3491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3491<T> = UnionToIntersection3491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3491<T extends unknown[], V> = [...T, V];

type TuplifyUnion3491<T, L = LastOf3491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3491<TuplifyUnion3491<Exclude<T, L>>, L>;

type DeepPartial3491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3491<T[P]> }
  : T;

type Paths3491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3491<K, Paths3491<T[K], Prev3491[D]>> : never }[keyof T]
  : never;

type Prev3491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3491 {
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

type ConfigPaths3491 = Paths3491<NestedConfig3491>;

interface HeavyProps3491 {
  config: DeepPartial3491<NestedConfig3491>;
  path?: ConfigPaths3491;
}

const HeavyComponent3491 = memo(function HeavyComponent3491({ config }: HeavyProps3491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3491.displayName = 'HeavyComponent3491';
export default HeavyComponent3491;
