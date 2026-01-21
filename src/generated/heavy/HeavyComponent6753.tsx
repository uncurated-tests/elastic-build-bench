'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6753<T> = T extends (infer U)[]
  ? DeepReadonlyArray6753<U>
  : T extends object
  ? DeepReadonlyObject6753<T>
  : T;

interface DeepReadonlyArray6753<T> extends ReadonlyArray<DeepReadonly6753<T>> {}

type DeepReadonlyObject6753<T> = {
  readonly [P in keyof T]: DeepReadonly6753<T[P]>;
};

type UnionToIntersection6753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6753<T> = UnionToIntersection6753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6753<T extends unknown[], V> = [...T, V];

type TuplifyUnion6753<T, L = LastOf6753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6753<TuplifyUnion6753<Exclude<T, L>>, L>;

type DeepPartial6753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6753<T[P]> }
  : T;

type Paths6753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6753<K, Paths6753<T[K], Prev6753[D]>> : never }[keyof T]
  : never;

type Prev6753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6753 {
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

type ConfigPaths6753 = Paths6753<NestedConfig6753>;

interface HeavyProps6753 {
  config: DeepPartial6753<NestedConfig6753>;
  path?: ConfigPaths6753;
}

const HeavyComponent6753 = memo(function HeavyComponent6753({ config }: HeavyProps6753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6753.displayName = 'HeavyComponent6753';
export default HeavyComponent6753;
