'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3126<T> = T extends (infer U)[]
  ? DeepReadonlyArray3126<U>
  : T extends object
  ? DeepReadonlyObject3126<T>
  : T;

interface DeepReadonlyArray3126<T> extends ReadonlyArray<DeepReadonly3126<T>> {}

type DeepReadonlyObject3126<T> = {
  readonly [P in keyof T]: DeepReadonly3126<T[P]>;
};

type UnionToIntersection3126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3126<T> = UnionToIntersection3126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3126<T extends unknown[], V> = [...T, V];

type TuplifyUnion3126<T, L = LastOf3126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3126<TuplifyUnion3126<Exclude<T, L>>, L>;

type DeepPartial3126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3126<T[P]> }
  : T;

type Paths3126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3126<K, Paths3126<T[K], Prev3126[D]>> : never }[keyof T]
  : never;

type Prev3126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3126 {
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

type ConfigPaths3126 = Paths3126<NestedConfig3126>;

interface HeavyProps3126 {
  config: DeepPartial3126<NestedConfig3126>;
  path?: ConfigPaths3126;
}

const HeavyComponent3126 = memo(function HeavyComponent3126({ config }: HeavyProps3126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3126.displayName = 'HeavyComponent3126';
export default HeavyComponent3126;
