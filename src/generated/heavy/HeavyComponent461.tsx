'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly461<T> = T extends (infer U)[]
  ? DeepReadonlyArray461<U>
  : T extends object
  ? DeepReadonlyObject461<T>
  : T;

interface DeepReadonlyArray461<T> extends ReadonlyArray<DeepReadonly461<T>> {}

type DeepReadonlyObject461<T> = {
  readonly [P in keyof T]: DeepReadonly461<T[P]>;
};

type UnionToIntersection461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf461<T> = UnionToIntersection461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push461<T extends unknown[], V> = [...T, V];

type TuplifyUnion461<T, L = LastOf461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push461<TuplifyUnion461<Exclude<T, L>>, L>;

type DeepPartial461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial461<T[P]> }
  : T;

type Paths461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join461<K, Paths461<T[K], Prev461[D]>> : never }[keyof T]
  : never;

type Prev461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig461 {
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

type ConfigPaths461 = Paths461<NestedConfig461>;

interface HeavyProps461 {
  config: DeepPartial461<NestedConfig461>;
  path?: ConfigPaths461;
}

const HeavyComponent461 = memo(function HeavyComponent461({ config }: HeavyProps461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent461.displayName = 'HeavyComponent461';
export default HeavyComponent461;
