'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3600<T> = T extends (infer U)[]
  ? DeepReadonlyArray3600<U>
  : T extends object
  ? DeepReadonlyObject3600<T>
  : T;

interface DeepReadonlyArray3600<T> extends ReadonlyArray<DeepReadonly3600<T>> {}

type DeepReadonlyObject3600<T> = {
  readonly [P in keyof T]: DeepReadonly3600<T[P]>;
};

type UnionToIntersection3600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3600<T> = UnionToIntersection3600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3600<T extends unknown[], V> = [...T, V];

type TuplifyUnion3600<T, L = LastOf3600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3600<TuplifyUnion3600<Exclude<T, L>>, L>;

type DeepPartial3600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3600<T[P]> }
  : T;

type Paths3600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3600<K, Paths3600<T[K], Prev3600[D]>> : never }[keyof T]
  : never;

type Prev3600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3600 {
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

type ConfigPaths3600 = Paths3600<NestedConfig3600>;

interface HeavyProps3600 {
  config: DeepPartial3600<NestedConfig3600>;
  path?: ConfigPaths3600;
}

const HeavyComponent3600 = memo(function HeavyComponent3600({ config }: HeavyProps3600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3600.displayName = 'HeavyComponent3600';
export default HeavyComponent3600;
