'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3493<T> = T extends (infer U)[]
  ? DeepReadonlyArray3493<U>
  : T extends object
  ? DeepReadonlyObject3493<T>
  : T;

interface DeepReadonlyArray3493<T> extends ReadonlyArray<DeepReadonly3493<T>> {}

type DeepReadonlyObject3493<T> = {
  readonly [P in keyof T]: DeepReadonly3493<T[P]>;
};

type UnionToIntersection3493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3493<T> = UnionToIntersection3493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3493<T extends unknown[], V> = [...T, V];

type TuplifyUnion3493<T, L = LastOf3493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3493<TuplifyUnion3493<Exclude<T, L>>, L>;

type DeepPartial3493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3493<T[P]> }
  : T;

type Paths3493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3493<K, Paths3493<T[K], Prev3493[D]>> : never }[keyof T]
  : never;

type Prev3493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3493 {
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

type ConfigPaths3493 = Paths3493<NestedConfig3493>;

interface HeavyProps3493 {
  config: DeepPartial3493<NestedConfig3493>;
  path?: ConfigPaths3493;
}

const HeavyComponent3493 = memo(function HeavyComponent3493({ config }: HeavyProps3493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3493.displayName = 'HeavyComponent3493';
export default HeavyComponent3493;
