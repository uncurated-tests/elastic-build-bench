'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3593<T> = T extends (infer U)[]
  ? DeepReadonlyArray3593<U>
  : T extends object
  ? DeepReadonlyObject3593<T>
  : T;

interface DeepReadonlyArray3593<T> extends ReadonlyArray<DeepReadonly3593<T>> {}

type DeepReadonlyObject3593<T> = {
  readonly [P in keyof T]: DeepReadonly3593<T[P]>;
};

type UnionToIntersection3593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3593<T> = UnionToIntersection3593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3593<T extends unknown[], V> = [...T, V];

type TuplifyUnion3593<T, L = LastOf3593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3593<TuplifyUnion3593<Exclude<T, L>>, L>;

type DeepPartial3593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3593<T[P]> }
  : T;

type Paths3593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3593<K, Paths3593<T[K], Prev3593[D]>> : never }[keyof T]
  : never;

type Prev3593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3593 {
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

type ConfigPaths3593 = Paths3593<NestedConfig3593>;

interface HeavyProps3593 {
  config: DeepPartial3593<NestedConfig3593>;
  path?: ConfigPaths3593;
}

const HeavyComponent3593 = memo(function HeavyComponent3593({ config }: HeavyProps3593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3593.displayName = 'HeavyComponent3593';
export default HeavyComponent3593;
