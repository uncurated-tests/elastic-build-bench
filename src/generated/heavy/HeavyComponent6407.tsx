'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6407<T> = T extends (infer U)[]
  ? DeepReadonlyArray6407<U>
  : T extends object
  ? DeepReadonlyObject6407<T>
  : T;

interface DeepReadonlyArray6407<T> extends ReadonlyArray<DeepReadonly6407<T>> {}

type DeepReadonlyObject6407<T> = {
  readonly [P in keyof T]: DeepReadonly6407<T[P]>;
};

type UnionToIntersection6407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6407<T> = UnionToIntersection6407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6407<T extends unknown[], V> = [...T, V];

type TuplifyUnion6407<T, L = LastOf6407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6407<TuplifyUnion6407<Exclude<T, L>>, L>;

type DeepPartial6407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6407<T[P]> }
  : T;

type Paths6407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6407<K, Paths6407<T[K], Prev6407[D]>> : never }[keyof T]
  : never;

type Prev6407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6407 {
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

type ConfigPaths6407 = Paths6407<NestedConfig6407>;

interface HeavyProps6407 {
  config: DeepPartial6407<NestedConfig6407>;
  path?: ConfigPaths6407;
}

const HeavyComponent6407 = memo(function HeavyComponent6407({ config }: HeavyProps6407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6407.displayName = 'HeavyComponent6407';
export default HeavyComponent6407;
