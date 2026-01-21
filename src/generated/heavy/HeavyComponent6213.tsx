'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6213<T> = T extends (infer U)[]
  ? DeepReadonlyArray6213<U>
  : T extends object
  ? DeepReadonlyObject6213<T>
  : T;

interface DeepReadonlyArray6213<T> extends ReadonlyArray<DeepReadonly6213<T>> {}

type DeepReadonlyObject6213<T> = {
  readonly [P in keyof T]: DeepReadonly6213<T[P]>;
};

type UnionToIntersection6213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6213<T> = UnionToIntersection6213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6213<T extends unknown[], V> = [...T, V];

type TuplifyUnion6213<T, L = LastOf6213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6213<TuplifyUnion6213<Exclude<T, L>>, L>;

type DeepPartial6213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6213<T[P]> }
  : T;

type Paths6213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6213<K, Paths6213<T[K], Prev6213[D]>> : never }[keyof T]
  : never;

type Prev6213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6213 {
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

type ConfigPaths6213 = Paths6213<NestedConfig6213>;

interface HeavyProps6213 {
  config: DeepPartial6213<NestedConfig6213>;
  path?: ConfigPaths6213;
}

const HeavyComponent6213 = memo(function HeavyComponent6213({ config }: HeavyProps6213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6213.displayName = 'HeavyComponent6213';
export default HeavyComponent6213;
