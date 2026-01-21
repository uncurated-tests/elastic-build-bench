'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6988<T> = T extends (infer U)[]
  ? DeepReadonlyArray6988<U>
  : T extends object
  ? DeepReadonlyObject6988<T>
  : T;

interface DeepReadonlyArray6988<T> extends ReadonlyArray<DeepReadonly6988<T>> {}

type DeepReadonlyObject6988<T> = {
  readonly [P in keyof T]: DeepReadonly6988<T[P]>;
};

type UnionToIntersection6988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6988<T> = UnionToIntersection6988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6988<T extends unknown[], V> = [...T, V];

type TuplifyUnion6988<T, L = LastOf6988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6988<TuplifyUnion6988<Exclude<T, L>>, L>;

type DeepPartial6988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6988<T[P]> }
  : T;

type Paths6988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6988<K, Paths6988<T[K], Prev6988[D]>> : never }[keyof T]
  : never;

type Prev6988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6988 {
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

type ConfigPaths6988 = Paths6988<NestedConfig6988>;

interface HeavyProps6988 {
  config: DeepPartial6988<NestedConfig6988>;
  path?: ConfigPaths6988;
}

const HeavyComponent6988 = memo(function HeavyComponent6988({ config }: HeavyProps6988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6988.displayName = 'HeavyComponent6988';
export default HeavyComponent6988;
