'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6186<T> = T extends (infer U)[]
  ? DeepReadonlyArray6186<U>
  : T extends object
  ? DeepReadonlyObject6186<T>
  : T;

interface DeepReadonlyArray6186<T> extends ReadonlyArray<DeepReadonly6186<T>> {}

type DeepReadonlyObject6186<T> = {
  readonly [P in keyof T]: DeepReadonly6186<T[P]>;
};

type UnionToIntersection6186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6186<T> = UnionToIntersection6186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6186<T extends unknown[], V> = [...T, V];

type TuplifyUnion6186<T, L = LastOf6186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6186<TuplifyUnion6186<Exclude<T, L>>, L>;

type DeepPartial6186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6186<T[P]> }
  : T;

type Paths6186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6186<K, Paths6186<T[K], Prev6186[D]>> : never }[keyof T]
  : never;

type Prev6186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6186 {
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

type ConfigPaths6186 = Paths6186<NestedConfig6186>;

interface HeavyProps6186 {
  config: DeepPartial6186<NestedConfig6186>;
  path?: ConfigPaths6186;
}

const HeavyComponent6186 = memo(function HeavyComponent6186({ config }: HeavyProps6186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6186.displayName = 'HeavyComponent6186';
export default HeavyComponent6186;
