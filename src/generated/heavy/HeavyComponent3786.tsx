'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3786<T> = T extends (infer U)[]
  ? DeepReadonlyArray3786<U>
  : T extends object
  ? DeepReadonlyObject3786<T>
  : T;

interface DeepReadonlyArray3786<T> extends ReadonlyArray<DeepReadonly3786<T>> {}

type DeepReadonlyObject3786<T> = {
  readonly [P in keyof T]: DeepReadonly3786<T[P]>;
};

type UnionToIntersection3786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3786<T> = UnionToIntersection3786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3786<T extends unknown[], V> = [...T, V];

type TuplifyUnion3786<T, L = LastOf3786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3786<TuplifyUnion3786<Exclude<T, L>>, L>;

type DeepPartial3786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3786<T[P]> }
  : T;

type Paths3786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3786<K, Paths3786<T[K], Prev3786[D]>> : never }[keyof T]
  : never;

type Prev3786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3786 {
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

type ConfigPaths3786 = Paths3786<NestedConfig3786>;

interface HeavyProps3786 {
  config: DeepPartial3786<NestedConfig3786>;
  path?: ConfigPaths3786;
}

const HeavyComponent3786 = memo(function HeavyComponent3786({ config }: HeavyProps3786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3786.displayName = 'HeavyComponent3786';
export default HeavyComponent3786;
