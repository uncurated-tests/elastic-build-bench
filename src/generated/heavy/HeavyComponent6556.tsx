'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6556<T> = T extends (infer U)[]
  ? DeepReadonlyArray6556<U>
  : T extends object
  ? DeepReadonlyObject6556<T>
  : T;

interface DeepReadonlyArray6556<T> extends ReadonlyArray<DeepReadonly6556<T>> {}

type DeepReadonlyObject6556<T> = {
  readonly [P in keyof T]: DeepReadonly6556<T[P]>;
};

type UnionToIntersection6556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6556<T> = UnionToIntersection6556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6556<T extends unknown[], V> = [...T, V];

type TuplifyUnion6556<T, L = LastOf6556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6556<TuplifyUnion6556<Exclude<T, L>>, L>;

type DeepPartial6556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6556<T[P]> }
  : T;

type Paths6556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6556<K, Paths6556<T[K], Prev6556[D]>> : never }[keyof T]
  : never;

type Prev6556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6556 {
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

type ConfigPaths6556 = Paths6556<NestedConfig6556>;

interface HeavyProps6556 {
  config: DeepPartial6556<NestedConfig6556>;
  path?: ConfigPaths6556;
}

const HeavyComponent6556 = memo(function HeavyComponent6556({ config }: HeavyProps6556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6556.displayName = 'HeavyComponent6556';
export default HeavyComponent6556;
