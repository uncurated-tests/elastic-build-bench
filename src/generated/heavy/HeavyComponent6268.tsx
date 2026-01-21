'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6268<T> = T extends (infer U)[]
  ? DeepReadonlyArray6268<U>
  : T extends object
  ? DeepReadonlyObject6268<T>
  : T;

interface DeepReadonlyArray6268<T> extends ReadonlyArray<DeepReadonly6268<T>> {}

type DeepReadonlyObject6268<T> = {
  readonly [P in keyof T]: DeepReadonly6268<T[P]>;
};

type UnionToIntersection6268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6268<T> = UnionToIntersection6268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6268<T extends unknown[], V> = [...T, V];

type TuplifyUnion6268<T, L = LastOf6268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6268<TuplifyUnion6268<Exclude<T, L>>, L>;

type DeepPartial6268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6268<T[P]> }
  : T;

type Paths6268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6268<K, Paths6268<T[K], Prev6268[D]>> : never }[keyof T]
  : never;

type Prev6268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6268 {
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

type ConfigPaths6268 = Paths6268<NestedConfig6268>;

interface HeavyProps6268 {
  config: DeepPartial6268<NestedConfig6268>;
  path?: ConfigPaths6268;
}

const HeavyComponent6268 = memo(function HeavyComponent6268({ config }: HeavyProps6268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6268.displayName = 'HeavyComponent6268';
export default HeavyComponent6268;
