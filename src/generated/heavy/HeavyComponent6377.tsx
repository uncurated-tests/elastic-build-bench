'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6377<T> = T extends (infer U)[]
  ? DeepReadonlyArray6377<U>
  : T extends object
  ? DeepReadonlyObject6377<T>
  : T;

interface DeepReadonlyArray6377<T> extends ReadonlyArray<DeepReadonly6377<T>> {}

type DeepReadonlyObject6377<T> = {
  readonly [P in keyof T]: DeepReadonly6377<T[P]>;
};

type UnionToIntersection6377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6377<T> = UnionToIntersection6377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6377<T extends unknown[], V> = [...T, V];

type TuplifyUnion6377<T, L = LastOf6377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6377<TuplifyUnion6377<Exclude<T, L>>, L>;

type DeepPartial6377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6377<T[P]> }
  : T;

type Paths6377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6377<K, Paths6377<T[K], Prev6377[D]>> : never }[keyof T]
  : never;

type Prev6377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6377 {
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

type ConfigPaths6377 = Paths6377<NestedConfig6377>;

interface HeavyProps6377 {
  config: DeepPartial6377<NestedConfig6377>;
  path?: ConfigPaths6377;
}

const HeavyComponent6377 = memo(function HeavyComponent6377({ config }: HeavyProps6377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6377.displayName = 'HeavyComponent6377';
export default HeavyComponent6377;
