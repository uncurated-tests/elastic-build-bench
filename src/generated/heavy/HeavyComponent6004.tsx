'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6004<T> = T extends (infer U)[]
  ? DeepReadonlyArray6004<U>
  : T extends object
  ? DeepReadonlyObject6004<T>
  : T;

interface DeepReadonlyArray6004<T> extends ReadonlyArray<DeepReadonly6004<T>> {}

type DeepReadonlyObject6004<T> = {
  readonly [P in keyof T]: DeepReadonly6004<T[P]>;
};

type UnionToIntersection6004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6004<T> = UnionToIntersection6004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6004<T extends unknown[], V> = [...T, V];

type TuplifyUnion6004<T, L = LastOf6004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6004<TuplifyUnion6004<Exclude<T, L>>, L>;

type DeepPartial6004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6004<T[P]> }
  : T;

type Paths6004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6004<K, Paths6004<T[K], Prev6004[D]>> : never }[keyof T]
  : never;

type Prev6004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6004 {
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

type ConfigPaths6004 = Paths6004<NestedConfig6004>;

interface HeavyProps6004 {
  config: DeepPartial6004<NestedConfig6004>;
  path?: ConfigPaths6004;
}

const HeavyComponent6004 = memo(function HeavyComponent6004({ config }: HeavyProps6004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6004.displayName = 'HeavyComponent6004';
export default HeavyComponent6004;
