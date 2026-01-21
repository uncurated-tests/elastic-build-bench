'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3363<T> = T extends (infer U)[]
  ? DeepReadonlyArray3363<U>
  : T extends object
  ? DeepReadonlyObject3363<T>
  : T;

interface DeepReadonlyArray3363<T> extends ReadonlyArray<DeepReadonly3363<T>> {}

type DeepReadonlyObject3363<T> = {
  readonly [P in keyof T]: DeepReadonly3363<T[P]>;
};

type UnionToIntersection3363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3363<T> = UnionToIntersection3363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3363<T extends unknown[], V> = [...T, V];

type TuplifyUnion3363<T, L = LastOf3363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3363<TuplifyUnion3363<Exclude<T, L>>, L>;

type DeepPartial3363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3363<T[P]> }
  : T;

type Paths3363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3363<K, Paths3363<T[K], Prev3363[D]>> : never }[keyof T]
  : never;

type Prev3363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3363 {
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

type ConfigPaths3363 = Paths3363<NestedConfig3363>;

interface HeavyProps3363 {
  config: DeepPartial3363<NestedConfig3363>;
  path?: ConfigPaths3363;
}

const HeavyComponent3363 = memo(function HeavyComponent3363({ config }: HeavyProps3363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3363.displayName = 'HeavyComponent3363';
export default HeavyComponent3363;
