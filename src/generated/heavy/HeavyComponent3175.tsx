'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3175<T> = T extends (infer U)[]
  ? DeepReadonlyArray3175<U>
  : T extends object
  ? DeepReadonlyObject3175<T>
  : T;

interface DeepReadonlyArray3175<T> extends ReadonlyArray<DeepReadonly3175<T>> {}

type DeepReadonlyObject3175<T> = {
  readonly [P in keyof T]: DeepReadonly3175<T[P]>;
};

type UnionToIntersection3175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3175<T> = UnionToIntersection3175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3175<T extends unknown[], V> = [...T, V];

type TuplifyUnion3175<T, L = LastOf3175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3175<TuplifyUnion3175<Exclude<T, L>>, L>;

type DeepPartial3175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3175<T[P]> }
  : T;

type Paths3175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3175<K, Paths3175<T[K], Prev3175[D]>> : never }[keyof T]
  : never;

type Prev3175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3175 {
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

type ConfigPaths3175 = Paths3175<NestedConfig3175>;

interface HeavyProps3175 {
  config: DeepPartial3175<NestedConfig3175>;
  path?: ConfigPaths3175;
}

const HeavyComponent3175 = memo(function HeavyComponent3175({ config }: HeavyProps3175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3175.displayName = 'HeavyComponent3175';
export default HeavyComponent3175;
