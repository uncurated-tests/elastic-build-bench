'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6057<T> = T extends (infer U)[]
  ? DeepReadonlyArray6057<U>
  : T extends object
  ? DeepReadonlyObject6057<T>
  : T;

interface DeepReadonlyArray6057<T> extends ReadonlyArray<DeepReadonly6057<T>> {}

type DeepReadonlyObject6057<T> = {
  readonly [P in keyof T]: DeepReadonly6057<T[P]>;
};

type UnionToIntersection6057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6057<T> = UnionToIntersection6057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6057<T extends unknown[], V> = [...T, V];

type TuplifyUnion6057<T, L = LastOf6057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6057<TuplifyUnion6057<Exclude<T, L>>, L>;

type DeepPartial6057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6057<T[P]> }
  : T;

type Paths6057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6057<K, Paths6057<T[K], Prev6057[D]>> : never }[keyof T]
  : never;

type Prev6057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6057 {
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

type ConfigPaths6057 = Paths6057<NestedConfig6057>;

interface HeavyProps6057 {
  config: DeepPartial6057<NestedConfig6057>;
  path?: ConfigPaths6057;
}

const HeavyComponent6057 = memo(function HeavyComponent6057({ config }: HeavyProps6057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6057.displayName = 'HeavyComponent6057';
export default HeavyComponent6057;
