'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6146<T> = T extends (infer U)[]
  ? DeepReadonlyArray6146<U>
  : T extends object
  ? DeepReadonlyObject6146<T>
  : T;

interface DeepReadonlyArray6146<T> extends ReadonlyArray<DeepReadonly6146<T>> {}

type DeepReadonlyObject6146<T> = {
  readonly [P in keyof T]: DeepReadonly6146<T[P]>;
};

type UnionToIntersection6146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6146<T> = UnionToIntersection6146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6146<T extends unknown[], V> = [...T, V];

type TuplifyUnion6146<T, L = LastOf6146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6146<TuplifyUnion6146<Exclude<T, L>>, L>;

type DeepPartial6146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6146<T[P]> }
  : T;

type Paths6146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6146<K, Paths6146<T[K], Prev6146[D]>> : never }[keyof T]
  : never;

type Prev6146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6146 {
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

type ConfigPaths6146 = Paths6146<NestedConfig6146>;

interface HeavyProps6146 {
  config: DeepPartial6146<NestedConfig6146>;
  path?: ConfigPaths6146;
}

const HeavyComponent6146 = memo(function HeavyComponent6146({ config }: HeavyProps6146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6146.displayName = 'HeavyComponent6146';
export default HeavyComponent6146;
