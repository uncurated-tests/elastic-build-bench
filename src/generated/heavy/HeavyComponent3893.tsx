'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3893<T> = T extends (infer U)[]
  ? DeepReadonlyArray3893<U>
  : T extends object
  ? DeepReadonlyObject3893<T>
  : T;

interface DeepReadonlyArray3893<T> extends ReadonlyArray<DeepReadonly3893<T>> {}

type DeepReadonlyObject3893<T> = {
  readonly [P in keyof T]: DeepReadonly3893<T[P]>;
};

type UnionToIntersection3893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3893<T> = UnionToIntersection3893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3893<T extends unknown[], V> = [...T, V];

type TuplifyUnion3893<T, L = LastOf3893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3893<TuplifyUnion3893<Exclude<T, L>>, L>;

type DeepPartial3893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3893<T[P]> }
  : T;

type Paths3893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3893<K, Paths3893<T[K], Prev3893[D]>> : never }[keyof T]
  : never;

type Prev3893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3893 {
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

type ConfigPaths3893 = Paths3893<NestedConfig3893>;

interface HeavyProps3893 {
  config: DeepPartial3893<NestedConfig3893>;
  path?: ConfigPaths3893;
}

const HeavyComponent3893 = memo(function HeavyComponent3893({ config }: HeavyProps3893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3893.displayName = 'HeavyComponent3893';
export default HeavyComponent3893;
