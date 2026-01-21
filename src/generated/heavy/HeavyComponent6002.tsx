'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6002<T> = T extends (infer U)[]
  ? DeepReadonlyArray6002<U>
  : T extends object
  ? DeepReadonlyObject6002<T>
  : T;

interface DeepReadonlyArray6002<T> extends ReadonlyArray<DeepReadonly6002<T>> {}

type DeepReadonlyObject6002<T> = {
  readonly [P in keyof T]: DeepReadonly6002<T[P]>;
};

type UnionToIntersection6002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6002<T> = UnionToIntersection6002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6002<T extends unknown[], V> = [...T, V];

type TuplifyUnion6002<T, L = LastOf6002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6002<TuplifyUnion6002<Exclude<T, L>>, L>;

type DeepPartial6002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6002<T[P]> }
  : T;

type Paths6002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6002<K, Paths6002<T[K], Prev6002[D]>> : never }[keyof T]
  : never;

type Prev6002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6002 {
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

type ConfigPaths6002 = Paths6002<NestedConfig6002>;

interface HeavyProps6002 {
  config: DeepPartial6002<NestedConfig6002>;
  path?: ConfigPaths6002;
}

const HeavyComponent6002 = memo(function HeavyComponent6002({ config }: HeavyProps6002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6002.displayName = 'HeavyComponent6002';
export default HeavyComponent6002;
