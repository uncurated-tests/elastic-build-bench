'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3714<T> = T extends (infer U)[]
  ? DeepReadonlyArray3714<U>
  : T extends object
  ? DeepReadonlyObject3714<T>
  : T;

interface DeepReadonlyArray3714<T> extends ReadonlyArray<DeepReadonly3714<T>> {}

type DeepReadonlyObject3714<T> = {
  readonly [P in keyof T]: DeepReadonly3714<T[P]>;
};

type UnionToIntersection3714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3714<T> = UnionToIntersection3714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3714<T extends unknown[], V> = [...T, V];

type TuplifyUnion3714<T, L = LastOf3714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3714<TuplifyUnion3714<Exclude<T, L>>, L>;

type DeepPartial3714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3714<T[P]> }
  : T;

type Paths3714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3714<K, Paths3714<T[K], Prev3714[D]>> : never }[keyof T]
  : never;

type Prev3714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3714 {
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

type ConfigPaths3714 = Paths3714<NestedConfig3714>;

interface HeavyProps3714 {
  config: DeepPartial3714<NestedConfig3714>;
  path?: ConfigPaths3714;
}

const HeavyComponent3714 = memo(function HeavyComponent3714({ config }: HeavyProps3714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3714.displayName = 'HeavyComponent3714';
export default HeavyComponent3714;
