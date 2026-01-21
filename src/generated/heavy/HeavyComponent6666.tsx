'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6666<T> = T extends (infer U)[]
  ? DeepReadonlyArray6666<U>
  : T extends object
  ? DeepReadonlyObject6666<T>
  : T;

interface DeepReadonlyArray6666<T> extends ReadonlyArray<DeepReadonly6666<T>> {}

type DeepReadonlyObject6666<T> = {
  readonly [P in keyof T]: DeepReadonly6666<T[P]>;
};

type UnionToIntersection6666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6666<T> = UnionToIntersection6666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6666<T extends unknown[], V> = [...T, V];

type TuplifyUnion6666<T, L = LastOf6666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6666<TuplifyUnion6666<Exclude<T, L>>, L>;

type DeepPartial6666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6666<T[P]> }
  : T;

type Paths6666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6666<K, Paths6666<T[K], Prev6666[D]>> : never }[keyof T]
  : never;

type Prev6666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6666 {
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

type ConfigPaths6666 = Paths6666<NestedConfig6666>;

interface HeavyProps6666 {
  config: DeepPartial6666<NestedConfig6666>;
  path?: ConfigPaths6666;
}

const HeavyComponent6666 = memo(function HeavyComponent6666({ config }: HeavyProps6666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6666.displayName = 'HeavyComponent6666';
export default HeavyComponent6666;
