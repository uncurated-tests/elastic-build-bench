'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6555<T> = T extends (infer U)[]
  ? DeepReadonlyArray6555<U>
  : T extends object
  ? DeepReadonlyObject6555<T>
  : T;

interface DeepReadonlyArray6555<T> extends ReadonlyArray<DeepReadonly6555<T>> {}

type DeepReadonlyObject6555<T> = {
  readonly [P in keyof T]: DeepReadonly6555<T[P]>;
};

type UnionToIntersection6555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6555<T> = UnionToIntersection6555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6555<T extends unknown[], V> = [...T, V];

type TuplifyUnion6555<T, L = LastOf6555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6555<TuplifyUnion6555<Exclude<T, L>>, L>;

type DeepPartial6555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6555<T[P]> }
  : T;

type Paths6555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6555<K, Paths6555<T[K], Prev6555[D]>> : never }[keyof T]
  : never;

type Prev6555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6555 {
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

type ConfigPaths6555 = Paths6555<NestedConfig6555>;

interface HeavyProps6555 {
  config: DeepPartial6555<NestedConfig6555>;
  path?: ConfigPaths6555;
}

const HeavyComponent6555 = memo(function HeavyComponent6555({ config }: HeavyProps6555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6555.displayName = 'HeavyComponent6555';
export default HeavyComponent6555;
