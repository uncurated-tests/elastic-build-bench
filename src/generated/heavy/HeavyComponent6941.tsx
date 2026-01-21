'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6941<T> = T extends (infer U)[]
  ? DeepReadonlyArray6941<U>
  : T extends object
  ? DeepReadonlyObject6941<T>
  : T;

interface DeepReadonlyArray6941<T> extends ReadonlyArray<DeepReadonly6941<T>> {}

type DeepReadonlyObject6941<T> = {
  readonly [P in keyof T]: DeepReadonly6941<T[P]>;
};

type UnionToIntersection6941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6941<T> = UnionToIntersection6941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6941<T extends unknown[], V> = [...T, V];

type TuplifyUnion6941<T, L = LastOf6941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6941<TuplifyUnion6941<Exclude<T, L>>, L>;

type DeepPartial6941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6941<T[P]> }
  : T;

type Paths6941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6941<K, Paths6941<T[K], Prev6941[D]>> : never }[keyof T]
  : never;

type Prev6941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6941 {
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

type ConfigPaths6941 = Paths6941<NestedConfig6941>;

interface HeavyProps6941 {
  config: DeepPartial6941<NestedConfig6941>;
  path?: ConfigPaths6941;
}

const HeavyComponent6941 = memo(function HeavyComponent6941({ config }: HeavyProps6941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6941.displayName = 'HeavyComponent6941';
export default HeavyComponent6941;
