'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3567<T> = T extends (infer U)[]
  ? DeepReadonlyArray3567<U>
  : T extends object
  ? DeepReadonlyObject3567<T>
  : T;

interface DeepReadonlyArray3567<T> extends ReadonlyArray<DeepReadonly3567<T>> {}

type DeepReadonlyObject3567<T> = {
  readonly [P in keyof T]: DeepReadonly3567<T[P]>;
};

type UnionToIntersection3567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3567<T> = UnionToIntersection3567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3567<T extends unknown[], V> = [...T, V];

type TuplifyUnion3567<T, L = LastOf3567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3567<TuplifyUnion3567<Exclude<T, L>>, L>;

type DeepPartial3567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3567<T[P]> }
  : T;

type Paths3567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3567<K, Paths3567<T[K], Prev3567[D]>> : never }[keyof T]
  : never;

type Prev3567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3567 {
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

type ConfigPaths3567 = Paths3567<NestedConfig3567>;

interface HeavyProps3567 {
  config: DeepPartial3567<NestedConfig3567>;
  path?: ConfigPaths3567;
}

const HeavyComponent3567 = memo(function HeavyComponent3567({ config }: HeavyProps3567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3567.displayName = 'HeavyComponent3567';
export default HeavyComponent3567;
