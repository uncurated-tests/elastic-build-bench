'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3955<T> = T extends (infer U)[]
  ? DeepReadonlyArray3955<U>
  : T extends object
  ? DeepReadonlyObject3955<T>
  : T;

interface DeepReadonlyArray3955<T> extends ReadonlyArray<DeepReadonly3955<T>> {}

type DeepReadonlyObject3955<T> = {
  readonly [P in keyof T]: DeepReadonly3955<T[P]>;
};

type UnionToIntersection3955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3955<T> = UnionToIntersection3955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3955<T extends unknown[], V> = [...T, V];

type TuplifyUnion3955<T, L = LastOf3955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3955<TuplifyUnion3955<Exclude<T, L>>, L>;

type DeepPartial3955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3955<T[P]> }
  : T;

type Paths3955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3955<K, Paths3955<T[K], Prev3955[D]>> : never }[keyof T]
  : never;

type Prev3955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3955 {
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

type ConfigPaths3955 = Paths3955<NestedConfig3955>;

interface HeavyProps3955 {
  config: DeepPartial3955<NestedConfig3955>;
  path?: ConfigPaths3955;
}

const HeavyComponent3955 = memo(function HeavyComponent3955({ config }: HeavyProps3955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3955.displayName = 'HeavyComponent3955';
export default HeavyComponent3955;
