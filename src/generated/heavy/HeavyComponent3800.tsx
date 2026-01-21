'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3800<T> = T extends (infer U)[]
  ? DeepReadonlyArray3800<U>
  : T extends object
  ? DeepReadonlyObject3800<T>
  : T;

interface DeepReadonlyArray3800<T> extends ReadonlyArray<DeepReadonly3800<T>> {}

type DeepReadonlyObject3800<T> = {
  readonly [P in keyof T]: DeepReadonly3800<T[P]>;
};

type UnionToIntersection3800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3800<T> = UnionToIntersection3800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3800<T extends unknown[], V> = [...T, V];

type TuplifyUnion3800<T, L = LastOf3800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3800<TuplifyUnion3800<Exclude<T, L>>, L>;

type DeepPartial3800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3800<T[P]> }
  : T;

type Paths3800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3800<K, Paths3800<T[K], Prev3800[D]>> : never }[keyof T]
  : never;

type Prev3800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3800 {
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

type ConfigPaths3800 = Paths3800<NestedConfig3800>;

interface HeavyProps3800 {
  config: DeepPartial3800<NestedConfig3800>;
  path?: ConfigPaths3800;
}

const HeavyComponent3800 = memo(function HeavyComponent3800({ config }: HeavyProps3800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3800.displayName = 'HeavyComponent3800';
export default HeavyComponent3800;
