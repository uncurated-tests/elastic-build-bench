'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6538<T> = T extends (infer U)[]
  ? DeepReadonlyArray6538<U>
  : T extends object
  ? DeepReadonlyObject6538<T>
  : T;

interface DeepReadonlyArray6538<T> extends ReadonlyArray<DeepReadonly6538<T>> {}

type DeepReadonlyObject6538<T> = {
  readonly [P in keyof T]: DeepReadonly6538<T[P]>;
};

type UnionToIntersection6538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6538<T> = UnionToIntersection6538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6538<T extends unknown[], V> = [...T, V];

type TuplifyUnion6538<T, L = LastOf6538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6538<TuplifyUnion6538<Exclude<T, L>>, L>;

type DeepPartial6538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6538<T[P]> }
  : T;

type Paths6538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6538<K, Paths6538<T[K], Prev6538[D]>> : never }[keyof T]
  : never;

type Prev6538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6538 {
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

type ConfigPaths6538 = Paths6538<NestedConfig6538>;

interface HeavyProps6538 {
  config: DeepPartial6538<NestedConfig6538>;
  path?: ConfigPaths6538;
}

const HeavyComponent6538 = memo(function HeavyComponent6538({ config }: HeavyProps6538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6538.displayName = 'HeavyComponent6538';
export default HeavyComponent6538;
