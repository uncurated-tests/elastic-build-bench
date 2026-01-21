'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3638<T> = T extends (infer U)[]
  ? DeepReadonlyArray3638<U>
  : T extends object
  ? DeepReadonlyObject3638<T>
  : T;

interface DeepReadonlyArray3638<T> extends ReadonlyArray<DeepReadonly3638<T>> {}

type DeepReadonlyObject3638<T> = {
  readonly [P in keyof T]: DeepReadonly3638<T[P]>;
};

type UnionToIntersection3638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3638<T> = UnionToIntersection3638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3638<T extends unknown[], V> = [...T, V];

type TuplifyUnion3638<T, L = LastOf3638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3638<TuplifyUnion3638<Exclude<T, L>>, L>;

type DeepPartial3638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3638<T[P]> }
  : T;

type Paths3638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3638<K, Paths3638<T[K], Prev3638[D]>> : never }[keyof T]
  : never;

type Prev3638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3638 {
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

type ConfigPaths3638 = Paths3638<NestedConfig3638>;

interface HeavyProps3638 {
  config: DeepPartial3638<NestedConfig3638>;
  path?: ConfigPaths3638;
}

const HeavyComponent3638 = memo(function HeavyComponent3638({ config }: HeavyProps3638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3638.displayName = 'HeavyComponent3638';
export default HeavyComponent3638;
