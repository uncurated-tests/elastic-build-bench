'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3613<T> = T extends (infer U)[]
  ? DeepReadonlyArray3613<U>
  : T extends object
  ? DeepReadonlyObject3613<T>
  : T;

interface DeepReadonlyArray3613<T> extends ReadonlyArray<DeepReadonly3613<T>> {}

type DeepReadonlyObject3613<T> = {
  readonly [P in keyof T]: DeepReadonly3613<T[P]>;
};

type UnionToIntersection3613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3613<T> = UnionToIntersection3613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3613<T extends unknown[], V> = [...T, V];

type TuplifyUnion3613<T, L = LastOf3613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3613<TuplifyUnion3613<Exclude<T, L>>, L>;

type DeepPartial3613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3613<T[P]> }
  : T;

type Paths3613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3613<K, Paths3613<T[K], Prev3613[D]>> : never }[keyof T]
  : never;

type Prev3613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3613 {
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

type ConfigPaths3613 = Paths3613<NestedConfig3613>;

interface HeavyProps3613 {
  config: DeepPartial3613<NestedConfig3613>;
  path?: ConfigPaths3613;
}

const HeavyComponent3613 = memo(function HeavyComponent3613({ config }: HeavyProps3613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3613.displayName = 'HeavyComponent3613';
export default HeavyComponent3613;
