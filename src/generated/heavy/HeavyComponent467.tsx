'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly467<T> = T extends (infer U)[]
  ? DeepReadonlyArray467<U>
  : T extends object
  ? DeepReadonlyObject467<T>
  : T;

interface DeepReadonlyArray467<T> extends ReadonlyArray<DeepReadonly467<T>> {}

type DeepReadonlyObject467<T> = {
  readonly [P in keyof T]: DeepReadonly467<T[P]>;
};

type UnionToIntersection467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf467<T> = UnionToIntersection467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push467<T extends unknown[], V> = [...T, V];

type TuplifyUnion467<T, L = LastOf467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push467<TuplifyUnion467<Exclude<T, L>>, L>;

type DeepPartial467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial467<T[P]> }
  : T;

type Paths467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join467<K, Paths467<T[K], Prev467[D]>> : never }[keyof T]
  : never;

type Prev467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig467 {
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

type ConfigPaths467 = Paths467<NestedConfig467>;

interface HeavyProps467 {
  config: DeepPartial467<NestedConfig467>;
  path?: ConfigPaths467;
}

const HeavyComponent467 = memo(function HeavyComponent467({ config }: HeavyProps467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent467.displayName = 'HeavyComponent467';
export default HeavyComponent467;
