'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3863<T> = T extends (infer U)[]
  ? DeepReadonlyArray3863<U>
  : T extends object
  ? DeepReadonlyObject3863<T>
  : T;

interface DeepReadonlyArray3863<T> extends ReadonlyArray<DeepReadonly3863<T>> {}

type DeepReadonlyObject3863<T> = {
  readonly [P in keyof T]: DeepReadonly3863<T[P]>;
};

type UnionToIntersection3863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3863<T> = UnionToIntersection3863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3863<T extends unknown[], V> = [...T, V];

type TuplifyUnion3863<T, L = LastOf3863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3863<TuplifyUnion3863<Exclude<T, L>>, L>;

type DeepPartial3863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3863<T[P]> }
  : T;

type Paths3863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3863<K, Paths3863<T[K], Prev3863[D]>> : never }[keyof T]
  : never;

type Prev3863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3863 {
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

type ConfigPaths3863 = Paths3863<NestedConfig3863>;

interface HeavyProps3863 {
  config: DeepPartial3863<NestedConfig3863>;
  path?: ConfigPaths3863;
}

const HeavyComponent3863 = memo(function HeavyComponent3863({ config }: HeavyProps3863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3863.displayName = 'HeavyComponent3863';
export default HeavyComponent3863;
