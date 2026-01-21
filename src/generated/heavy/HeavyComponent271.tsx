'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly271<T> = T extends (infer U)[]
  ? DeepReadonlyArray271<U>
  : T extends object
  ? DeepReadonlyObject271<T>
  : T;

interface DeepReadonlyArray271<T> extends ReadonlyArray<DeepReadonly271<T>> {}

type DeepReadonlyObject271<T> = {
  readonly [P in keyof T]: DeepReadonly271<T[P]>;
};

type UnionToIntersection271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf271<T> = UnionToIntersection271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push271<T extends unknown[], V> = [...T, V];

type TuplifyUnion271<T, L = LastOf271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push271<TuplifyUnion271<Exclude<T, L>>, L>;

type DeepPartial271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial271<T[P]> }
  : T;

type Paths271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join271<K, Paths271<T[K], Prev271[D]>> : never }[keyof T]
  : never;

type Prev271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig271 {
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

type ConfigPaths271 = Paths271<NestedConfig271>;

interface HeavyProps271 {
  config: DeepPartial271<NestedConfig271>;
  path?: ConfigPaths271;
}

const HeavyComponent271 = memo(function HeavyComponent271({ config }: HeavyProps271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent271.displayName = 'HeavyComponent271';
export default HeavyComponent271;
