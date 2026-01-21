'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3113<T> = T extends (infer U)[]
  ? DeepReadonlyArray3113<U>
  : T extends object
  ? DeepReadonlyObject3113<T>
  : T;

interface DeepReadonlyArray3113<T> extends ReadonlyArray<DeepReadonly3113<T>> {}

type DeepReadonlyObject3113<T> = {
  readonly [P in keyof T]: DeepReadonly3113<T[P]>;
};

type UnionToIntersection3113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3113<T> = UnionToIntersection3113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3113<T extends unknown[], V> = [...T, V];

type TuplifyUnion3113<T, L = LastOf3113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3113<TuplifyUnion3113<Exclude<T, L>>, L>;

type DeepPartial3113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3113<T[P]> }
  : T;

type Paths3113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3113<K, Paths3113<T[K], Prev3113[D]>> : never }[keyof T]
  : never;

type Prev3113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3113 {
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

type ConfigPaths3113 = Paths3113<NestedConfig3113>;

interface HeavyProps3113 {
  config: DeepPartial3113<NestedConfig3113>;
  path?: ConfigPaths3113;
}

const HeavyComponent3113 = memo(function HeavyComponent3113({ config }: HeavyProps3113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3113.displayName = 'HeavyComponent3113';
export default HeavyComponent3113;
