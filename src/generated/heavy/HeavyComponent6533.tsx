'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6533<T> = T extends (infer U)[]
  ? DeepReadonlyArray6533<U>
  : T extends object
  ? DeepReadonlyObject6533<T>
  : T;

interface DeepReadonlyArray6533<T> extends ReadonlyArray<DeepReadonly6533<T>> {}

type DeepReadonlyObject6533<T> = {
  readonly [P in keyof T]: DeepReadonly6533<T[P]>;
};

type UnionToIntersection6533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6533<T> = UnionToIntersection6533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6533<T extends unknown[], V> = [...T, V];

type TuplifyUnion6533<T, L = LastOf6533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6533<TuplifyUnion6533<Exclude<T, L>>, L>;

type DeepPartial6533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6533<T[P]> }
  : T;

type Paths6533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6533<K, Paths6533<T[K], Prev6533[D]>> : never }[keyof T]
  : never;

type Prev6533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6533 {
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

type ConfigPaths6533 = Paths6533<NestedConfig6533>;

interface HeavyProps6533 {
  config: DeepPartial6533<NestedConfig6533>;
  path?: ConfigPaths6533;
}

const HeavyComponent6533 = memo(function HeavyComponent6533({ config }: HeavyProps6533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6533.displayName = 'HeavyComponent6533';
export default HeavyComponent6533;
