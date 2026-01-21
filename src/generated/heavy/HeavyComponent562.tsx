'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly562<T> = T extends (infer U)[]
  ? DeepReadonlyArray562<U>
  : T extends object
  ? DeepReadonlyObject562<T>
  : T;

interface DeepReadonlyArray562<T> extends ReadonlyArray<DeepReadonly562<T>> {}

type DeepReadonlyObject562<T> = {
  readonly [P in keyof T]: DeepReadonly562<T[P]>;
};

type UnionToIntersection562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf562<T> = UnionToIntersection562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push562<T extends unknown[], V> = [...T, V];

type TuplifyUnion562<T, L = LastOf562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push562<TuplifyUnion562<Exclude<T, L>>, L>;

type DeepPartial562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial562<T[P]> }
  : T;

type Paths562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join562<K, Paths562<T[K], Prev562[D]>> : never }[keyof T]
  : never;

type Prev562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig562 {
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

type ConfigPaths562 = Paths562<NestedConfig562>;

interface HeavyProps562 {
  config: DeepPartial562<NestedConfig562>;
  path?: ConfigPaths562;
}

const HeavyComponent562 = memo(function HeavyComponent562({ config }: HeavyProps562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent562.displayName = 'HeavyComponent562';
export default HeavyComponent562;
