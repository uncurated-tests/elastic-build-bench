'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly241<T> = T extends (infer U)[]
  ? DeepReadonlyArray241<U>
  : T extends object
  ? DeepReadonlyObject241<T>
  : T;

interface DeepReadonlyArray241<T> extends ReadonlyArray<DeepReadonly241<T>> {}

type DeepReadonlyObject241<T> = {
  readonly [P in keyof T]: DeepReadonly241<T[P]>;
};

type UnionToIntersection241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf241<T> = UnionToIntersection241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push241<T extends unknown[], V> = [...T, V];

type TuplifyUnion241<T, L = LastOf241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push241<TuplifyUnion241<Exclude<T, L>>, L>;

type DeepPartial241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial241<T[P]> }
  : T;

type Paths241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join241<K, Paths241<T[K], Prev241[D]>> : never }[keyof T]
  : never;

type Prev241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig241 {
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

type ConfigPaths241 = Paths241<NestedConfig241>;

interface HeavyProps241 {
  config: DeepPartial241<NestedConfig241>;
  path?: ConfigPaths241;
}

const HeavyComponent241 = memo(function HeavyComponent241({ config }: HeavyProps241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent241.displayName = 'HeavyComponent241';
export default HeavyComponent241;
