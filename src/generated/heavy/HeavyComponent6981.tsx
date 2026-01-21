'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6981<T> = T extends (infer U)[]
  ? DeepReadonlyArray6981<U>
  : T extends object
  ? DeepReadonlyObject6981<T>
  : T;

interface DeepReadonlyArray6981<T> extends ReadonlyArray<DeepReadonly6981<T>> {}

type DeepReadonlyObject6981<T> = {
  readonly [P in keyof T]: DeepReadonly6981<T[P]>;
};

type UnionToIntersection6981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6981<T> = UnionToIntersection6981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6981<T extends unknown[], V> = [...T, V];

type TuplifyUnion6981<T, L = LastOf6981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6981<TuplifyUnion6981<Exclude<T, L>>, L>;

type DeepPartial6981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6981<T[P]> }
  : T;

type Paths6981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6981<K, Paths6981<T[K], Prev6981[D]>> : never }[keyof T]
  : never;

type Prev6981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6981 {
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

type ConfigPaths6981 = Paths6981<NestedConfig6981>;

interface HeavyProps6981 {
  config: DeepPartial6981<NestedConfig6981>;
  path?: ConfigPaths6981;
}

const HeavyComponent6981 = memo(function HeavyComponent6981({ config }: HeavyProps6981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6981.displayName = 'HeavyComponent6981';
export default HeavyComponent6981;
