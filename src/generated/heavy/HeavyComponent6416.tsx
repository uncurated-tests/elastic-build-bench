'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6416<T> = T extends (infer U)[]
  ? DeepReadonlyArray6416<U>
  : T extends object
  ? DeepReadonlyObject6416<T>
  : T;

interface DeepReadonlyArray6416<T> extends ReadonlyArray<DeepReadonly6416<T>> {}

type DeepReadonlyObject6416<T> = {
  readonly [P in keyof T]: DeepReadonly6416<T[P]>;
};

type UnionToIntersection6416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6416<T> = UnionToIntersection6416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6416<T extends unknown[], V> = [...T, V];

type TuplifyUnion6416<T, L = LastOf6416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6416<TuplifyUnion6416<Exclude<T, L>>, L>;

type DeepPartial6416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6416<T[P]> }
  : T;

type Paths6416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6416<K, Paths6416<T[K], Prev6416[D]>> : never }[keyof T]
  : never;

type Prev6416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6416 {
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

type ConfigPaths6416 = Paths6416<NestedConfig6416>;

interface HeavyProps6416 {
  config: DeepPartial6416<NestedConfig6416>;
  path?: ConfigPaths6416;
}

const HeavyComponent6416 = memo(function HeavyComponent6416({ config }: HeavyProps6416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6416.displayName = 'HeavyComponent6416';
export default HeavyComponent6416;
