'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6424<T> = T extends (infer U)[]
  ? DeepReadonlyArray6424<U>
  : T extends object
  ? DeepReadonlyObject6424<T>
  : T;

interface DeepReadonlyArray6424<T> extends ReadonlyArray<DeepReadonly6424<T>> {}

type DeepReadonlyObject6424<T> = {
  readonly [P in keyof T]: DeepReadonly6424<T[P]>;
};

type UnionToIntersection6424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6424<T> = UnionToIntersection6424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6424<T extends unknown[], V> = [...T, V];

type TuplifyUnion6424<T, L = LastOf6424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6424<TuplifyUnion6424<Exclude<T, L>>, L>;

type DeepPartial6424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6424<T[P]> }
  : T;

type Paths6424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6424<K, Paths6424<T[K], Prev6424[D]>> : never }[keyof T]
  : never;

type Prev6424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6424 {
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

type ConfigPaths6424 = Paths6424<NestedConfig6424>;

interface HeavyProps6424 {
  config: DeepPartial6424<NestedConfig6424>;
  path?: ConfigPaths6424;
}

const HeavyComponent6424 = memo(function HeavyComponent6424({ config }: HeavyProps6424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6424.displayName = 'HeavyComponent6424';
export default HeavyComponent6424;
