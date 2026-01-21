'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3920<T> = T extends (infer U)[]
  ? DeepReadonlyArray3920<U>
  : T extends object
  ? DeepReadonlyObject3920<T>
  : T;

interface DeepReadonlyArray3920<T> extends ReadonlyArray<DeepReadonly3920<T>> {}

type DeepReadonlyObject3920<T> = {
  readonly [P in keyof T]: DeepReadonly3920<T[P]>;
};

type UnionToIntersection3920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3920<T> = UnionToIntersection3920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3920<T extends unknown[], V> = [...T, V];

type TuplifyUnion3920<T, L = LastOf3920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3920<TuplifyUnion3920<Exclude<T, L>>, L>;

type DeepPartial3920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3920<T[P]> }
  : T;

type Paths3920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3920<K, Paths3920<T[K], Prev3920[D]>> : never }[keyof T]
  : never;

type Prev3920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3920 {
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

type ConfigPaths3920 = Paths3920<NestedConfig3920>;

interface HeavyProps3920 {
  config: DeepPartial3920<NestedConfig3920>;
  path?: ConfigPaths3920;
}

const HeavyComponent3920 = memo(function HeavyComponent3920({ config }: HeavyProps3920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3920.displayName = 'HeavyComponent3920';
export default HeavyComponent3920;
