'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3712<T> = T extends (infer U)[]
  ? DeepReadonlyArray3712<U>
  : T extends object
  ? DeepReadonlyObject3712<T>
  : T;

interface DeepReadonlyArray3712<T> extends ReadonlyArray<DeepReadonly3712<T>> {}

type DeepReadonlyObject3712<T> = {
  readonly [P in keyof T]: DeepReadonly3712<T[P]>;
};

type UnionToIntersection3712<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3712<T> = UnionToIntersection3712<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3712<T extends unknown[], V> = [...T, V];

type TuplifyUnion3712<T, L = LastOf3712<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3712<TuplifyUnion3712<Exclude<T, L>>, L>;

type DeepPartial3712<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3712<T[P]> }
  : T;

type Paths3712<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3712<K, Paths3712<T[K], Prev3712[D]>> : never }[keyof T]
  : never;

type Prev3712 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3712<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3712 {
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

type ConfigPaths3712 = Paths3712<NestedConfig3712>;

interface HeavyProps3712 {
  config: DeepPartial3712<NestedConfig3712>;
  path?: ConfigPaths3712;
}

const HeavyComponent3712 = memo(function HeavyComponent3712({ config }: HeavyProps3712) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3712) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3712 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3712: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3712.displayName = 'HeavyComponent3712';
export default HeavyComponent3712;
