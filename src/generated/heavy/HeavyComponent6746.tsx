'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6746<T> = T extends (infer U)[]
  ? DeepReadonlyArray6746<U>
  : T extends object
  ? DeepReadonlyObject6746<T>
  : T;

interface DeepReadonlyArray6746<T> extends ReadonlyArray<DeepReadonly6746<T>> {}

type DeepReadonlyObject6746<T> = {
  readonly [P in keyof T]: DeepReadonly6746<T[P]>;
};

type UnionToIntersection6746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6746<T> = UnionToIntersection6746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6746<T extends unknown[], V> = [...T, V];

type TuplifyUnion6746<T, L = LastOf6746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6746<TuplifyUnion6746<Exclude<T, L>>, L>;

type DeepPartial6746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6746<T[P]> }
  : T;

type Paths6746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6746<K, Paths6746<T[K], Prev6746[D]>> : never }[keyof T]
  : never;

type Prev6746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6746 {
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

type ConfigPaths6746 = Paths6746<NestedConfig6746>;

interface HeavyProps6746 {
  config: DeepPartial6746<NestedConfig6746>;
  path?: ConfigPaths6746;
}

const HeavyComponent6746 = memo(function HeavyComponent6746({ config }: HeavyProps6746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6746.displayName = 'HeavyComponent6746';
export default HeavyComponent6746;
