'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3737<T> = T extends (infer U)[]
  ? DeepReadonlyArray3737<U>
  : T extends object
  ? DeepReadonlyObject3737<T>
  : T;

interface DeepReadonlyArray3737<T> extends ReadonlyArray<DeepReadonly3737<T>> {}

type DeepReadonlyObject3737<T> = {
  readonly [P in keyof T]: DeepReadonly3737<T[P]>;
};

type UnionToIntersection3737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3737<T> = UnionToIntersection3737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3737<T extends unknown[], V> = [...T, V];

type TuplifyUnion3737<T, L = LastOf3737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3737<TuplifyUnion3737<Exclude<T, L>>, L>;

type DeepPartial3737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3737<T[P]> }
  : T;

type Paths3737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3737<K, Paths3737<T[K], Prev3737[D]>> : never }[keyof T]
  : never;

type Prev3737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3737 {
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

type ConfigPaths3737 = Paths3737<NestedConfig3737>;

interface HeavyProps3737 {
  config: DeepPartial3737<NestedConfig3737>;
  path?: ConfigPaths3737;
}

const HeavyComponent3737 = memo(function HeavyComponent3737({ config }: HeavyProps3737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3737.displayName = 'HeavyComponent3737';
export default HeavyComponent3737;
