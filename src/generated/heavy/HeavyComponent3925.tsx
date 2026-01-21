'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3925<T> = T extends (infer U)[]
  ? DeepReadonlyArray3925<U>
  : T extends object
  ? DeepReadonlyObject3925<T>
  : T;

interface DeepReadonlyArray3925<T> extends ReadonlyArray<DeepReadonly3925<T>> {}

type DeepReadonlyObject3925<T> = {
  readonly [P in keyof T]: DeepReadonly3925<T[P]>;
};

type UnionToIntersection3925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3925<T> = UnionToIntersection3925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3925<T extends unknown[], V> = [...T, V];

type TuplifyUnion3925<T, L = LastOf3925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3925<TuplifyUnion3925<Exclude<T, L>>, L>;

type DeepPartial3925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3925<T[P]> }
  : T;

type Paths3925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3925<K, Paths3925<T[K], Prev3925[D]>> : never }[keyof T]
  : never;

type Prev3925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3925 {
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

type ConfigPaths3925 = Paths3925<NestedConfig3925>;

interface HeavyProps3925 {
  config: DeepPartial3925<NestedConfig3925>;
  path?: ConfigPaths3925;
}

const HeavyComponent3925 = memo(function HeavyComponent3925({ config }: HeavyProps3925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3925.displayName = 'HeavyComponent3925';
export default HeavyComponent3925;
