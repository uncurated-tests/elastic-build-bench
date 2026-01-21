'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10270<T> = T extends (infer U)[]
  ? DeepReadonlyArray10270<U>
  : T extends object
  ? DeepReadonlyObject10270<T>
  : T;

interface DeepReadonlyArray10270<T> extends ReadonlyArray<DeepReadonly10270<T>> {}

type DeepReadonlyObject10270<T> = {
  readonly [P in keyof T]: DeepReadonly10270<T[P]>;
};

type UnionToIntersection10270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10270<T> = UnionToIntersection10270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10270<T extends unknown[], V> = [...T, V];

type TuplifyUnion10270<T, L = LastOf10270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10270<TuplifyUnion10270<Exclude<T, L>>, L>;

type DeepPartial10270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10270<T[P]> }
  : T;

type Paths10270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10270<K, Paths10270<T[K], Prev10270[D]>> : never }[keyof T]
  : never;

type Prev10270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10270 {
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

type ConfigPaths10270 = Paths10270<NestedConfig10270>;

interface HeavyProps10270 {
  config: DeepPartial10270<NestedConfig10270>;
  path?: ConfigPaths10270;
}

const HeavyComponent10270 = memo(function HeavyComponent10270({ config }: HeavyProps10270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10270.displayName = 'HeavyComponent10270';
export default HeavyComponent10270;
