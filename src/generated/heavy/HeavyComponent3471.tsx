'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3471<T> = T extends (infer U)[]
  ? DeepReadonlyArray3471<U>
  : T extends object
  ? DeepReadonlyObject3471<T>
  : T;

interface DeepReadonlyArray3471<T> extends ReadonlyArray<DeepReadonly3471<T>> {}

type DeepReadonlyObject3471<T> = {
  readonly [P in keyof T]: DeepReadonly3471<T[P]>;
};

type UnionToIntersection3471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3471<T> = UnionToIntersection3471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3471<T extends unknown[], V> = [...T, V];

type TuplifyUnion3471<T, L = LastOf3471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3471<TuplifyUnion3471<Exclude<T, L>>, L>;

type DeepPartial3471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3471<T[P]> }
  : T;

type Paths3471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3471<K, Paths3471<T[K], Prev3471[D]>> : never }[keyof T]
  : never;

type Prev3471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3471 {
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

type ConfigPaths3471 = Paths3471<NestedConfig3471>;

interface HeavyProps3471 {
  config: DeepPartial3471<NestedConfig3471>;
  path?: ConfigPaths3471;
}

const HeavyComponent3471 = memo(function HeavyComponent3471({ config }: HeavyProps3471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3471.displayName = 'HeavyComponent3471';
export default HeavyComponent3471;
