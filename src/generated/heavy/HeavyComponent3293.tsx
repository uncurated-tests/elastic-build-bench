'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3293<T> = T extends (infer U)[]
  ? DeepReadonlyArray3293<U>
  : T extends object
  ? DeepReadonlyObject3293<T>
  : T;

interface DeepReadonlyArray3293<T> extends ReadonlyArray<DeepReadonly3293<T>> {}

type DeepReadonlyObject3293<T> = {
  readonly [P in keyof T]: DeepReadonly3293<T[P]>;
};

type UnionToIntersection3293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3293<T> = UnionToIntersection3293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3293<T extends unknown[], V> = [...T, V];

type TuplifyUnion3293<T, L = LastOf3293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3293<TuplifyUnion3293<Exclude<T, L>>, L>;

type DeepPartial3293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3293<T[P]> }
  : T;

type Paths3293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3293<K, Paths3293<T[K], Prev3293[D]>> : never }[keyof T]
  : never;

type Prev3293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3293 {
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

type ConfigPaths3293 = Paths3293<NestedConfig3293>;

interface HeavyProps3293 {
  config: DeepPartial3293<NestedConfig3293>;
  path?: ConfigPaths3293;
}

const HeavyComponent3293 = memo(function HeavyComponent3293({ config }: HeavyProps3293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3293.displayName = 'HeavyComponent3293';
export default HeavyComponent3293;
