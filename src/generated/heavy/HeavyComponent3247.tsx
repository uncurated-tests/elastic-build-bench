'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3247<T> = T extends (infer U)[]
  ? DeepReadonlyArray3247<U>
  : T extends object
  ? DeepReadonlyObject3247<T>
  : T;

interface DeepReadonlyArray3247<T> extends ReadonlyArray<DeepReadonly3247<T>> {}

type DeepReadonlyObject3247<T> = {
  readonly [P in keyof T]: DeepReadonly3247<T[P]>;
};

type UnionToIntersection3247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3247<T> = UnionToIntersection3247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3247<T extends unknown[], V> = [...T, V];

type TuplifyUnion3247<T, L = LastOf3247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3247<TuplifyUnion3247<Exclude<T, L>>, L>;

type DeepPartial3247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3247<T[P]> }
  : T;

type Paths3247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3247<K, Paths3247<T[K], Prev3247[D]>> : never }[keyof T]
  : never;

type Prev3247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3247 {
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

type ConfigPaths3247 = Paths3247<NestedConfig3247>;

interface HeavyProps3247 {
  config: DeepPartial3247<NestedConfig3247>;
  path?: ConfigPaths3247;
}

const HeavyComponent3247 = memo(function HeavyComponent3247({ config }: HeavyProps3247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3247.displayName = 'HeavyComponent3247';
export default HeavyComponent3247;
