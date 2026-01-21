'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6428<T> = T extends (infer U)[]
  ? DeepReadonlyArray6428<U>
  : T extends object
  ? DeepReadonlyObject6428<T>
  : T;

interface DeepReadonlyArray6428<T> extends ReadonlyArray<DeepReadonly6428<T>> {}

type DeepReadonlyObject6428<T> = {
  readonly [P in keyof T]: DeepReadonly6428<T[P]>;
};

type UnionToIntersection6428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6428<T> = UnionToIntersection6428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6428<T extends unknown[], V> = [...T, V];

type TuplifyUnion6428<T, L = LastOf6428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6428<TuplifyUnion6428<Exclude<T, L>>, L>;

type DeepPartial6428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6428<T[P]> }
  : T;

type Paths6428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6428<K, Paths6428<T[K], Prev6428[D]>> : never }[keyof T]
  : never;

type Prev6428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6428 {
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

type ConfigPaths6428 = Paths6428<NestedConfig6428>;

interface HeavyProps6428 {
  config: DeepPartial6428<NestedConfig6428>;
  path?: ConfigPaths6428;
}

const HeavyComponent6428 = memo(function HeavyComponent6428({ config }: HeavyProps6428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6428.displayName = 'HeavyComponent6428';
export default HeavyComponent6428;
