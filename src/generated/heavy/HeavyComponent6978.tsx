'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6978<T> = T extends (infer U)[]
  ? DeepReadonlyArray6978<U>
  : T extends object
  ? DeepReadonlyObject6978<T>
  : T;

interface DeepReadonlyArray6978<T> extends ReadonlyArray<DeepReadonly6978<T>> {}

type DeepReadonlyObject6978<T> = {
  readonly [P in keyof T]: DeepReadonly6978<T[P]>;
};

type UnionToIntersection6978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6978<T> = UnionToIntersection6978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6978<T extends unknown[], V> = [...T, V];

type TuplifyUnion6978<T, L = LastOf6978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6978<TuplifyUnion6978<Exclude<T, L>>, L>;

type DeepPartial6978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6978<T[P]> }
  : T;

type Paths6978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6978<K, Paths6978<T[K], Prev6978[D]>> : never }[keyof T]
  : never;

type Prev6978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6978 {
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

type ConfigPaths6978 = Paths6978<NestedConfig6978>;

interface HeavyProps6978 {
  config: DeepPartial6978<NestedConfig6978>;
  path?: ConfigPaths6978;
}

const HeavyComponent6978 = memo(function HeavyComponent6978({ config }: HeavyProps6978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6978.displayName = 'HeavyComponent6978';
export default HeavyComponent6978;
