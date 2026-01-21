'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3058<T> = T extends (infer U)[]
  ? DeepReadonlyArray3058<U>
  : T extends object
  ? DeepReadonlyObject3058<T>
  : T;

interface DeepReadonlyArray3058<T> extends ReadonlyArray<DeepReadonly3058<T>> {}

type DeepReadonlyObject3058<T> = {
  readonly [P in keyof T]: DeepReadonly3058<T[P]>;
};

type UnionToIntersection3058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3058<T> = UnionToIntersection3058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3058<T extends unknown[], V> = [...T, V];

type TuplifyUnion3058<T, L = LastOf3058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3058<TuplifyUnion3058<Exclude<T, L>>, L>;

type DeepPartial3058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3058<T[P]> }
  : T;

type Paths3058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3058<K, Paths3058<T[K], Prev3058[D]>> : never }[keyof T]
  : never;

type Prev3058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3058 {
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

type ConfigPaths3058 = Paths3058<NestedConfig3058>;

interface HeavyProps3058 {
  config: DeepPartial3058<NestedConfig3058>;
  path?: ConfigPaths3058;
}

const HeavyComponent3058 = memo(function HeavyComponent3058({ config }: HeavyProps3058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3058.displayName = 'HeavyComponent3058';
export default HeavyComponent3058;
