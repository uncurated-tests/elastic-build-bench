'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly148<T> = T extends (infer U)[]
  ? DeepReadonlyArray148<U>
  : T extends object
  ? DeepReadonlyObject148<T>
  : T;

interface DeepReadonlyArray148<T> extends ReadonlyArray<DeepReadonly148<T>> {}

type DeepReadonlyObject148<T> = {
  readonly [P in keyof T]: DeepReadonly148<T[P]>;
};

type UnionToIntersection148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf148<T> = UnionToIntersection148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push148<T extends unknown[], V> = [...T, V];

type TuplifyUnion148<T, L = LastOf148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push148<TuplifyUnion148<Exclude<T, L>>, L>;

type DeepPartial148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial148<T[P]> }
  : T;

type Paths148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join148<K, Paths148<T[K], Prev148[D]>> : never }[keyof T]
  : never;

type Prev148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig148 {
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

type ConfigPaths148 = Paths148<NestedConfig148>;

interface HeavyProps148 {
  config: DeepPartial148<NestedConfig148>;
  path?: ConfigPaths148;
}

const HeavyComponent148 = memo(function HeavyComponent148({ config }: HeavyProps148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent148.displayName = 'HeavyComponent148';
export default HeavyComponent148;
