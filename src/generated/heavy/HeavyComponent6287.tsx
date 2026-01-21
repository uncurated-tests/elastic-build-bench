'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6287<T> = T extends (infer U)[]
  ? DeepReadonlyArray6287<U>
  : T extends object
  ? DeepReadonlyObject6287<T>
  : T;

interface DeepReadonlyArray6287<T> extends ReadonlyArray<DeepReadonly6287<T>> {}

type DeepReadonlyObject6287<T> = {
  readonly [P in keyof T]: DeepReadonly6287<T[P]>;
};

type UnionToIntersection6287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6287<T> = UnionToIntersection6287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6287<T extends unknown[], V> = [...T, V];

type TuplifyUnion6287<T, L = LastOf6287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6287<TuplifyUnion6287<Exclude<T, L>>, L>;

type DeepPartial6287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6287<T[P]> }
  : T;

type Paths6287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6287<K, Paths6287<T[K], Prev6287[D]>> : never }[keyof T]
  : never;

type Prev6287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6287 {
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

type ConfigPaths6287 = Paths6287<NestedConfig6287>;

interface HeavyProps6287 {
  config: DeepPartial6287<NestedConfig6287>;
  path?: ConfigPaths6287;
}

const HeavyComponent6287 = memo(function HeavyComponent6287({ config }: HeavyProps6287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6287.displayName = 'HeavyComponent6287';
export default HeavyComponent6287;
