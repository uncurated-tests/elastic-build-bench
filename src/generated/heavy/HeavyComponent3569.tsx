'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3569<T> = T extends (infer U)[]
  ? DeepReadonlyArray3569<U>
  : T extends object
  ? DeepReadonlyObject3569<T>
  : T;

interface DeepReadonlyArray3569<T> extends ReadonlyArray<DeepReadonly3569<T>> {}

type DeepReadonlyObject3569<T> = {
  readonly [P in keyof T]: DeepReadonly3569<T[P]>;
};

type UnionToIntersection3569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3569<T> = UnionToIntersection3569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3569<T extends unknown[], V> = [...T, V];

type TuplifyUnion3569<T, L = LastOf3569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3569<TuplifyUnion3569<Exclude<T, L>>, L>;

type DeepPartial3569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3569<T[P]> }
  : T;

type Paths3569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3569<K, Paths3569<T[K], Prev3569[D]>> : never }[keyof T]
  : never;

type Prev3569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3569 {
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

type ConfigPaths3569 = Paths3569<NestedConfig3569>;

interface HeavyProps3569 {
  config: DeepPartial3569<NestedConfig3569>;
  path?: ConfigPaths3569;
}

const HeavyComponent3569 = memo(function HeavyComponent3569({ config }: HeavyProps3569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3569.displayName = 'HeavyComponent3569';
export default HeavyComponent3569;
