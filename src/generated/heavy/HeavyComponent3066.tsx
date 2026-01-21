'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3066<T> = T extends (infer U)[]
  ? DeepReadonlyArray3066<U>
  : T extends object
  ? DeepReadonlyObject3066<T>
  : T;

interface DeepReadonlyArray3066<T> extends ReadonlyArray<DeepReadonly3066<T>> {}

type DeepReadonlyObject3066<T> = {
  readonly [P in keyof T]: DeepReadonly3066<T[P]>;
};

type UnionToIntersection3066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3066<T> = UnionToIntersection3066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3066<T extends unknown[], V> = [...T, V];

type TuplifyUnion3066<T, L = LastOf3066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3066<TuplifyUnion3066<Exclude<T, L>>, L>;

type DeepPartial3066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3066<T[P]> }
  : T;

type Paths3066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3066<K, Paths3066<T[K], Prev3066[D]>> : never }[keyof T]
  : never;

type Prev3066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3066 {
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

type ConfigPaths3066 = Paths3066<NestedConfig3066>;

interface HeavyProps3066 {
  config: DeepPartial3066<NestedConfig3066>;
  path?: ConfigPaths3066;
}

const HeavyComponent3066 = memo(function HeavyComponent3066({ config }: HeavyProps3066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3066.displayName = 'HeavyComponent3066';
export default HeavyComponent3066;
