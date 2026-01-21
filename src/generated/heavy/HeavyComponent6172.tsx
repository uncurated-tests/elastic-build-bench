'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6172<T> = T extends (infer U)[]
  ? DeepReadonlyArray6172<U>
  : T extends object
  ? DeepReadonlyObject6172<T>
  : T;

interface DeepReadonlyArray6172<T> extends ReadonlyArray<DeepReadonly6172<T>> {}

type DeepReadonlyObject6172<T> = {
  readonly [P in keyof T]: DeepReadonly6172<T[P]>;
};

type UnionToIntersection6172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6172<T> = UnionToIntersection6172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6172<T extends unknown[], V> = [...T, V];

type TuplifyUnion6172<T, L = LastOf6172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6172<TuplifyUnion6172<Exclude<T, L>>, L>;

type DeepPartial6172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6172<T[P]> }
  : T;

type Paths6172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6172<K, Paths6172<T[K], Prev6172[D]>> : never }[keyof T]
  : never;

type Prev6172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6172 {
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

type ConfigPaths6172 = Paths6172<NestedConfig6172>;

interface HeavyProps6172 {
  config: DeepPartial6172<NestedConfig6172>;
  path?: ConfigPaths6172;
}

const HeavyComponent6172 = memo(function HeavyComponent6172({ config }: HeavyProps6172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6172.displayName = 'HeavyComponent6172';
export default HeavyComponent6172;
