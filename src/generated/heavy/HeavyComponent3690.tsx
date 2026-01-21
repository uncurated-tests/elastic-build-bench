'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3690<T> = T extends (infer U)[]
  ? DeepReadonlyArray3690<U>
  : T extends object
  ? DeepReadonlyObject3690<T>
  : T;

interface DeepReadonlyArray3690<T> extends ReadonlyArray<DeepReadonly3690<T>> {}

type DeepReadonlyObject3690<T> = {
  readonly [P in keyof T]: DeepReadonly3690<T[P]>;
};

type UnionToIntersection3690<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3690<T> = UnionToIntersection3690<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3690<T extends unknown[], V> = [...T, V];

type TuplifyUnion3690<T, L = LastOf3690<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3690<TuplifyUnion3690<Exclude<T, L>>, L>;

type DeepPartial3690<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3690<T[P]> }
  : T;

type Paths3690<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3690<K, Paths3690<T[K], Prev3690[D]>> : never }[keyof T]
  : never;

type Prev3690 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3690<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3690 {
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

type ConfigPaths3690 = Paths3690<NestedConfig3690>;

interface HeavyProps3690 {
  config: DeepPartial3690<NestedConfig3690>;
  path?: ConfigPaths3690;
}

const HeavyComponent3690 = memo(function HeavyComponent3690({ config }: HeavyProps3690) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3690) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3690 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3690: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3690.displayName = 'HeavyComponent3690';
export default HeavyComponent3690;
