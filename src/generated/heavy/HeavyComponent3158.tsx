'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3158<T> = T extends (infer U)[]
  ? DeepReadonlyArray3158<U>
  : T extends object
  ? DeepReadonlyObject3158<T>
  : T;

interface DeepReadonlyArray3158<T> extends ReadonlyArray<DeepReadonly3158<T>> {}

type DeepReadonlyObject3158<T> = {
  readonly [P in keyof T]: DeepReadonly3158<T[P]>;
};

type UnionToIntersection3158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3158<T> = UnionToIntersection3158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3158<T extends unknown[], V> = [...T, V];

type TuplifyUnion3158<T, L = LastOf3158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3158<TuplifyUnion3158<Exclude<T, L>>, L>;

type DeepPartial3158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3158<T[P]> }
  : T;

type Paths3158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3158<K, Paths3158<T[K], Prev3158[D]>> : never }[keyof T]
  : never;

type Prev3158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3158 {
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

type ConfigPaths3158 = Paths3158<NestedConfig3158>;

interface HeavyProps3158 {
  config: DeepPartial3158<NestedConfig3158>;
  path?: ConfigPaths3158;
}

const HeavyComponent3158 = memo(function HeavyComponent3158({ config }: HeavyProps3158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3158.displayName = 'HeavyComponent3158';
export default HeavyComponent3158;
