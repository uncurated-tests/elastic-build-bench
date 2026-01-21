'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10423<T> = T extends (infer U)[]
  ? DeepReadonlyArray10423<U>
  : T extends object
  ? DeepReadonlyObject10423<T>
  : T;

interface DeepReadonlyArray10423<T> extends ReadonlyArray<DeepReadonly10423<T>> {}

type DeepReadonlyObject10423<T> = {
  readonly [P in keyof T]: DeepReadonly10423<T[P]>;
};

type UnionToIntersection10423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10423<T> = UnionToIntersection10423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10423<T extends unknown[], V> = [...T, V];

type TuplifyUnion10423<T, L = LastOf10423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10423<TuplifyUnion10423<Exclude<T, L>>, L>;

type DeepPartial10423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10423<T[P]> }
  : T;

type Paths10423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10423<K, Paths10423<T[K], Prev10423[D]>> : never }[keyof T]
  : never;

type Prev10423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10423 {
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

type ConfigPaths10423 = Paths10423<NestedConfig10423>;

interface HeavyProps10423 {
  config: DeepPartial10423<NestedConfig10423>;
  path?: ConfigPaths10423;
}

const HeavyComponent10423 = memo(function HeavyComponent10423({ config }: HeavyProps10423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10423.displayName = 'HeavyComponent10423';
export default HeavyComponent10423;
