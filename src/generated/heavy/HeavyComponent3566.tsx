'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3566<T> = T extends (infer U)[]
  ? DeepReadonlyArray3566<U>
  : T extends object
  ? DeepReadonlyObject3566<T>
  : T;

interface DeepReadonlyArray3566<T> extends ReadonlyArray<DeepReadonly3566<T>> {}

type DeepReadonlyObject3566<T> = {
  readonly [P in keyof T]: DeepReadonly3566<T[P]>;
};

type UnionToIntersection3566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3566<T> = UnionToIntersection3566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3566<T extends unknown[], V> = [...T, V];

type TuplifyUnion3566<T, L = LastOf3566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3566<TuplifyUnion3566<Exclude<T, L>>, L>;

type DeepPartial3566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3566<T[P]> }
  : T;

type Paths3566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3566<K, Paths3566<T[K], Prev3566[D]>> : never }[keyof T]
  : never;

type Prev3566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3566 {
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

type ConfigPaths3566 = Paths3566<NestedConfig3566>;

interface HeavyProps3566 {
  config: DeepPartial3566<NestedConfig3566>;
  path?: ConfigPaths3566;
}

const HeavyComponent3566 = memo(function HeavyComponent3566({ config }: HeavyProps3566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3566.displayName = 'HeavyComponent3566';
export default HeavyComponent3566;
