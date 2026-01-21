'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3277<T> = T extends (infer U)[]
  ? DeepReadonlyArray3277<U>
  : T extends object
  ? DeepReadonlyObject3277<T>
  : T;

interface DeepReadonlyArray3277<T> extends ReadonlyArray<DeepReadonly3277<T>> {}

type DeepReadonlyObject3277<T> = {
  readonly [P in keyof T]: DeepReadonly3277<T[P]>;
};

type UnionToIntersection3277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3277<T> = UnionToIntersection3277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3277<T extends unknown[], V> = [...T, V];

type TuplifyUnion3277<T, L = LastOf3277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3277<TuplifyUnion3277<Exclude<T, L>>, L>;

type DeepPartial3277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3277<T[P]> }
  : T;

type Paths3277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3277<K, Paths3277<T[K], Prev3277[D]>> : never }[keyof T]
  : never;

type Prev3277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3277 {
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

type ConfigPaths3277 = Paths3277<NestedConfig3277>;

interface HeavyProps3277 {
  config: DeepPartial3277<NestedConfig3277>;
  path?: ConfigPaths3277;
}

const HeavyComponent3277 = memo(function HeavyComponent3277({ config }: HeavyProps3277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3277.displayName = 'HeavyComponent3277';
export default HeavyComponent3277;
