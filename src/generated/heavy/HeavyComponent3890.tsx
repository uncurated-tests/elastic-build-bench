'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3890<T> = T extends (infer U)[]
  ? DeepReadonlyArray3890<U>
  : T extends object
  ? DeepReadonlyObject3890<T>
  : T;

interface DeepReadonlyArray3890<T> extends ReadonlyArray<DeepReadonly3890<T>> {}

type DeepReadonlyObject3890<T> = {
  readonly [P in keyof T]: DeepReadonly3890<T[P]>;
};

type UnionToIntersection3890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3890<T> = UnionToIntersection3890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3890<T extends unknown[], V> = [...T, V];

type TuplifyUnion3890<T, L = LastOf3890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3890<TuplifyUnion3890<Exclude<T, L>>, L>;

type DeepPartial3890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3890<T[P]> }
  : T;

type Paths3890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3890<K, Paths3890<T[K], Prev3890[D]>> : never }[keyof T]
  : never;

type Prev3890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3890 {
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

type ConfigPaths3890 = Paths3890<NestedConfig3890>;

interface HeavyProps3890 {
  config: DeepPartial3890<NestedConfig3890>;
  path?: ConfigPaths3890;
}

const HeavyComponent3890 = memo(function HeavyComponent3890({ config }: HeavyProps3890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3890.displayName = 'HeavyComponent3890';
export default HeavyComponent3890;
