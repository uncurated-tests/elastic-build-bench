'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6140<T> = T extends (infer U)[]
  ? DeepReadonlyArray6140<U>
  : T extends object
  ? DeepReadonlyObject6140<T>
  : T;

interface DeepReadonlyArray6140<T> extends ReadonlyArray<DeepReadonly6140<T>> {}

type DeepReadonlyObject6140<T> = {
  readonly [P in keyof T]: DeepReadonly6140<T[P]>;
};

type UnionToIntersection6140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6140<T> = UnionToIntersection6140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6140<T extends unknown[], V> = [...T, V];

type TuplifyUnion6140<T, L = LastOf6140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6140<TuplifyUnion6140<Exclude<T, L>>, L>;

type DeepPartial6140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6140<T[P]> }
  : T;

type Paths6140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6140<K, Paths6140<T[K], Prev6140[D]>> : never }[keyof T]
  : never;

type Prev6140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6140 {
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

type ConfigPaths6140 = Paths6140<NestedConfig6140>;

interface HeavyProps6140 {
  config: DeepPartial6140<NestedConfig6140>;
  path?: ConfigPaths6140;
}

const HeavyComponent6140 = memo(function HeavyComponent6140({ config }: HeavyProps6140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6140.displayName = 'HeavyComponent6140';
export default HeavyComponent6140;
