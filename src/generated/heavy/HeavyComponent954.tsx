'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly954<T> = T extends (infer U)[]
  ? DeepReadonlyArray954<U>
  : T extends object
  ? DeepReadonlyObject954<T>
  : T;

interface DeepReadonlyArray954<T> extends ReadonlyArray<DeepReadonly954<T>> {}

type DeepReadonlyObject954<T> = {
  readonly [P in keyof T]: DeepReadonly954<T[P]>;
};

type UnionToIntersection954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf954<T> = UnionToIntersection954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push954<T extends unknown[], V> = [...T, V];

type TuplifyUnion954<T, L = LastOf954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push954<TuplifyUnion954<Exclude<T, L>>, L>;

type DeepPartial954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial954<T[P]> }
  : T;

type Paths954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join954<K, Paths954<T[K], Prev954[D]>> : never }[keyof T]
  : never;

type Prev954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig954 {
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

type ConfigPaths954 = Paths954<NestedConfig954>;

interface HeavyProps954 {
  config: DeepPartial954<NestedConfig954>;
  path?: ConfigPaths954;
}

const HeavyComponent954 = memo(function HeavyComponent954({ config }: HeavyProps954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent954.displayName = 'HeavyComponent954';
export default HeavyComponent954;
