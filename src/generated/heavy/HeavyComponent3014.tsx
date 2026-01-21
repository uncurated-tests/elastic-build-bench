'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3014<T> = T extends (infer U)[]
  ? DeepReadonlyArray3014<U>
  : T extends object
  ? DeepReadonlyObject3014<T>
  : T;

interface DeepReadonlyArray3014<T> extends ReadonlyArray<DeepReadonly3014<T>> {}

type DeepReadonlyObject3014<T> = {
  readonly [P in keyof T]: DeepReadonly3014<T[P]>;
};

type UnionToIntersection3014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3014<T> = UnionToIntersection3014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3014<T extends unknown[], V> = [...T, V];

type TuplifyUnion3014<T, L = LastOf3014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3014<TuplifyUnion3014<Exclude<T, L>>, L>;

type DeepPartial3014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3014<T[P]> }
  : T;

type Paths3014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3014<K, Paths3014<T[K], Prev3014[D]>> : never }[keyof T]
  : never;

type Prev3014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3014 {
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

type ConfigPaths3014 = Paths3014<NestedConfig3014>;

interface HeavyProps3014 {
  config: DeepPartial3014<NestedConfig3014>;
  path?: ConfigPaths3014;
}

const HeavyComponent3014 = memo(function HeavyComponent3014({ config }: HeavyProps3014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3014.displayName = 'HeavyComponent3014';
export default HeavyComponent3014;
