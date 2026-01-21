'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3702<T> = T extends (infer U)[]
  ? DeepReadonlyArray3702<U>
  : T extends object
  ? DeepReadonlyObject3702<T>
  : T;

interface DeepReadonlyArray3702<T> extends ReadonlyArray<DeepReadonly3702<T>> {}

type DeepReadonlyObject3702<T> = {
  readonly [P in keyof T]: DeepReadonly3702<T[P]>;
};

type UnionToIntersection3702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3702<T> = UnionToIntersection3702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3702<T extends unknown[], V> = [...T, V];

type TuplifyUnion3702<T, L = LastOf3702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3702<TuplifyUnion3702<Exclude<T, L>>, L>;

type DeepPartial3702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3702<T[P]> }
  : T;

type Paths3702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3702<K, Paths3702<T[K], Prev3702[D]>> : never }[keyof T]
  : never;

type Prev3702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3702 {
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

type ConfigPaths3702 = Paths3702<NestedConfig3702>;

interface HeavyProps3702 {
  config: DeepPartial3702<NestedConfig3702>;
  path?: ConfigPaths3702;
}

const HeavyComponent3702 = memo(function HeavyComponent3702({ config }: HeavyProps3702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3702.displayName = 'HeavyComponent3702';
export default HeavyComponent3702;
