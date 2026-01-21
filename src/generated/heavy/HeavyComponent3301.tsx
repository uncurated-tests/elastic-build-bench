'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3301<T> = T extends (infer U)[]
  ? DeepReadonlyArray3301<U>
  : T extends object
  ? DeepReadonlyObject3301<T>
  : T;

interface DeepReadonlyArray3301<T> extends ReadonlyArray<DeepReadonly3301<T>> {}

type DeepReadonlyObject3301<T> = {
  readonly [P in keyof T]: DeepReadonly3301<T[P]>;
};

type UnionToIntersection3301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3301<T> = UnionToIntersection3301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3301<T extends unknown[], V> = [...T, V];

type TuplifyUnion3301<T, L = LastOf3301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3301<TuplifyUnion3301<Exclude<T, L>>, L>;

type DeepPartial3301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3301<T[P]> }
  : T;

type Paths3301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3301<K, Paths3301<T[K], Prev3301[D]>> : never }[keyof T]
  : never;

type Prev3301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3301 {
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

type ConfigPaths3301 = Paths3301<NestedConfig3301>;

interface HeavyProps3301 {
  config: DeepPartial3301<NestedConfig3301>;
  path?: ConfigPaths3301;
}

const HeavyComponent3301 = memo(function HeavyComponent3301({ config }: HeavyProps3301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3301.displayName = 'HeavyComponent3301';
export default HeavyComponent3301;
