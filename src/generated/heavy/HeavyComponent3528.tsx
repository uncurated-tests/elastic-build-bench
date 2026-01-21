'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3528<T> = T extends (infer U)[]
  ? DeepReadonlyArray3528<U>
  : T extends object
  ? DeepReadonlyObject3528<T>
  : T;

interface DeepReadonlyArray3528<T> extends ReadonlyArray<DeepReadonly3528<T>> {}

type DeepReadonlyObject3528<T> = {
  readonly [P in keyof T]: DeepReadonly3528<T[P]>;
};

type UnionToIntersection3528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3528<T> = UnionToIntersection3528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3528<T extends unknown[], V> = [...T, V];

type TuplifyUnion3528<T, L = LastOf3528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3528<TuplifyUnion3528<Exclude<T, L>>, L>;

type DeepPartial3528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3528<T[P]> }
  : T;

type Paths3528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3528<K, Paths3528<T[K], Prev3528[D]>> : never }[keyof T]
  : never;

type Prev3528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3528 {
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

type ConfigPaths3528 = Paths3528<NestedConfig3528>;

interface HeavyProps3528 {
  config: DeepPartial3528<NestedConfig3528>;
  path?: ConfigPaths3528;
}

const HeavyComponent3528 = memo(function HeavyComponent3528({ config }: HeavyProps3528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3528.displayName = 'HeavyComponent3528';
export default HeavyComponent3528;
