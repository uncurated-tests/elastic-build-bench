'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6446<T> = T extends (infer U)[]
  ? DeepReadonlyArray6446<U>
  : T extends object
  ? DeepReadonlyObject6446<T>
  : T;

interface DeepReadonlyArray6446<T> extends ReadonlyArray<DeepReadonly6446<T>> {}

type DeepReadonlyObject6446<T> = {
  readonly [P in keyof T]: DeepReadonly6446<T[P]>;
};

type UnionToIntersection6446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6446<T> = UnionToIntersection6446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6446<T extends unknown[], V> = [...T, V];

type TuplifyUnion6446<T, L = LastOf6446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6446<TuplifyUnion6446<Exclude<T, L>>, L>;

type DeepPartial6446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6446<T[P]> }
  : T;

type Paths6446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6446<K, Paths6446<T[K], Prev6446[D]>> : never }[keyof T]
  : never;

type Prev6446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6446 {
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

type ConfigPaths6446 = Paths6446<NestedConfig6446>;

interface HeavyProps6446 {
  config: DeepPartial6446<NestedConfig6446>;
  path?: ConfigPaths6446;
}

const HeavyComponent6446 = memo(function HeavyComponent6446({ config }: HeavyProps6446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6446.displayName = 'HeavyComponent6446';
export default HeavyComponent6446;
