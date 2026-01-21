'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly953<T> = T extends (infer U)[]
  ? DeepReadonlyArray953<U>
  : T extends object
  ? DeepReadonlyObject953<T>
  : T;

interface DeepReadonlyArray953<T> extends ReadonlyArray<DeepReadonly953<T>> {}

type DeepReadonlyObject953<T> = {
  readonly [P in keyof T]: DeepReadonly953<T[P]>;
};

type UnionToIntersection953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf953<T> = UnionToIntersection953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push953<T extends unknown[], V> = [...T, V];

type TuplifyUnion953<T, L = LastOf953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push953<TuplifyUnion953<Exclude<T, L>>, L>;

type DeepPartial953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial953<T[P]> }
  : T;

type Paths953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join953<K, Paths953<T[K], Prev953[D]>> : never }[keyof T]
  : never;

type Prev953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig953 {
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

type ConfigPaths953 = Paths953<NestedConfig953>;

interface HeavyProps953 {
  config: DeepPartial953<NestedConfig953>;
  path?: ConfigPaths953;
}

const HeavyComponent953 = memo(function HeavyComponent953({ config }: HeavyProps953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent953.displayName = 'HeavyComponent953';
export default HeavyComponent953;
