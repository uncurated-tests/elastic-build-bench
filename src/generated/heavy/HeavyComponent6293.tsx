'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6293<T> = T extends (infer U)[]
  ? DeepReadonlyArray6293<U>
  : T extends object
  ? DeepReadonlyObject6293<T>
  : T;

interface DeepReadonlyArray6293<T> extends ReadonlyArray<DeepReadonly6293<T>> {}

type DeepReadonlyObject6293<T> = {
  readonly [P in keyof T]: DeepReadonly6293<T[P]>;
};

type UnionToIntersection6293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6293<T> = UnionToIntersection6293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6293<T extends unknown[], V> = [...T, V];

type TuplifyUnion6293<T, L = LastOf6293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6293<TuplifyUnion6293<Exclude<T, L>>, L>;

type DeepPartial6293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6293<T[P]> }
  : T;

type Paths6293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6293<K, Paths6293<T[K], Prev6293[D]>> : never }[keyof T]
  : never;

type Prev6293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6293 {
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

type ConfigPaths6293 = Paths6293<NestedConfig6293>;

interface HeavyProps6293 {
  config: DeepPartial6293<NestedConfig6293>;
  path?: ConfigPaths6293;
}

const HeavyComponent6293 = memo(function HeavyComponent6293({ config }: HeavyProps6293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6293.displayName = 'HeavyComponent6293';
export default HeavyComponent6293;
