'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6021<T> = T extends (infer U)[]
  ? DeepReadonlyArray6021<U>
  : T extends object
  ? DeepReadonlyObject6021<T>
  : T;

interface DeepReadonlyArray6021<T> extends ReadonlyArray<DeepReadonly6021<T>> {}

type DeepReadonlyObject6021<T> = {
  readonly [P in keyof T]: DeepReadonly6021<T[P]>;
};

type UnionToIntersection6021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6021<T> = UnionToIntersection6021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6021<T extends unknown[], V> = [...T, V];

type TuplifyUnion6021<T, L = LastOf6021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6021<TuplifyUnion6021<Exclude<T, L>>, L>;

type DeepPartial6021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6021<T[P]> }
  : T;

type Paths6021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6021<K, Paths6021<T[K], Prev6021[D]>> : never }[keyof T]
  : never;

type Prev6021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6021 {
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

type ConfigPaths6021 = Paths6021<NestedConfig6021>;

interface HeavyProps6021 {
  config: DeepPartial6021<NestedConfig6021>;
  path?: ConfigPaths6021;
}

const HeavyComponent6021 = memo(function HeavyComponent6021({ config }: HeavyProps6021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6021.displayName = 'HeavyComponent6021';
export default HeavyComponent6021;
