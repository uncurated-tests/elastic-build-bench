'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3413<T> = T extends (infer U)[]
  ? DeepReadonlyArray3413<U>
  : T extends object
  ? DeepReadonlyObject3413<T>
  : T;

interface DeepReadonlyArray3413<T> extends ReadonlyArray<DeepReadonly3413<T>> {}

type DeepReadonlyObject3413<T> = {
  readonly [P in keyof T]: DeepReadonly3413<T[P]>;
};

type UnionToIntersection3413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3413<T> = UnionToIntersection3413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3413<T extends unknown[], V> = [...T, V];

type TuplifyUnion3413<T, L = LastOf3413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3413<TuplifyUnion3413<Exclude<T, L>>, L>;

type DeepPartial3413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3413<T[P]> }
  : T;

type Paths3413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3413<K, Paths3413<T[K], Prev3413[D]>> : never }[keyof T]
  : never;

type Prev3413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3413 {
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

type ConfigPaths3413 = Paths3413<NestedConfig3413>;

interface HeavyProps3413 {
  config: DeepPartial3413<NestedConfig3413>;
  path?: ConfigPaths3413;
}

const HeavyComponent3413 = memo(function HeavyComponent3413({ config }: HeavyProps3413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3413.displayName = 'HeavyComponent3413';
export default HeavyComponent3413;
