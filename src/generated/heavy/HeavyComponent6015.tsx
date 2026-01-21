'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6015<T> = T extends (infer U)[]
  ? DeepReadonlyArray6015<U>
  : T extends object
  ? DeepReadonlyObject6015<T>
  : T;

interface DeepReadonlyArray6015<T> extends ReadonlyArray<DeepReadonly6015<T>> {}

type DeepReadonlyObject6015<T> = {
  readonly [P in keyof T]: DeepReadonly6015<T[P]>;
};

type UnionToIntersection6015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6015<T> = UnionToIntersection6015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6015<T extends unknown[], V> = [...T, V];

type TuplifyUnion6015<T, L = LastOf6015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6015<TuplifyUnion6015<Exclude<T, L>>, L>;

type DeepPartial6015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6015<T[P]> }
  : T;

type Paths6015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6015<K, Paths6015<T[K], Prev6015[D]>> : never }[keyof T]
  : never;

type Prev6015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6015 {
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

type ConfigPaths6015 = Paths6015<NestedConfig6015>;

interface HeavyProps6015 {
  config: DeepPartial6015<NestedConfig6015>;
  path?: ConfigPaths6015;
}

const HeavyComponent6015 = memo(function HeavyComponent6015({ config }: HeavyProps6015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6015.displayName = 'HeavyComponent6015';
export default HeavyComponent6015;
