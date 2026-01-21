'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6078<T> = T extends (infer U)[]
  ? DeepReadonlyArray6078<U>
  : T extends object
  ? DeepReadonlyObject6078<T>
  : T;

interface DeepReadonlyArray6078<T> extends ReadonlyArray<DeepReadonly6078<T>> {}

type DeepReadonlyObject6078<T> = {
  readonly [P in keyof T]: DeepReadonly6078<T[P]>;
};

type UnionToIntersection6078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6078<T> = UnionToIntersection6078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6078<T extends unknown[], V> = [...T, V];

type TuplifyUnion6078<T, L = LastOf6078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6078<TuplifyUnion6078<Exclude<T, L>>, L>;

type DeepPartial6078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6078<T[P]> }
  : T;

type Paths6078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6078<K, Paths6078<T[K], Prev6078[D]>> : never }[keyof T]
  : never;

type Prev6078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6078 {
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

type ConfigPaths6078 = Paths6078<NestedConfig6078>;

interface HeavyProps6078 {
  config: DeepPartial6078<NestedConfig6078>;
  path?: ConfigPaths6078;
}

const HeavyComponent6078 = memo(function HeavyComponent6078({ config }: HeavyProps6078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6078.displayName = 'HeavyComponent6078';
export default HeavyComponent6078;
