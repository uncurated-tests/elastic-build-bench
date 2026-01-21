'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3253<T> = T extends (infer U)[]
  ? DeepReadonlyArray3253<U>
  : T extends object
  ? DeepReadonlyObject3253<T>
  : T;

interface DeepReadonlyArray3253<T> extends ReadonlyArray<DeepReadonly3253<T>> {}

type DeepReadonlyObject3253<T> = {
  readonly [P in keyof T]: DeepReadonly3253<T[P]>;
};

type UnionToIntersection3253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3253<T> = UnionToIntersection3253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3253<T extends unknown[], V> = [...T, V];

type TuplifyUnion3253<T, L = LastOf3253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3253<TuplifyUnion3253<Exclude<T, L>>, L>;

type DeepPartial3253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3253<T[P]> }
  : T;

type Paths3253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3253<K, Paths3253<T[K], Prev3253[D]>> : never }[keyof T]
  : never;

type Prev3253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3253 {
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

type ConfigPaths3253 = Paths3253<NestedConfig3253>;

interface HeavyProps3253 {
  config: DeepPartial3253<NestedConfig3253>;
  path?: ConfigPaths3253;
}

const HeavyComponent3253 = memo(function HeavyComponent3253({ config }: HeavyProps3253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3253.displayName = 'HeavyComponent3253';
export default HeavyComponent3253;
