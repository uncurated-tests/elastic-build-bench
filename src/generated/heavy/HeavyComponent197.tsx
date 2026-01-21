'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly197<T> = T extends (infer U)[]
  ? DeepReadonlyArray197<U>
  : T extends object
  ? DeepReadonlyObject197<T>
  : T;

interface DeepReadonlyArray197<T> extends ReadonlyArray<DeepReadonly197<T>> {}

type DeepReadonlyObject197<T> = {
  readonly [P in keyof T]: DeepReadonly197<T[P]>;
};

type UnionToIntersection197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf197<T> = UnionToIntersection197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push197<T extends unknown[], V> = [...T, V];

type TuplifyUnion197<T, L = LastOf197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push197<TuplifyUnion197<Exclude<T, L>>, L>;

type DeepPartial197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial197<T[P]> }
  : T;

type Paths197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join197<K, Paths197<T[K], Prev197[D]>> : never }[keyof T]
  : never;

type Prev197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig197 {
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

type ConfigPaths197 = Paths197<NestedConfig197>;

interface HeavyProps197 {
  config: DeepPartial197<NestedConfig197>;
  path?: ConfigPaths197;
}

const HeavyComponent197 = memo(function HeavyComponent197({ config }: HeavyProps197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent197.displayName = 'HeavyComponent197';
export default HeavyComponent197;
