'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6528<T> = T extends (infer U)[]
  ? DeepReadonlyArray6528<U>
  : T extends object
  ? DeepReadonlyObject6528<T>
  : T;

interface DeepReadonlyArray6528<T> extends ReadonlyArray<DeepReadonly6528<T>> {}

type DeepReadonlyObject6528<T> = {
  readonly [P in keyof T]: DeepReadonly6528<T[P]>;
};

type UnionToIntersection6528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6528<T> = UnionToIntersection6528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6528<T extends unknown[], V> = [...T, V];

type TuplifyUnion6528<T, L = LastOf6528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6528<TuplifyUnion6528<Exclude<T, L>>, L>;

type DeepPartial6528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6528<T[P]> }
  : T;

type Paths6528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6528<K, Paths6528<T[K], Prev6528[D]>> : never }[keyof T]
  : never;

type Prev6528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6528 {
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

type ConfigPaths6528 = Paths6528<NestedConfig6528>;

interface HeavyProps6528 {
  config: DeepPartial6528<NestedConfig6528>;
  path?: ConfigPaths6528;
}

const HeavyComponent6528 = memo(function HeavyComponent6528({ config }: HeavyProps6528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6528.displayName = 'HeavyComponent6528';
export default HeavyComponent6528;
