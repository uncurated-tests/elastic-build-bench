'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6200<T> = T extends (infer U)[]
  ? DeepReadonlyArray6200<U>
  : T extends object
  ? DeepReadonlyObject6200<T>
  : T;

interface DeepReadonlyArray6200<T> extends ReadonlyArray<DeepReadonly6200<T>> {}

type DeepReadonlyObject6200<T> = {
  readonly [P in keyof T]: DeepReadonly6200<T[P]>;
};

type UnionToIntersection6200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6200<T> = UnionToIntersection6200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6200<T extends unknown[], V> = [...T, V];

type TuplifyUnion6200<T, L = LastOf6200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6200<TuplifyUnion6200<Exclude<T, L>>, L>;

type DeepPartial6200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6200<T[P]> }
  : T;

type Paths6200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6200<K, Paths6200<T[K], Prev6200[D]>> : never }[keyof T]
  : never;

type Prev6200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6200 {
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

type ConfigPaths6200 = Paths6200<NestedConfig6200>;

interface HeavyProps6200 {
  config: DeepPartial6200<NestedConfig6200>;
  path?: ConfigPaths6200;
}

const HeavyComponent6200 = memo(function HeavyComponent6200({ config }: HeavyProps6200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6200.displayName = 'HeavyComponent6200';
export default HeavyComponent6200;
