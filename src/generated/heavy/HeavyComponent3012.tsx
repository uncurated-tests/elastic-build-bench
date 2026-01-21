'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3012<T> = T extends (infer U)[]
  ? DeepReadonlyArray3012<U>
  : T extends object
  ? DeepReadonlyObject3012<T>
  : T;

interface DeepReadonlyArray3012<T> extends ReadonlyArray<DeepReadonly3012<T>> {}

type DeepReadonlyObject3012<T> = {
  readonly [P in keyof T]: DeepReadonly3012<T[P]>;
};

type UnionToIntersection3012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3012<T> = UnionToIntersection3012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3012<T extends unknown[], V> = [...T, V];

type TuplifyUnion3012<T, L = LastOf3012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3012<TuplifyUnion3012<Exclude<T, L>>, L>;

type DeepPartial3012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3012<T[P]> }
  : T;

type Paths3012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3012<K, Paths3012<T[K], Prev3012[D]>> : never }[keyof T]
  : never;

type Prev3012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3012 {
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

type ConfigPaths3012 = Paths3012<NestedConfig3012>;

interface HeavyProps3012 {
  config: DeepPartial3012<NestedConfig3012>;
  path?: ConfigPaths3012;
}

const HeavyComponent3012 = memo(function HeavyComponent3012({ config }: HeavyProps3012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3012.displayName = 'HeavyComponent3012';
export default HeavyComponent3012;
