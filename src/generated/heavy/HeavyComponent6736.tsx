'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6736<T> = T extends (infer U)[]
  ? DeepReadonlyArray6736<U>
  : T extends object
  ? DeepReadonlyObject6736<T>
  : T;

interface DeepReadonlyArray6736<T> extends ReadonlyArray<DeepReadonly6736<T>> {}

type DeepReadonlyObject6736<T> = {
  readonly [P in keyof T]: DeepReadonly6736<T[P]>;
};

type UnionToIntersection6736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6736<T> = UnionToIntersection6736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6736<T extends unknown[], V> = [...T, V];

type TuplifyUnion6736<T, L = LastOf6736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6736<TuplifyUnion6736<Exclude<T, L>>, L>;

type DeepPartial6736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6736<T[P]> }
  : T;

type Paths6736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6736<K, Paths6736<T[K], Prev6736[D]>> : never }[keyof T]
  : never;

type Prev6736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6736 {
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

type ConfigPaths6736 = Paths6736<NestedConfig6736>;

interface HeavyProps6736 {
  config: DeepPartial6736<NestedConfig6736>;
  path?: ConfigPaths6736;
}

const HeavyComponent6736 = memo(function HeavyComponent6736({ config }: HeavyProps6736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6736.displayName = 'HeavyComponent6736';
export default HeavyComponent6736;
