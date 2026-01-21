'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3755<T> = T extends (infer U)[]
  ? DeepReadonlyArray3755<U>
  : T extends object
  ? DeepReadonlyObject3755<T>
  : T;

interface DeepReadonlyArray3755<T> extends ReadonlyArray<DeepReadonly3755<T>> {}

type DeepReadonlyObject3755<T> = {
  readonly [P in keyof T]: DeepReadonly3755<T[P]>;
};

type UnionToIntersection3755<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3755<T> = UnionToIntersection3755<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3755<T extends unknown[], V> = [...T, V];

type TuplifyUnion3755<T, L = LastOf3755<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3755<TuplifyUnion3755<Exclude<T, L>>, L>;

type DeepPartial3755<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3755<T[P]> }
  : T;

type Paths3755<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3755<K, Paths3755<T[K], Prev3755[D]>> : never }[keyof T]
  : never;

type Prev3755 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3755<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3755 {
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

type ConfigPaths3755 = Paths3755<NestedConfig3755>;

interface HeavyProps3755 {
  config: DeepPartial3755<NestedConfig3755>;
  path?: ConfigPaths3755;
}

const HeavyComponent3755 = memo(function HeavyComponent3755({ config }: HeavyProps3755) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3755) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3755 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3755: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3755.displayName = 'HeavyComponent3755';
export default HeavyComponent3755;
