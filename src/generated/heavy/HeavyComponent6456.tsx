'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6456<T> = T extends (infer U)[]
  ? DeepReadonlyArray6456<U>
  : T extends object
  ? DeepReadonlyObject6456<T>
  : T;

interface DeepReadonlyArray6456<T> extends ReadonlyArray<DeepReadonly6456<T>> {}

type DeepReadonlyObject6456<T> = {
  readonly [P in keyof T]: DeepReadonly6456<T[P]>;
};

type UnionToIntersection6456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6456<T> = UnionToIntersection6456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6456<T extends unknown[], V> = [...T, V];

type TuplifyUnion6456<T, L = LastOf6456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6456<TuplifyUnion6456<Exclude<T, L>>, L>;

type DeepPartial6456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6456<T[P]> }
  : T;

type Paths6456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6456<K, Paths6456<T[K], Prev6456[D]>> : never }[keyof T]
  : never;

type Prev6456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6456 {
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

type ConfigPaths6456 = Paths6456<NestedConfig6456>;

interface HeavyProps6456 {
  config: DeepPartial6456<NestedConfig6456>;
  path?: ConfigPaths6456;
}

const HeavyComponent6456 = memo(function HeavyComponent6456({ config }: HeavyProps6456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6456.displayName = 'HeavyComponent6456';
export default HeavyComponent6456;
