'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3046<T> = T extends (infer U)[]
  ? DeepReadonlyArray3046<U>
  : T extends object
  ? DeepReadonlyObject3046<T>
  : T;

interface DeepReadonlyArray3046<T> extends ReadonlyArray<DeepReadonly3046<T>> {}

type DeepReadonlyObject3046<T> = {
  readonly [P in keyof T]: DeepReadonly3046<T[P]>;
};

type UnionToIntersection3046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3046<T> = UnionToIntersection3046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3046<T extends unknown[], V> = [...T, V];

type TuplifyUnion3046<T, L = LastOf3046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3046<TuplifyUnion3046<Exclude<T, L>>, L>;

type DeepPartial3046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3046<T[P]> }
  : T;

type Paths3046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3046<K, Paths3046<T[K], Prev3046[D]>> : never }[keyof T]
  : never;

type Prev3046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3046 {
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

type ConfigPaths3046 = Paths3046<NestedConfig3046>;

interface HeavyProps3046 {
  config: DeepPartial3046<NestedConfig3046>;
  path?: ConfigPaths3046;
}

const HeavyComponent3046 = memo(function HeavyComponent3046({ config }: HeavyProps3046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3046.displayName = 'HeavyComponent3046';
export default HeavyComponent3046;
