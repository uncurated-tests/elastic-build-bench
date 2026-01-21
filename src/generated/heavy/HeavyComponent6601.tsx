'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6601<T> = T extends (infer U)[]
  ? DeepReadonlyArray6601<U>
  : T extends object
  ? DeepReadonlyObject6601<T>
  : T;

interface DeepReadonlyArray6601<T> extends ReadonlyArray<DeepReadonly6601<T>> {}

type DeepReadonlyObject6601<T> = {
  readonly [P in keyof T]: DeepReadonly6601<T[P]>;
};

type UnionToIntersection6601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6601<T> = UnionToIntersection6601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6601<T extends unknown[], V> = [...T, V];

type TuplifyUnion6601<T, L = LastOf6601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6601<TuplifyUnion6601<Exclude<T, L>>, L>;

type DeepPartial6601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6601<T[P]> }
  : T;

type Paths6601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6601<K, Paths6601<T[K], Prev6601[D]>> : never }[keyof T]
  : never;

type Prev6601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6601 {
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

type ConfigPaths6601 = Paths6601<NestedConfig6601>;

interface HeavyProps6601 {
  config: DeepPartial6601<NestedConfig6601>;
  path?: ConfigPaths6601;
}

const HeavyComponent6601 = memo(function HeavyComponent6601({ config }: HeavyProps6601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6601.displayName = 'HeavyComponent6601';
export default HeavyComponent6601;
