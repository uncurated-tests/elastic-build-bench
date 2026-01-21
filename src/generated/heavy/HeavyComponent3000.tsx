'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3000<T> = T extends (infer U)[]
  ? DeepReadonlyArray3000<U>
  : T extends object
  ? DeepReadonlyObject3000<T>
  : T;

interface DeepReadonlyArray3000<T> extends ReadonlyArray<DeepReadonly3000<T>> {}

type DeepReadonlyObject3000<T> = {
  readonly [P in keyof T]: DeepReadonly3000<T[P]>;
};

type UnionToIntersection3000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3000<T> = UnionToIntersection3000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3000<T extends unknown[], V> = [...T, V];

type TuplifyUnion3000<T, L = LastOf3000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3000<TuplifyUnion3000<Exclude<T, L>>, L>;

type DeepPartial3000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3000<T[P]> }
  : T;

type Paths3000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3000<K, Paths3000<T[K], Prev3000[D]>> : never }[keyof T]
  : never;

type Prev3000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3000 {
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

type ConfigPaths3000 = Paths3000<NestedConfig3000>;

interface HeavyProps3000 {
  config: DeepPartial3000<NestedConfig3000>;
  path?: ConfigPaths3000;
}

const HeavyComponent3000 = memo(function HeavyComponent3000({ config }: HeavyProps3000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3000.displayName = 'HeavyComponent3000';
export default HeavyComponent3000;
