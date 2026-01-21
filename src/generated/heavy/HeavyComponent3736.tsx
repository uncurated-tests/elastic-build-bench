'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3736<T> = T extends (infer U)[]
  ? DeepReadonlyArray3736<U>
  : T extends object
  ? DeepReadonlyObject3736<T>
  : T;

interface DeepReadonlyArray3736<T> extends ReadonlyArray<DeepReadonly3736<T>> {}

type DeepReadonlyObject3736<T> = {
  readonly [P in keyof T]: DeepReadonly3736<T[P]>;
};

type UnionToIntersection3736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3736<T> = UnionToIntersection3736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3736<T extends unknown[], V> = [...T, V];

type TuplifyUnion3736<T, L = LastOf3736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3736<TuplifyUnion3736<Exclude<T, L>>, L>;

type DeepPartial3736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3736<T[P]> }
  : T;

type Paths3736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3736<K, Paths3736<T[K], Prev3736[D]>> : never }[keyof T]
  : never;

type Prev3736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3736 {
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

type ConfigPaths3736 = Paths3736<NestedConfig3736>;

interface HeavyProps3736 {
  config: DeepPartial3736<NestedConfig3736>;
  path?: ConfigPaths3736;
}

const HeavyComponent3736 = memo(function HeavyComponent3736({ config }: HeavyProps3736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3736.displayName = 'HeavyComponent3736';
export default HeavyComponent3736;
