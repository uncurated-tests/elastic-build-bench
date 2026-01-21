'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6937<T> = T extends (infer U)[]
  ? DeepReadonlyArray6937<U>
  : T extends object
  ? DeepReadonlyObject6937<T>
  : T;

interface DeepReadonlyArray6937<T> extends ReadonlyArray<DeepReadonly6937<T>> {}

type DeepReadonlyObject6937<T> = {
  readonly [P in keyof T]: DeepReadonly6937<T[P]>;
};

type UnionToIntersection6937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6937<T> = UnionToIntersection6937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6937<T extends unknown[], V> = [...T, V];

type TuplifyUnion6937<T, L = LastOf6937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6937<TuplifyUnion6937<Exclude<T, L>>, L>;

type DeepPartial6937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6937<T[P]> }
  : T;

type Paths6937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6937<K, Paths6937<T[K], Prev6937[D]>> : never }[keyof T]
  : never;

type Prev6937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6937 {
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

type ConfigPaths6937 = Paths6937<NestedConfig6937>;

interface HeavyProps6937 {
  config: DeepPartial6937<NestedConfig6937>;
  path?: ConfigPaths6937;
}

const HeavyComponent6937 = memo(function HeavyComponent6937({ config }: HeavyProps6937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6937.displayName = 'HeavyComponent6937';
export default HeavyComponent6937;
