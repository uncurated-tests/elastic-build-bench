'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6948<T> = T extends (infer U)[]
  ? DeepReadonlyArray6948<U>
  : T extends object
  ? DeepReadonlyObject6948<T>
  : T;

interface DeepReadonlyArray6948<T> extends ReadonlyArray<DeepReadonly6948<T>> {}

type DeepReadonlyObject6948<T> = {
  readonly [P in keyof T]: DeepReadonly6948<T[P]>;
};

type UnionToIntersection6948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6948<T> = UnionToIntersection6948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6948<T extends unknown[], V> = [...T, V];

type TuplifyUnion6948<T, L = LastOf6948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6948<TuplifyUnion6948<Exclude<T, L>>, L>;

type DeepPartial6948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6948<T[P]> }
  : T;

type Paths6948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6948<K, Paths6948<T[K], Prev6948[D]>> : never }[keyof T]
  : never;

type Prev6948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6948 {
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

type ConfigPaths6948 = Paths6948<NestedConfig6948>;

interface HeavyProps6948 {
  config: DeepPartial6948<NestedConfig6948>;
  path?: ConfigPaths6948;
}

const HeavyComponent6948 = memo(function HeavyComponent6948({ config }: HeavyProps6948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6948.displayName = 'HeavyComponent6948';
export default HeavyComponent6948;
