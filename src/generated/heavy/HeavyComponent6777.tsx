'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6777<T> = T extends (infer U)[]
  ? DeepReadonlyArray6777<U>
  : T extends object
  ? DeepReadonlyObject6777<T>
  : T;

interface DeepReadonlyArray6777<T> extends ReadonlyArray<DeepReadonly6777<T>> {}

type DeepReadonlyObject6777<T> = {
  readonly [P in keyof T]: DeepReadonly6777<T[P]>;
};

type UnionToIntersection6777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6777<T> = UnionToIntersection6777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6777<T extends unknown[], V> = [...T, V];

type TuplifyUnion6777<T, L = LastOf6777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6777<TuplifyUnion6777<Exclude<T, L>>, L>;

type DeepPartial6777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6777<T[P]> }
  : T;

type Paths6777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6777<K, Paths6777<T[K], Prev6777[D]>> : never }[keyof T]
  : never;

type Prev6777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6777 {
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

type ConfigPaths6777 = Paths6777<NestedConfig6777>;

interface HeavyProps6777 {
  config: DeepPartial6777<NestedConfig6777>;
  path?: ConfigPaths6777;
}

const HeavyComponent6777 = memo(function HeavyComponent6777({ config }: HeavyProps6777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6777.displayName = 'HeavyComponent6777';
export default HeavyComponent6777;
