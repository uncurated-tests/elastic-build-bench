'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6177<T> = T extends (infer U)[]
  ? DeepReadonlyArray6177<U>
  : T extends object
  ? DeepReadonlyObject6177<T>
  : T;

interface DeepReadonlyArray6177<T> extends ReadonlyArray<DeepReadonly6177<T>> {}

type DeepReadonlyObject6177<T> = {
  readonly [P in keyof T]: DeepReadonly6177<T[P]>;
};

type UnionToIntersection6177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6177<T> = UnionToIntersection6177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6177<T extends unknown[], V> = [...T, V];

type TuplifyUnion6177<T, L = LastOf6177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6177<TuplifyUnion6177<Exclude<T, L>>, L>;

type DeepPartial6177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6177<T[P]> }
  : T;

type Paths6177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6177<K, Paths6177<T[K], Prev6177[D]>> : never }[keyof T]
  : never;

type Prev6177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6177 {
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

type ConfigPaths6177 = Paths6177<NestedConfig6177>;

interface HeavyProps6177 {
  config: DeepPartial6177<NestedConfig6177>;
  path?: ConfigPaths6177;
}

const HeavyComponent6177 = memo(function HeavyComponent6177({ config }: HeavyProps6177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6177.displayName = 'HeavyComponent6177';
export default HeavyComponent6177;
