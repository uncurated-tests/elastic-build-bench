'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3598<T> = T extends (infer U)[]
  ? DeepReadonlyArray3598<U>
  : T extends object
  ? DeepReadonlyObject3598<T>
  : T;

interface DeepReadonlyArray3598<T> extends ReadonlyArray<DeepReadonly3598<T>> {}

type DeepReadonlyObject3598<T> = {
  readonly [P in keyof T]: DeepReadonly3598<T[P]>;
};

type UnionToIntersection3598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3598<T> = UnionToIntersection3598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3598<T extends unknown[], V> = [...T, V];

type TuplifyUnion3598<T, L = LastOf3598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3598<TuplifyUnion3598<Exclude<T, L>>, L>;

type DeepPartial3598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3598<T[P]> }
  : T;

type Paths3598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3598<K, Paths3598<T[K], Prev3598[D]>> : never }[keyof T]
  : never;

type Prev3598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3598 {
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

type ConfigPaths3598 = Paths3598<NestedConfig3598>;

interface HeavyProps3598 {
  config: DeepPartial3598<NestedConfig3598>;
  path?: ConfigPaths3598;
}

const HeavyComponent3598 = memo(function HeavyComponent3598({ config }: HeavyProps3598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3598.displayName = 'HeavyComponent3598';
export default HeavyComponent3598;
