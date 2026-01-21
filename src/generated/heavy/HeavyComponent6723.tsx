'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6723<T> = T extends (infer U)[]
  ? DeepReadonlyArray6723<U>
  : T extends object
  ? DeepReadonlyObject6723<T>
  : T;

interface DeepReadonlyArray6723<T> extends ReadonlyArray<DeepReadonly6723<T>> {}

type DeepReadonlyObject6723<T> = {
  readonly [P in keyof T]: DeepReadonly6723<T[P]>;
};

type UnionToIntersection6723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6723<T> = UnionToIntersection6723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6723<T extends unknown[], V> = [...T, V];

type TuplifyUnion6723<T, L = LastOf6723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6723<TuplifyUnion6723<Exclude<T, L>>, L>;

type DeepPartial6723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6723<T[P]> }
  : T;

type Paths6723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6723<K, Paths6723<T[K], Prev6723[D]>> : never }[keyof T]
  : never;

type Prev6723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6723 {
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

type ConfigPaths6723 = Paths6723<NestedConfig6723>;

interface HeavyProps6723 {
  config: DeepPartial6723<NestedConfig6723>;
  path?: ConfigPaths6723;
}

const HeavyComponent6723 = memo(function HeavyComponent6723({ config }: HeavyProps6723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6723.displayName = 'HeavyComponent6723';
export default HeavyComponent6723;
