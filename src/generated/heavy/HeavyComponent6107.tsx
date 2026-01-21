'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6107<T> = T extends (infer U)[]
  ? DeepReadonlyArray6107<U>
  : T extends object
  ? DeepReadonlyObject6107<T>
  : T;

interface DeepReadonlyArray6107<T> extends ReadonlyArray<DeepReadonly6107<T>> {}

type DeepReadonlyObject6107<T> = {
  readonly [P in keyof T]: DeepReadonly6107<T[P]>;
};

type UnionToIntersection6107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6107<T> = UnionToIntersection6107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6107<T extends unknown[], V> = [...T, V];

type TuplifyUnion6107<T, L = LastOf6107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6107<TuplifyUnion6107<Exclude<T, L>>, L>;

type DeepPartial6107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6107<T[P]> }
  : T;

type Paths6107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6107<K, Paths6107<T[K], Prev6107[D]>> : never }[keyof T]
  : never;

type Prev6107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6107 {
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

type ConfigPaths6107 = Paths6107<NestedConfig6107>;

interface HeavyProps6107 {
  config: DeepPartial6107<NestedConfig6107>;
  path?: ConfigPaths6107;
}

const HeavyComponent6107 = memo(function HeavyComponent6107({ config }: HeavyProps6107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6107.displayName = 'HeavyComponent6107';
export default HeavyComponent6107;
