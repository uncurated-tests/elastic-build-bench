'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3642<T> = T extends (infer U)[]
  ? DeepReadonlyArray3642<U>
  : T extends object
  ? DeepReadonlyObject3642<T>
  : T;

interface DeepReadonlyArray3642<T> extends ReadonlyArray<DeepReadonly3642<T>> {}

type DeepReadonlyObject3642<T> = {
  readonly [P in keyof T]: DeepReadonly3642<T[P]>;
};

type UnionToIntersection3642<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3642<T> = UnionToIntersection3642<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3642<T extends unknown[], V> = [...T, V];

type TuplifyUnion3642<T, L = LastOf3642<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3642<TuplifyUnion3642<Exclude<T, L>>, L>;

type DeepPartial3642<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3642<T[P]> }
  : T;

type Paths3642<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3642<K, Paths3642<T[K], Prev3642[D]>> : never }[keyof T]
  : never;

type Prev3642 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3642<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3642 {
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

type ConfigPaths3642 = Paths3642<NestedConfig3642>;

interface HeavyProps3642 {
  config: DeepPartial3642<NestedConfig3642>;
  path?: ConfigPaths3642;
}

const HeavyComponent3642 = memo(function HeavyComponent3642({ config }: HeavyProps3642) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3642) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3642 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3642: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3642.displayName = 'HeavyComponent3642';
export default HeavyComponent3642;
