'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6796<T> = T extends (infer U)[]
  ? DeepReadonlyArray6796<U>
  : T extends object
  ? DeepReadonlyObject6796<T>
  : T;

interface DeepReadonlyArray6796<T> extends ReadonlyArray<DeepReadonly6796<T>> {}

type DeepReadonlyObject6796<T> = {
  readonly [P in keyof T]: DeepReadonly6796<T[P]>;
};

type UnionToIntersection6796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6796<T> = UnionToIntersection6796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6796<T extends unknown[], V> = [...T, V];

type TuplifyUnion6796<T, L = LastOf6796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6796<TuplifyUnion6796<Exclude<T, L>>, L>;

type DeepPartial6796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6796<T[P]> }
  : T;

type Paths6796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6796<K, Paths6796<T[K], Prev6796[D]>> : never }[keyof T]
  : never;

type Prev6796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6796 {
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

type ConfigPaths6796 = Paths6796<NestedConfig6796>;

interface HeavyProps6796 {
  config: DeepPartial6796<NestedConfig6796>;
  path?: ConfigPaths6796;
}

const HeavyComponent6796 = memo(function HeavyComponent6796({ config }: HeavyProps6796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6796.displayName = 'HeavyComponent6796';
export default HeavyComponent6796;
