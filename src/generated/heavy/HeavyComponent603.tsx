'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly603<T> = T extends (infer U)[]
  ? DeepReadonlyArray603<U>
  : T extends object
  ? DeepReadonlyObject603<T>
  : T;

interface DeepReadonlyArray603<T> extends ReadonlyArray<DeepReadonly603<T>> {}

type DeepReadonlyObject603<T> = {
  readonly [P in keyof T]: DeepReadonly603<T[P]>;
};

type UnionToIntersection603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf603<T> = UnionToIntersection603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push603<T extends unknown[], V> = [...T, V];

type TuplifyUnion603<T, L = LastOf603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push603<TuplifyUnion603<Exclude<T, L>>, L>;

type DeepPartial603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial603<T[P]> }
  : T;

type Paths603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join603<K, Paths603<T[K], Prev603[D]>> : never }[keyof T]
  : never;

type Prev603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig603 {
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

type ConfigPaths603 = Paths603<NestedConfig603>;

interface HeavyProps603 {
  config: DeepPartial603<NestedConfig603>;
  path?: ConfigPaths603;
}

const HeavyComponent603 = memo(function HeavyComponent603({ config }: HeavyProps603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent603.displayName = 'HeavyComponent603';
export default HeavyComponent603;
