'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6926<T> = T extends (infer U)[]
  ? DeepReadonlyArray6926<U>
  : T extends object
  ? DeepReadonlyObject6926<T>
  : T;

interface DeepReadonlyArray6926<T> extends ReadonlyArray<DeepReadonly6926<T>> {}

type DeepReadonlyObject6926<T> = {
  readonly [P in keyof T]: DeepReadonly6926<T[P]>;
};

type UnionToIntersection6926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6926<T> = UnionToIntersection6926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6926<T extends unknown[], V> = [...T, V];

type TuplifyUnion6926<T, L = LastOf6926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6926<TuplifyUnion6926<Exclude<T, L>>, L>;

type DeepPartial6926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6926<T[P]> }
  : T;

type Paths6926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6926<K, Paths6926<T[K], Prev6926[D]>> : never }[keyof T]
  : never;

type Prev6926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6926 {
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

type ConfigPaths6926 = Paths6926<NestedConfig6926>;

interface HeavyProps6926 {
  config: DeepPartial6926<NestedConfig6926>;
  path?: ConfigPaths6926;
}

const HeavyComponent6926 = memo(function HeavyComponent6926({ config }: HeavyProps6926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6926.displayName = 'HeavyComponent6926';
export default HeavyComponent6926;
