'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3652<T> = T extends (infer U)[]
  ? DeepReadonlyArray3652<U>
  : T extends object
  ? DeepReadonlyObject3652<T>
  : T;

interface DeepReadonlyArray3652<T> extends ReadonlyArray<DeepReadonly3652<T>> {}

type DeepReadonlyObject3652<T> = {
  readonly [P in keyof T]: DeepReadonly3652<T[P]>;
};

type UnionToIntersection3652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3652<T> = UnionToIntersection3652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3652<T extends unknown[], V> = [...T, V];

type TuplifyUnion3652<T, L = LastOf3652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3652<TuplifyUnion3652<Exclude<T, L>>, L>;

type DeepPartial3652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3652<T[P]> }
  : T;

type Paths3652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3652<K, Paths3652<T[K], Prev3652[D]>> : never }[keyof T]
  : never;

type Prev3652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3652 {
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

type ConfigPaths3652 = Paths3652<NestedConfig3652>;

interface HeavyProps3652 {
  config: DeepPartial3652<NestedConfig3652>;
  path?: ConfigPaths3652;
}

const HeavyComponent3652 = memo(function HeavyComponent3652({ config }: HeavyProps3652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3652.displayName = 'HeavyComponent3652';
export default HeavyComponent3652;
