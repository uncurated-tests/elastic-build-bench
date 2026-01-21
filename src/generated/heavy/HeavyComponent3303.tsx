'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3303<T> = T extends (infer U)[]
  ? DeepReadonlyArray3303<U>
  : T extends object
  ? DeepReadonlyObject3303<T>
  : T;

interface DeepReadonlyArray3303<T> extends ReadonlyArray<DeepReadonly3303<T>> {}

type DeepReadonlyObject3303<T> = {
  readonly [P in keyof T]: DeepReadonly3303<T[P]>;
};

type UnionToIntersection3303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3303<T> = UnionToIntersection3303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3303<T extends unknown[], V> = [...T, V];

type TuplifyUnion3303<T, L = LastOf3303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3303<TuplifyUnion3303<Exclude<T, L>>, L>;

type DeepPartial3303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3303<T[P]> }
  : T;

type Paths3303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3303<K, Paths3303<T[K], Prev3303[D]>> : never }[keyof T]
  : never;

type Prev3303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3303 {
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

type ConfigPaths3303 = Paths3303<NestedConfig3303>;

interface HeavyProps3303 {
  config: DeepPartial3303<NestedConfig3303>;
  path?: ConfigPaths3303;
}

const HeavyComponent3303 = memo(function HeavyComponent3303({ config }: HeavyProps3303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3303.displayName = 'HeavyComponent3303';
export default HeavyComponent3303;
