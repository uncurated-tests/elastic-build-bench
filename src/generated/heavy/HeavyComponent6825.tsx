'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6825<T> = T extends (infer U)[]
  ? DeepReadonlyArray6825<U>
  : T extends object
  ? DeepReadonlyObject6825<T>
  : T;

interface DeepReadonlyArray6825<T> extends ReadonlyArray<DeepReadonly6825<T>> {}

type DeepReadonlyObject6825<T> = {
  readonly [P in keyof T]: DeepReadonly6825<T[P]>;
};

type UnionToIntersection6825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6825<T> = UnionToIntersection6825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6825<T extends unknown[], V> = [...T, V];

type TuplifyUnion6825<T, L = LastOf6825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6825<TuplifyUnion6825<Exclude<T, L>>, L>;

type DeepPartial6825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6825<T[P]> }
  : T;

type Paths6825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6825<K, Paths6825<T[K], Prev6825[D]>> : never }[keyof T]
  : never;

type Prev6825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6825 {
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

type ConfigPaths6825 = Paths6825<NestedConfig6825>;

interface HeavyProps6825 {
  config: DeepPartial6825<NestedConfig6825>;
  path?: ConfigPaths6825;
}

const HeavyComponent6825 = memo(function HeavyComponent6825({ config }: HeavyProps6825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6825.displayName = 'HeavyComponent6825';
export default HeavyComponent6825;
