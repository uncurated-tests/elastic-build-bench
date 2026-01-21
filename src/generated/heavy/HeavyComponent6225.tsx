'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6225<T> = T extends (infer U)[]
  ? DeepReadonlyArray6225<U>
  : T extends object
  ? DeepReadonlyObject6225<T>
  : T;

interface DeepReadonlyArray6225<T> extends ReadonlyArray<DeepReadonly6225<T>> {}

type DeepReadonlyObject6225<T> = {
  readonly [P in keyof T]: DeepReadonly6225<T[P]>;
};

type UnionToIntersection6225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6225<T> = UnionToIntersection6225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6225<T extends unknown[], V> = [...T, V];

type TuplifyUnion6225<T, L = LastOf6225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6225<TuplifyUnion6225<Exclude<T, L>>, L>;

type DeepPartial6225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6225<T[P]> }
  : T;

type Paths6225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6225<K, Paths6225<T[K], Prev6225[D]>> : never }[keyof T]
  : never;

type Prev6225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6225 {
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

type ConfigPaths6225 = Paths6225<NestedConfig6225>;

interface HeavyProps6225 {
  config: DeepPartial6225<NestedConfig6225>;
  path?: ConfigPaths6225;
}

const HeavyComponent6225 = memo(function HeavyComponent6225({ config }: HeavyProps6225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6225.displayName = 'HeavyComponent6225';
export default HeavyComponent6225;
