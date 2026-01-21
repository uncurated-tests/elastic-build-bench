'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3727<T> = T extends (infer U)[]
  ? DeepReadonlyArray3727<U>
  : T extends object
  ? DeepReadonlyObject3727<T>
  : T;

interface DeepReadonlyArray3727<T> extends ReadonlyArray<DeepReadonly3727<T>> {}

type DeepReadonlyObject3727<T> = {
  readonly [P in keyof T]: DeepReadonly3727<T[P]>;
};

type UnionToIntersection3727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3727<T> = UnionToIntersection3727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3727<T extends unknown[], V> = [...T, V];

type TuplifyUnion3727<T, L = LastOf3727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3727<TuplifyUnion3727<Exclude<T, L>>, L>;

type DeepPartial3727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3727<T[P]> }
  : T;

type Paths3727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3727<K, Paths3727<T[K], Prev3727[D]>> : never }[keyof T]
  : never;

type Prev3727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3727 {
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

type ConfigPaths3727 = Paths3727<NestedConfig3727>;

interface HeavyProps3727 {
  config: DeepPartial3727<NestedConfig3727>;
  path?: ConfigPaths3727;
}

const HeavyComponent3727 = memo(function HeavyComponent3727({ config }: HeavyProps3727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3727.displayName = 'HeavyComponent3727';
export default HeavyComponent3727;
