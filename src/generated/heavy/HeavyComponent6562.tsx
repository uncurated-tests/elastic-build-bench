'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6562<T> = T extends (infer U)[]
  ? DeepReadonlyArray6562<U>
  : T extends object
  ? DeepReadonlyObject6562<T>
  : T;

interface DeepReadonlyArray6562<T> extends ReadonlyArray<DeepReadonly6562<T>> {}

type DeepReadonlyObject6562<T> = {
  readonly [P in keyof T]: DeepReadonly6562<T[P]>;
};

type UnionToIntersection6562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6562<T> = UnionToIntersection6562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6562<T extends unknown[], V> = [...T, V];

type TuplifyUnion6562<T, L = LastOf6562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6562<TuplifyUnion6562<Exclude<T, L>>, L>;

type DeepPartial6562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6562<T[P]> }
  : T;

type Paths6562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6562<K, Paths6562<T[K], Prev6562[D]>> : never }[keyof T]
  : never;

type Prev6562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6562 {
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

type ConfigPaths6562 = Paths6562<NestedConfig6562>;

interface HeavyProps6562 {
  config: DeepPartial6562<NestedConfig6562>;
  path?: ConfigPaths6562;
}

const HeavyComponent6562 = memo(function HeavyComponent6562({ config }: HeavyProps6562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6562.displayName = 'HeavyComponent6562';
export default HeavyComponent6562;
