'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6504<T> = T extends (infer U)[]
  ? DeepReadonlyArray6504<U>
  : T extends object
  ? DeepReadonlyObject6504<T>
  : T;

interface DeepReadonlyArray6504<T> extends ReadonlyArray<DeepReadonly6504<T>> {}

type DeepReadonlyObject6504<T> = {
  readonly [P in keyof T]: DeepReadonly6504<T[P]>;
};

type UnionToIntersection6504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6504<T> = UnionToIntersection6504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6504<T extends unknown[], V> = [...T, V];

type TuplifyUnion6504<T, L = LastOf6504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6504<TuplifyUnion6504<Exclude<T, L>>, L>;

type DeepPartial6504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6504<T[P]> }
  : T;

type Paths6504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6504<K, Paths6504<T[K], Prev6504[D]>> : never }[keyof T]
  : never;

type Prev6504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6504 {
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

type ConfigPaths6504 = Paths6504<NestedConfig6504>;

interface HeavyProps6504 {
  config: DeepPartial6504<NestedConfig6504>;
  path?: ConfigPaths6504;
}

const HeavyComponent6504 = memo(function HeavyComponent6504({ config }: HeavyProps6504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6504.displayName = 'HeavyComponent6504';
export default HeavyComponent6504;
