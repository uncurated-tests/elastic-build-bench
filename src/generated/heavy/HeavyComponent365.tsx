'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly365<T> = T extends (infer U)[]
  ? DeepReadonlyArray365<U>
  : T extends object
  ? DeepReadonlyObject365<T>
  : T;

interface DeepReadonlyArray365<T> extends ReadonlyArray<DeepReadonly365<T>> {}

type DeepReadonlyObject365<T> = {
  readonly [P in keyof T]: DeepReadonly365<T[P]>;
};

type UnionToIntersection365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf365<T> = UnionToIntersection365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push365<T extends unknown[], V> = [...T, V];

type TuplifyUnion365<T, L = LastOf365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push365<TuplifyUnion365<Exclude<T, L>>, L>;

type DeepPartial365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial365<T[P]> }
  : T;

type Paths365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join365<K, Paths365<T[K], Prev365[D]>> : never }[keyof T]
  : never;

type Prev365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig365 {
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

type ConfigPaths365 = Paths365<NestedConfig365>;

interface HeavyProps365 {
  config: DeepPartial365<NestedConfig365>;
  path?: ConfigPaths365;
}

const HeavyComponent365 = memo(function HeavyComponent365({ config }: HeavyProps365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent365.displayName = 'HeavyComponent365';
export default HeavyComponent365;
