'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3956<T> = T extends (infer U)[]
  ? DeepReadonlyArray3956<U>
  : T extends object
  ? DeepReadonlyObject3956<T>
  : T;

interface DeepReadonlyArray3956<T> extends ReadonlyArray<DeepReadonly3956<T>> {}

type DeepReadonlyObject3956<T> = {
  readonly [P in keyof T]: DeepReadonly3956<T[P]>;
};

type UnionToIntersection3956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3956<T> = UnionToIntersection3956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3956<T extends unknown[], V> = [...T, V];

type TuplifyUnion3956<T, L = LastOf3956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3956<TuplifyUnion3956<Exclude<T, L>>, L>;

type DeepPartial3956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3956<T[P]> }
  : T;

type Paths3956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3956<K, Paths3956<T[K], Prev3956[D]>> : never }[keyof T]
  : never;

type Prev3956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3956 {
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

type ConfigPaths3956 = Paths3956<NestedConfig3956>;

interface HeavyProps3956 {
  config: DeepPartial3956<NestedConfig3956>;
  path?: ConfigPaths3956;
}

const HeavyComponent3956 = memo(function HeavyComponent3956({ config }: HeavyProps3956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3956.displayName = 'HeavyComponent3956';
export default HeavyComponent3956;
