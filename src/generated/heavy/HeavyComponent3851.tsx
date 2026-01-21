'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3851<T> = T extends (infer U)[]
  ? DeepReadonlyArray3851<U>
  : T extends object
  ? DeepReadonlyObject3851<T>
  : T;

interface DeepReadonlyArray3851<T> extends ReadonlyArray<DeepReadonly3851<T>> {}

type DeepReadonlyObject3851<T> = {
  readonly [P in keyof T]: DeepReadonly3851<T[P]>;
};

type UnionToIntersection3851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3851<T> = UnionToIntersection3851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3851<T extends unknown[], V> = [...T, V];

type TuplifyUnion3851<T, L = LastOf3851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3851<TuplifyUnion3851<Exclude<T, L>>, L>;

type DeepPartial3851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3851<T[P]> }
  : T;

type Paths3851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3851<K, Paths3851<T[K], Prev3851[D]>> : never }[keyof T]
  : never;

type Prev3851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3851 {
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

type ConfigPaths3851 = Paths3851<NestedConfig3851>;

interface HeavyProps3851 {
  config: DeepPartial3851<NestedConfig3851>;
  path?: ConfigPaths3851;
}

const HeavyComponent3851 = memo(function HeavyComponent3851({ config }: HeavyProps3851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3851.displayName = 'HeavyComponent3851';
export default HeavyComponent3851;
