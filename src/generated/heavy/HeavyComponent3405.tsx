'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3405<T> = T extends (infer U)[]
  ? DeepReadonlyArray3405<U>
  : T extends object
  ? DeepReadonlyObject3405<T>
  : T;

interface DeepReadonlyArray3405<T> extends ReadonlyArray<DeepReadonly3405<T>> {}

type DeepReadonlyObject3405<T> = {
  readonly [P in keyof T]: DeepReadonly3405<T[P]>;
};

type UnionToIntersection3405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3405<T> = UnionToIntersection3405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3405<T extends unknown[], V> = [...T, V];

type TuplifyUnion3405<T, L = LastOf3405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3405<TuplifyUnion3405<Exclude<T, L>>, L>;

type DeepPartial3405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3405<T[P]> }
  : T;

type Paths3405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3405<K, Paths3405<T[K], Prev3405[D]>> : never }[keyof T]
  : never;

type Prev3405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3405 {
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

type ConfigPaths3405 = Paths3405<NestedConfig3405>;

interface HeavyProps3405 {
  config: DeepPartial3405<NestedConfig3405>;
  path?: ConfigPaths3405;
}

const HeavyComponent3405 = memo(function HeavyComponent3405({ config }: HeavyProps3405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3405.displayName = 'HeavyComponent3405';
export default HeavyComponent3405;
