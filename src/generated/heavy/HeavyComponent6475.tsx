'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6475<T> = T extends (infer U)[]
  ? DeepReadonlyArray6475<U>
  : T extends object
  ? DeepReadonlyObject6475<T>
  : T;

interface DeepReadonlyArray6475<T> extends ReadonlyArray<DeepReadonly6475<T>> {}

type DeepReadonlyObject6475<T> = {
  readonly [P in keyof T]: DeepReadonly6475<T[P]>;
};

type UnionToIntersection6475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6475<T> = UnionToIntersection6475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6475<T extends unknown[], V> = [...T, V];

type TuplifyUnion6475<T, L = LastOf6475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6475<TuplifyUnion6475<Exclude<T, L>>, L>;

type DeepPartial6475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6475<T[P]> }
  : T;

type Paths6475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6475<K, Paths6475<T[K], Prev6475[D]>> : never }[keyof T]
  : never;

type Prev6475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6475 {
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

type ConfigPaths6475 = Paths6475<NestedConfig6475>;

interface HeavyProps6475 {
  config: DeepPartial6475<NestedConfig6475>;
  path?: ConfigPaths6475;
}

const HeavyComponent6475 = memo(function HeavyComponent6475({ config }: HeavyProps6475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6475.displayName = 'HeavyComponent6475';
export default HeavyComponent6475;
