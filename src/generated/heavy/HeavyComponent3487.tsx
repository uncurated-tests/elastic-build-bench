'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3487<T> = T extends (infer U)[]
  ? DeepReadonlyArray3487<U>
  : T extends object
  ? DeepReadonlyObject3487<T>
  : T;

interface DeepReadonlyArray3487<T> extends ReadonlyArray<DeepReadonly3487<T>> {}

type DeepReadonlyObject3487<T> = {
  readonly [P in keyof T]: DeepReadonly3487<T[P]>;
};

type UnionToIntersection3487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3487<T> = UnionToIntersection3487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3487<T extends unknown[], V> = [...T, V];

type TuplifyUnion3487<T, L = LastOf3487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3487<TuplifyUnion3487<Exclude<T, L>>, L>;

type DeepPartial3487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3487<T[P]> }
  : T;

type Paths3487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3487<K, Paths3487<T[K], Prev3487[D]>> : never }[keyof T]
  : never;

type Prev3487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3487 {
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

type ConfigPaths3487 = Paths3487<NestedConfig3487>;

interface HeavyProps3487 {
  config: DeepPartial3487<NestedConfig3487>;
  path?: ConfigPaths3487;
}

const HeavyComponent3487 = memo(function HeavyComponent3487({ config }: HeavyProps3487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3487.displayName = 'HeavyComponent3487';
export default HeavyComponent3487;
