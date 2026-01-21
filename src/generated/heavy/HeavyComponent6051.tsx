'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6051<T> = T extends (infer U)[]
  ? DeepReadonlyArray6051<U>
  : T extends object
  ? DeepReadonlyObject6051<T>
  : T;

interface DeepReadonlyArray6051<T> extends ReadonlyArray<DeepReadonly6051<T>> {}

type DeepReadonlyObject6051<T> = {
  readonly [P in keyof T]: DeepReadonly6051<T[P]>;
};

type UnionToIntersection6051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6051<T> = UnionToIntersection6051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6051<T extends unknown[], V> = [...T, V];

type TuplifyUnion6051<T, L = LastOf6051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6051<TuplifyUnion6051<Exclude<T, L>>, L>;

type DeepPartial6051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6051<T[P]> }
  : T;

type Paths6051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6051<K, Paths6051<T[K], Prev6051[D]>> : never }[keyof T]
  : never;

type Prev6051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6051 {
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

type ConfigPaths6051 = Paths6051<NestedConfig6051>;

interface HeavyProps6051 {
  config: DeepPartial6051<NestedConfig6051>;
  path?: ConfigPaths6051;
}

const HeavyComponent6051 = memo(function HeavyComponent6051({ config }: HeavyProps6051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6051.displayName = 'HeavyComponent6051';
export default HeavyComponent6051;
