'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6365<T> = T extends (infer U)[]
  ? DeepReadonlyArray6365<U>
  : T extends object
  ? DeepReadonlyObject6365<T>
  : T;

interface DeepReadonlyArray6365<T> extends ReadonlyArray<DeepReadonly6365<T>> {}

type DeepReadonlyObject6365<T> = {
  readonly [P in keyof T]: DeepReadonly6365<T[P]>;
};

type UnionToIntersection6365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6365<T> = UnionToIntersection6365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6365<T extends unknown[], V> = [...T, V];

type TuplifyUnion6365<T, L = LastOf6365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6365<TuplifyUnion6365<Exclude<T, L>>, L>;

type DeepPartial6365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6365<T[P]> }
  : T;

type Paths6365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6365<K, Paths6365<T[K], Prev6365[D]>> : never }[keyof T]
  : never;

type Prev6365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6365 {
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

type ConfigPaths6365 = Paths6365<NestedConfig6365>;

interface HeavyProps6365 {
  config: DeepPartial6365<NestedConfig6365>;
  path?: ConfigPaths6365;
}

const HeavyComponent6365 = memo(function HeavyComponent6365({ config }: HeavyProps6365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6365.displayName = 'HeavyComponent6365';
export default HeavyComponent6365;
