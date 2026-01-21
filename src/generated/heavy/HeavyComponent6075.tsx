'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6075<T> = T extends (infer U)[]
  ? DeepReadonlyArray6075<U>
  : T extends object
  ? DeepReadonlyObject6075<T>
  : T;

interface DeepReadonlyArray6075<T> extends ReadonlyArray<DeepReadonly6075<T>> {}

type DeepReadonlyObject6075<T> = {
  readonly [P in keyof T]: DeepReadonly6075<T[P]>;
};

type UnionToIntersection6075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6075<T> = UnionToIntersection6075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6075<T extends unknown[], V> = [...T, V];

type TuplifyUnion6075<T, L = LastOf6075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6075<TuplifyUnion6075<Exclude<T, L>>, L>;

type DeepPartial6075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6075<T[P]> }
  : T;

type Paths6075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6075<K, Paths6075<T[K], Prev6075[D]>> : never }[keyof T]
  : never;

type Prev6075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6075 {
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

type ConfigPaths6075 = Paths6075<NestedConfig6075>;

interface HeavyProps6075 {
  config: DeepPartial6075<NestedConfig6075>;
  path?: ConfigPaths6075;
}

const HeavyComponent6075 = memo(function HeavyComponent6075({ config }: HeavyProps6075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6075.displayName = 'HeavyComponent6075';
export default HeavyComponent6075;
