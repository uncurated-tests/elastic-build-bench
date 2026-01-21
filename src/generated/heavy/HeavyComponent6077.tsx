'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6077<T> = T extends (infer U)[]
  ? DeepReadonlyArray6077<U>
  : T extends object
  ? DeepReadonlyObject6077<T>
  : T;

interface DeepReadonlyArray6077<T> extends ReadonlyArray<DeepReadonly6077<T>> {}

type DeepReadonlyObject6077<T> = {
  readonly [P in keyof T]: DeepReadonly6077<T[P]>;
};

type UnionToIntersection6077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6077<T> = UnionToIntersection6077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6077<T extends unknown[], V> = [...T, V];

type TuplifyUnion6077<T, L = LastOf6077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6077<TuplifyUnion6077<Exclude<T, L>>, L>;

type DeepPartial6077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6077<T[P]> }
  : T;

type Paths6077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6077<K, Paths6077<T[K], Prev6077[D]>> : never }[keyof T]
  : never;

type Prev6077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6077 {
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

type ConfigPaths6077 = Paths6077<NestedConfig6077>;

interface HeavyProps6077 {
  config: DeepPartial6077<NestedConfig6077>;
  path?: ConfigPaths6077;
}

const HeavyComponent6077 = memo(function HeavyComponent6077({ config }: HeavyProps6077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6077.displayName = 'HeavyComponent6077';
export default HeavyComponent6077;
