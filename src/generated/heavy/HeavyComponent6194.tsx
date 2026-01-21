'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6194<T> = T extends (infer U)[]
  ? DeepReadonlyArray6194<U>
  : T extends object
  ? DeepReadonlyObject6194<T>
  : T;

interface DeepReadonlyArray6194<T> extends ReadonlyArray<DeepReadonly6194<T>> {}

type DeepReadonlyObject6194<T> = {
  readonly [P in keyof T]: DeepReadonly6194<T[P]>;
};

type UnionToIntersection6194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6194<T> = UnionToIntersection6194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6194<T extends unknown[], V> = [...T, V];

type TuplifyUnion6194<T, L = LastOf6194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6194<TuplifyUnion6194<Exclude<T, L>>, L>;

type DeepPartial6194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6194<T[P]> }
  : T;

type Paths6194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6194<K, Paths6194<T[K], Prev6194[D]>> : never }[keyof T]
  : never;

type Prev6194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6194 {
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

type ConfigPaths6194 = Paths6194<NestedConfig6194>;

interface HeavyProps6194 {
  config: DeepPartial6194<NestedConfig6194>;
  path?: ConfigPaths6194;
}

const HeavyComponent6194 = memo(function HeavyComponent6194({ config }: HeavyProps6194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6194.displayName = 'HeavyComponent6194';
export default HeavyComponent6194;
