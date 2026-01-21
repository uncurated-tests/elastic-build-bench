'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3651<T> = T extends (infer U)[]
  ? DeepReadonlyArray3651<U>
  : T extends object
  ? DeepReadonlyObject3651<T>
  : T;

interface DeepReadonlyArray3651<T> extends ReadonlyArray<DeepReadonly3651<T>> {}

type DeepReadonlyObject3651<T> = {
  readonly [P in keyof T]: DeepReadonly3651<T[P]>;
};

type UnionToIntersection3651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3651<T> = UnionToIntersection3651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3651<T extends unknown[], V> = [...T, V];

type TuplifyUnion3651<T, L = LastOf3651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3651<TuplifyUnion3651<Exclude<T, L>>, L>;

type DeepPartial3651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3651<T[P]> }
  : T;

type Paths3651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3651<K, Paths3651<T[K], Prev3651[D]>> : never }[keyof T]
  : never;

type Prev3651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3651 {
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

type ConfigPaths3651 = Paths3651<NestedConfig3651>;

interface HeavyProps3651 {
  config: DeepPartial3651<NestedConfig3651>;
  path?: ConfigPaths3651;
}

const HeavyComponent3651 = memo(function HeavyComponent3651({ config }: HeavyProps3651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3651.displayName = 'HeavyComponent3651';
export default HeavyComponent3651;
