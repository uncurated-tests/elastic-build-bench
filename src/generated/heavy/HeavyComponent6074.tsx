'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6074<T> = T extends (infer U)[]
  ? DeepReadonlyArray6074<U>
  : T extends object
  ? DeepReadonlyObject6074<T>
  : T;

interface DeepReadonlyArray6074<T> extends ReadonlyArray<DeepReadonly6074<T>> {}

type DeepReadonlyObject6074<T> = {
  readonly [P in keyof T]: DeepReadonly6074<T[P]>;
};

type UnionToIntersection6074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6074<T> = UnionToIntersection6074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6074<T extends unknown[], V> = [...T, V];

type TuplifyUnion6074<T, L = LastOf6074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6074<TuplifyUnion6074<Exclude<T, L>>, L>;

type DeepPartial6074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6074<T[P]> }
  : T;

type Paths6074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6074<K, Paths6074<T[K], Prev6074[D]>> : never }[keyof T]
  : never;

type Prev6074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6074 {
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

type ConfigPaths6074 = Paths6074<NestedConfig6074>;

interface HeavyProps6074 {
  config: DeepPartial6074<NestedConfig6074>;
  path?: ConfigPaths6074;
}

const HeavyComponent6074 = memo(function HeavyComponent6074({ config }: HeavyProps6074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6074.displayName = 'HeavyComponent6074';
export default HeavyComponent6074;
