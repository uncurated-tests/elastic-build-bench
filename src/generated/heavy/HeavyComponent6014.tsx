'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6014<T> = T extends (infer U)[]
  ? DeepReadonlyArray6014<U>
  : T extends object
  ? DeepReadonlyObject6014<T>
  : T;

interface DeepReadonlyArray6014<T> extends ReadonlyArray<DeepReadonly6014<T>> {}

type DeepReadonlyObject6014<T> = {
  readonly [P in keyof T]: DeepReadonly6014<T[P]>;
};

type UnionToIntersection6014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6014<T> = UnionToIntersection6014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6014<T extends unknown[], V> = [...T, V];

type TuplifyUnion6014<T, L = LastOf6014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6014<TuplifyUnion6014<Exclude<T, L>>, L>;

type DeepPartial6014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6014<T[P]> }
  : T;

type Paths6014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6014<K, Paths6014<T[K], Prev6014[D]>> : never }[keyof T]
  : never;

type Prev6014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6014 {
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

type ConfigPaths6014 = Paths6014<NestedConfig6014>;

interface HeavyProps6014 {
  config: DeepPartial6014<NestedConfig6014>;
  path?: ConfigPaths6014;
}

const HeavyComponent6014 = memo(function HeavyComponent6014({ config }: HeavyProps6014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6014.displayName = 'HeavyComponent6014';
export default HeavyComponent6014;
