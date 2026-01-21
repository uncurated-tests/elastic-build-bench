'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10268<T> = T extends (infer U)[]
  ? DeepReadonlyArray10268<U>
  : T extends object
  ? DeepReadonlyObject10268<T>
  : T;

interface DeepReadonlyArray10268<T> extends ReadonlyArray<DeepReadonly10268<T>> {}

type DeepReadonlyObject10268<T> = {
  readonly [P in keyof T]: DeepReadonly10268<T[P]>;
};

type UnionToIntersection10268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10268<T> = UnionToIntersection10268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10268<T extends unknown[], V> = [...T, V];

type TuplifyUnion10268<T, L = LastOf10268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10268<TuplifyUnion10268<Exclude<T, L>>, L>;

type DeepPartial10268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10268<T[P]> }
  : T;

type Paths10268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10268<K, Paths10268<T[K], Prev10268[D]>> : never }[keyof T]
  : never;

type Prev10268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10268 {
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

type ConfigPaths10268 = Paths10268<NestedConfig10268>;

interface HeavyProps10268 {
  config: DeepPartial10268<NestedConfig10268>;
  path?: ConfigPaths10268;
}

const HeavyComponent10268 = memo(function HeavyComponent10268({ config }: HeavyProps10268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10268.displayName = 'HeavyComponent10268';
export default HeavyComponent10268;
