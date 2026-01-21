'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3395<T> = T extends (infer U)[]
  ? DeepReadonlyArray3395<U>
  : T extends object
  ? DeepReadonlyObject3395<T>
  : T;

interface DeepReadonlyArray3395<T> extends ReadonlyArray<DeepReadonly3395<T>> {}

type DeepReadonlyObject3395<T> = {
  readonly [P in keyof T]: DeepReadonly3395<T[P]>;
};

type UnionToIntersection3395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3395<T> = UnionToIntersection3395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3395<T extends unknown[], V> = [...T, V];

type TuplifyUnion3395<T, L = LastOf3395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3395<TuplifyUnion3395<Exclude<T, L>>, L>;

type DeepPartial3395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3395<T[P]> }
  : T;

type Paths3395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3395<K, Paths3395<T[K], Prev3395[D]>> : never }[keyof T]
  : never;

type Prev3395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3395 {
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

type ConfigPaths3395 = Paths3395<NestedConfig3395>;

interface HeavyProps3395 {
  config: DeepPartial3395<NestedConfig3395>;
  path?: ConfigPaths3395;
}

const HeavyComponent3395 = memo(function HeavyComponent3395({ config }: HeavyProps3395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3395.displayName = 'HeavyComponent3395';
export default HeavyComponent3395;
